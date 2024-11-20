
-- Insert dummy data into personal_info table
INSERT INTO personal_info (first_name, last_name, email, phone, password, date_of_birth, status)
VALUES 
('John', 'Doe', 'john.doe@example.com', '1234567890', 'password123', '1980-01-01', 'active'),
('Jane', 'Smith', 'jane.smith@example.com', '0987654321', 'password456', '1990-02-02', 'inactive');

-- Insert dummy data into address table
INSERT INTO address (person_id, street, city, state, pin_code)
VALUES 
(1, '123 Main St', 'Anytown', 'Anystate', '12345'),
(2, '456 Elm St', 'Othertown', 'Otherstate', '67890');

-- Insert dummy data into policy table
INSERT INTO policy (person_id, policy_number, policy_type, sum_insured, tenure, premium, start_date, end_date, policy_benefits, medical_history)
VALUES 
(1, 'POL123456', 'individual', 100000.00, 5, 500.00, '2023-01-01', '2028-01-01', 'Basic health coverage', 'None'),
(2, 'POL654321', 'family', 200000.00, 10, 1000.00, '2023-02-01', '2033-02-01', 'Comprehensive health coverage', 'Asthma');

-- Insert dummy data into hospital table
INSERT INTO hospital (name, address, is_networked)
VALUES 
('General Hospital', '789 Oak St, Anytown, Anystate', true),
('Specialty Clinic', '101 Pine St, Othertown, Otherstate', false);

-- Insert dummy data into disease table
INSERT INTO disease (name, code, infected_from, diagnosis_date)
VALUES 
('Flu', 'FLU123', '2023-01-15', '2023-01-20'),
('Asthma', 'AST456', '2022-12-01', '2022-12-05');

-- Insert dummy data into test table
INSERT INTO test (code, disease_code, price)
VALUES 
('TEST001', 'FLU123', 50.00),
('TEST002', 'AST456', 75.00);

-- Insert dummy data into claim table
INSERT INTO claim (policy_number, person_id, issued_amount, issued_date, status, claimed_amount)
VALUES 
('POL123456', 1, 5000.00, '2023-03-01', 'approved', 6000.00),
('POL654321', 2, 10000.00, '2023-04-01', 'pending', 12000.00);

-- Insert dummy data into billing table
INSERT INTO billing (disease_code, bill_amount, date_of_admission, date_of_discharge)
VALUES 
('FLU123', 200.00, '2023-01-15', '2023-01-20'),
('AST456', 300.00, '2022-12-01', '2022-12-05');