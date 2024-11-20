
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 5000;

// PostgreSQL connection pool
const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'insurance_db',
  password: 'your_password',
  port: 5432,
});

app.use(cors());
app.use(bodyParser.json());

app.post('/api/insurance', async (req, res) => {
  const { personalInfo, address, policy, hospital, disease, test, claim, billing } = req.body;

  try {
    const client = await pool.connect();
    await client.query('BEGIN');

    const personalInfoResult = await client.query(
      'INSERT INTO personal_info (first_name, last_name, email, phone, password, date_of_birth, status) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING person_id',
      [personalInfo.firstName, personalInfo.lastName, personalInfo.email, personalInfo.phone, personalInfo.password, personalInfo.dateOfBirth, personalInfo.status]
    );
    const personId = personalInfoResult.rows[0].person_id;

    await client.query(
      'INSERT INTO address (person_id, street, city, state, pin_code) VALUES ($1, $2, $3, $4, $5)',
      [personId, address.street, address.city, address.state, address.pinCode]
    );

    await client.query(
      'INSERT INTO policy (person_id, policy_number, policy_type, sum_insured, tenure, premium, start_date, end_date, policy_benefits, medical_history) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
      [personId, policy.policyNumber, policy.policyType, policy.sumInsured, policy.tenure, policy.premium, policy.startDate, policy.endDate, policy.policyBenefits, policy.medicalHistory]
    );

    await client.query(
      'INSERT INTO hospital (name, address, is_networked) VALUES ($1, $2, $3)',
      [hospital.name, hospital.address, hospital.isNetworked]
    );

    await client.query(
      'INSERT INTO disease (name, code, infected_from, diagnosis_date) VALUES ($1, $2, $3, $4)',
      [disease.name, disease.code, disease.infectedFrom, disease.diagnosisDate]
    );

    await client.query(
      'INSERT INTO test (code, disease_code, price) VALUES ($1, $2, $3)',
      [test.code, test.diseaseCode, test.price]
    );

    await client.query(
      'INSERT INTO claim (policy_number, person_id, issued_amount, issued_date, status, claimed_amount) VALUES ($1, $2, $3, $4, $5, $6)',
      [claim.policyNumber, personId, claim.issuedAmount, claim.issuedDate, claim.status, claim.claimedAmount]
    );

    await client.query(
      'INSERT INTO billing (disease_code, bill_amount, date_of_admission, date_of_discharge) VALUES ($1, $2, $3, $4)',
      [billing.diseaseCode, billing.billAmount, billing.dateOfAdmission, billing.dateOfDischarge]
    );

    await client.query('COMMIT');
    client.release();
    res.status(200).send('Form data saved successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving form data');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});