import { withSessionRoute } from "../.././components/lib/config/withSession";

export default withSessionRoute(createSessionRoute);
async function createSessionRoute(req, res) {
    const {token,...rest}= req.body
    req.session.user = {
      token:token,
      user:rest.user.firstName,
      lastName:rest.user.lastName,
      login:true
    };
    await req.session.save();
    res.send({ ok: true ,token:token});
}