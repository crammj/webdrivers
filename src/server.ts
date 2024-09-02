import express from 'express';
import cron from 'node-cron';
import { exec } from "child_process";

// Create an instance of Express
const app = express();
const daily = '30 8 * * *'
const tuesdayMorning = '30 8 2 * *'
const tuesdayMorning2 = '0 9 2 * *'
const fridayEvening = '30 19 5 * *'

// Define a basic route
app.get('/', (req, res) => {
    res.send('Server is running');
});


cron.schedule('0 0 * * *', () => {
    console.log('Running specific test at midnight');
    exec('npm run test:unit', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error running test: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Test stderr: ${stderr}`);
            return;
        }
        console.log(`Test stdout: ${stdout}`);
    });
});

cron.schedule('0 0 * * *', () => {
    console.log('Running specific test file at midnight');
    exec('npx jest path/to/test-file.test.ts', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error running test: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Test stderr: ${stderr}`);
            return;
        }
        console.log(`Test stdout: ${stdout}`);
    });
});

cron.schedule('0 0 * * *', () => {
    console.log('Running specific test at midnight');
    exec('npm run test:e2e', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error running test: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Test stderr: ${stderr}`);
            return;
        }
        console.log(`Test stdout: ${stdout}`);
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});