import { withSessionRoute } from "../../components/lib/config/withSession"

async function logoutRoute(request, response) {
//   request.session.token = request.body.token
  await request.session.destroy()
  response.send({ok:true, message:"Logout Successfull"})
}

export default withSessionRoute(logoutRoute)
