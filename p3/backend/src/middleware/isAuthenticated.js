const jwt = require("jsonwebtoken")

module.exports = {
	isAuthenticated: async (request, response, next) => {
		if (request.url === "/api/login" || request.url === "/api/registration") {
			next()
		} else {
			const signature = request.signedCookies.signature
			const payload = request.headers.authorizationpayload
			const authorization = `${payload}.${signature}`
			let reqToken = authorization.split("Bearer ")[1]
			jwt.verify(reqToken, process.env.SECRETCOOKIE, (err, decoded) => {
				if (err) {
					if (err.expiredAt) {
						//WHEN THIS IS RECEIVED BY THE CLIENT, THE CLIENT WILL BE LOGGED OUT
						response.status(401).json({
							message: "expired token",
						})
					} else {
						console.log(err)
						response.clearCookie("signature", { path: "/" })
							.status(401)
							.json({ message: "Invalid token" })
					}
				} else {
					next()
				}
			})
		}
	},
}
