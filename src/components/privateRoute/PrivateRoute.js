
import { withSessionSsr } from '../lib/config/withSession';
const PrivateRoute = () => {
    return  withSessionSsr(
        async ({req, res}) => {
            const user = req.session.user;
            const name = req.session.user?.user
            const lastName = req.session?.user?.lastName
            const token = req.session?.user?.token
            if(!user) {
              return {
                redirect:{
                    destination:"/login",
                    permanent:false
                }
            }
            }
            return {
                props: { name,lastName,token}
            }
        }
      );

}

export default PrivateRoute