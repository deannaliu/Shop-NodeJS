// json web token : https://www.npmjs.com/package/jsonwebtoken
const jwt = require("jsonwebtoken")

const generateToken = (id) => {
    // after 30d, user has to login again
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "30d"})
}

module.exports = generateToken;