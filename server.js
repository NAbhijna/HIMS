import express from 'express';
import pkg from 'pg';
import cors from 'cors'; // Add this import
const { Pool } = pkg;

const app = express();
const port = 5000;

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from your frontend
  methods: ['GET', 'POST'], // Allow specific HTTP methods
  allowedHeaders: ['Content-Type'], // Allow specific headers
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Database connection configuration
const pool = new Pool({
  user: 'postgres', // Update with the correct database user
  host: 'localhost',
  database: 'insurance_db',
  password: 'Annuman@7', // Update with the correct database password
  port: 5432,
});

// Test database connection endpoint
app.get('/api/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.status(200).json({ success: true, time: result.rows[0].now });
  } catch (error) {
    console.error('Error connecting to the database:', error); // Log detailed error
    res.status(500).json({ success: false, error: 'Database connection failed' });
  }
});

// Endpoint to handle form submission
app.post('/api/insurance', async (req, res) => {
  const client = await pool.connect();
  
  try {
    await client.query('BEGIN');
    
    // Log incoming data
    console.log('Received form data:', JSON.stringify(req.body, null, 2));

    // Validate required fields but allow duplicates
    if (!req.body.personalInfo || !req.body.healthInfo || !req.body.coverage) {
      throw new Error('Missing required form sections');
    }

    // Convert empty strings to null for the database
    const personInfo = {
      firstName: req.body.personalInfo.firstName || null,
      lastName: req.body.personalInfo.lastName || null,
      email: req.body.personalInfo.email || null,
      phone: req.body.personalInfo.phone || null,
      dateOfBirth: req.body.personalInfo.dateOfBirth || null,
      gender: req.body.personalInfo.gender || null,
      occupation: req.body.personalInfo.occupation || null,
      incomeRange: req.body.personalInfo.incomeRange || null
    };

    // Insert Personal Info without unique constraint check
    const personalInfoResult = await client.query(
      `INSERT INTO insurance.personal_info 
       (first_name, last_name, email, phone, date_of_birth, gender, occupation, income_range)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING person_id`,
      Object.values(personInfo)
    ).catch(err => {
      console.error('Error inserting personal info:', err);
      // Continue with insert even if duplicate
      throw new Error(`Database error: ${err.message}`);
    });
    
    const personId = personalInfoResult.rows[0].person_id;

    // 2. Insert Address
    await client.query(
      `INSERT INTO insurance.address 
       (person_id, street, city, state, pin_code)
       VALUES ($1, $2, $3, $4, $5)`,
      [
        personId,
        req.body.address.street,
        req.body.address.city,
        req.body.address.state,
        req.body.address.pinCode
      ]
    );

    // 3. Insert Coverage
    const coverageResult = await client.query(
      `INSERT INTO insurance.coverage 
       (person_id, plan_type, coverage_amount, payment_method, payment_frequency, additional_benefits)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING coverage_id`,
      [
        personId,
        req.body.coverage.planType,
        req.body.coverage.coverageAmount,
        req.body.coverage.paymentMethod,
        req.body.coverage.paymentFrequency,
        req.body.coverage.additionalBenefits
      ]
    );

    const coverageId = coverageResult.rows[0].coverage_id;

    // 4. Insert Family Members
    if (req.body.coverage.familyMembers && req.body.coverage.familyMembers.length > 0) {
      const familyMemberValues = req.body.coverage.familyMembers.map(member => 
        `(${coverageId}, '${member.name}', '${member.relation}', ${member.age}, '${member.gender}')`
      ).join(',');

      await client.query(
        `INSERT INTO insurance.family_members 
         (coverage_id, name, relation, age, gender)
         VALUES ${familyMemberValues}`
      );
    }

    // 5. Insert Health Info
    await client.query(
      `INSERT INTO insurance.health_info 
       (person_id, height, weight, has_existing_conditions, existing_conditions, 
        smoking_status, family_history, exercise_frequency, alcohol_consumption, 
        taking_medications, medications)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
      [
        personId,
        req.body.healthInfo.height,
        req.body.healthInfo.weight,
        req.body.healthInfo.hasExistingConditions,
        req.body.healthInfo.existingConditions,
        req.body.healthInfo.smokingStatus,
        req.body.healthInfo.familyHistory,
        req.body.healthInfo.exerciseFrequency,
        req.body.healthInfo.alcoholConsumption,
        req.body.healthInfo.takingMedications,
        req.body.healthInfo.medications
      ]
    );

    await client.query('COMMIT');
    res.json({ success: true, message: 'Insurance application submitted successfully' });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Detailed error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error submitting insurance application', 
      error: error.message
    });
  } finally {
    client.release();
  }
});

// Default route to handle root requests
app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});