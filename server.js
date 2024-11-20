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
    
    // Helper function to validate date
    const isValidDate = (dateString) => {
      if (!dateString) return false;
      const date = new Date(dateString);
      return date instanceof Date && !isNaN(date);
    };

    // Validate required dates before insertion
    if (!isValidDate(req.body.personalInfo.dateOfBirth)) {
      throw new Error('Date of birth is required and must be valid');
    }

    // Continue with your existing insertion logic, but add NULL for optional dates
    const personalInfoQuery = `
      INSERT INTO personal_info (first_name, last_name, email, phone, password, date_of_birth, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING person_id
    `;
    
    const personalInfoValues = [
      req.body.personalInfo.firstName,
      req.body.personalInfo.lastName,
      req.body.personalInfo.email,
      req.body.personalInfo.phone,
      req.body.personalInfo.password,
      req.body.personalInfo.dateOfBirth,
      req.body.personalInfo.status
    ];

    const { personalInfo, address, policy, hospital, disease, test, claim, billing } = req.body;

    // Insert personal information
    const personalInfoResult = await pool.query(
      'INSERT INTO personal_info (first_name, last_name, email, phone, password, date_of_birth, status) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING person_id',
      [personalInfo.firstName, personalInfo.lastName, personalInfo.email, personalInfo.phone, personalInfo.password, personalInfo.dateOfBirth, personalInfo.status]
    );
    const personId = personalInfoResult.rows[0].person_id;

    // Insert address
    await pool.query(
      'INSERT INTO address (person_id, street, city, state, pin_code) VALUES ($1, $2, $3, $4, $5)',
      [personId, address.street, address.city, address.state, address.pinCode]
    );

    // Insert policy
    await pool.query(
      'INSERT INTO policy (person_id, policy_number, policy_type, sum_insured, tenure, premium, start_date, end_date, policy_benefits, medical_history) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
      [personId, policy.policyNumber, policy.policyType, policy.sumInsured, policy.tenure, policy.premium, policy.startDate, policy.endDate, policy.policyBenefits, policy.medicalHistory]
    );

    // Insert hospital
    await pool.query(
      'INSERT INTO hospital (name, address, is_networked) VALUES ($1, $2, $3)',
      [hospital.name, hospital.address, hospital.isNetworked]
    );

    // Insert disease
    await pool.query(
      'INSERT INTO disease (name, code, infected_from, diagnosis_date) VALUES ($1, $2, $3, $4)',
      [disease.name, disease.code, disease.infectedFrom, disease.diagnosisDate]
    );

    // Insert test
    await pool.query(
      'INSERT INTO test (code, disease_code, price) VALUES ($1, $2, $3)',
      [test.code, test.diseaseCode, test.price]
    );

    // Insert claim
    await pool.query(
      'INSERT INTO claim (policy_number, person_id, issued_amount, issued_date, status, claimed_amount) VALUES ($1, $2, $3, $4, $5, $6)',
      [claim.policyNumber, personId, claim.issuedAmount, claim.issuedDate, claim.status, claim.claimedAmount]
    );

    // Insert billing
    await pool.query(
      'INSERT INTO billing (disease_code, bill_amount, date_of_admission, date_of_discharge) VALUES ($1, $2, $3, $4)',
      [billing.diseaseCode, billing.billAmount, billing.dateOfAdmission, billing.dateOfDischarge]
    );

    await client.query('COMMIT');
    res.json({ success: true, message: 'Data inserted successfully' });
  } catch (error) {
    await client.query('ROLLBACK');
    res.status(500).json({ 
      success: false, 
      message: 'Error inserting data', 
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