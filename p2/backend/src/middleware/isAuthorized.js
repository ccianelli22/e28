const restRoles = require("../config/restRoles")
module.exports = {
	isAuthorized: async (request, response, next) => {
		let { team, role } = request.app.locals

		let { method } = request

		//If (role=legat & method = get) or role=admin or
		//team is in url AND role is in restRoles
		if (role === "admin") {
			next()
		} else if (role === "legat" && method === "GET") {
			next()
		} else if (restRoles[team][method].includes(role) && request.url.includes(team)) {
			next()
		} else {
			response.status(401).json({ message: "You do not have access" })
		}
	},
}
