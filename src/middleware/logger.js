import bcrypt from 'bcrypt';
import Data from '../models/model.js';

const logger = async (req, res, next) => {
    try {
        if (!req.body.username) {
            console.log(req.body)
            return res.status(400).json({ message: "Request body is missing" });
        }
        const { username, password } = req.body;
        const dbDetails = await Data.findOne({ username });

        if (!dbDetails) {

            return res.status(404).json({ message: "User not found" });
        }

        let isMatch = await verifyPassword(password, dbDetails.password);

        if (isMatch) {
            console.log('User is authenticated');
            next();
        } else {
            return res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

const verifyPassword = async (plainTextPassword, hashedPassword) => {
    return bcrypt.compare(plainTextPassword, hashedPassword);
};

export default logger;
