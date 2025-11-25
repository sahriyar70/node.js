import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const config = {
    env: process.env.NODE_ENV || "development", // string হিসেবে রাখো
    port: Number(process.env.PORT) || 5000      // সংখ্যা হিসেবে নাও
};

export default config;