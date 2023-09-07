const bcrypt = require('bcrypt')

exports.hassedPassword = async (password) => {
    try {
        const saltRounds = 10;
        const hassedPassword = await bcrypt.hash(password, saltRounds);
        return hassedPassword
    }
    catch (error) {
        console.log(`You have error on password hash`.bgRed.white);
    }
}

exports.compPassword = (hassedPassword, password) => {
    return bcrypt.compare(hassedPassword, password)
}