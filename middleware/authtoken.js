const jwt = require('jsonwebtoken');
const { User } = require('../model/User');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1]; // Extract token from "Bearer <token>"

    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Store user info in request object
        next();
    } catch (error) {
        return res.status(400).json({ message: "Invalid token." });
    }
};

const roleChecker =(role)=>
{
    return (req,res,next)=>{
        try {
            if( req.user.role !==role){
                return res.status(403).json({ message: "Forbidden" });
            }
            console.log(" Role is correct");
            next();
            } catch (error) {
                return res.status(400).json({ message: "Invalid token." });
                }
                }}
                module.exports = { verifyToken, roleChecker };
