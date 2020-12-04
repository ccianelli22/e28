const argon2 = require("argon2")
const crypto = require("crypto")

module.exports = {
    hashPassword : async (password) => {
        try{
            let hashedPassword = await argon2.hash(password, {type: argon2.argon2i, hashLength: 50})
            return hashedPassword
        }catch(e){
            console.log(e)
        }
    },

    comparePassword : async (inputPassword, hashedPassword ) => {
        let match = await argon2.verify(hashedPassword, inputPassword)
        return match
    },
    
    sha256 : (password) => {
        return crypto.createHmac("sha256", password).digest("hex")

    }
}
