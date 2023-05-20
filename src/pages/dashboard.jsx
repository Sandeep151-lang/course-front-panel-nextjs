import Dashboard from '../components/Dashbord'
import PrivateRoute from '../components/privateRoute/PrivateRoute'

 const dashboard = (user) => {
  return <Dashboard user={user?.pageProps}/>
}
// This gets called on every request


export default dashboard
export const getServerSideProps = PrivateRoute()
