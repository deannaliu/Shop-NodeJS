const bcrypt = require("bcryptjs");

const users = [
    {
        name: "Admin",
        email: "admin@shoob.com",
        password: bcrypt.hashSync("shooby", 10),
        isAdmin: true
    },
    {
        name: "User",
        email: "user@shoob.com",
        password: bcrypt.hashSync("dooby", 10)
    }
]

module.exports = users;