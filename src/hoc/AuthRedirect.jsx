import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";

export const AuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        const isAuth = useSelector(state => state.auth.isAuth)
        if(!isAuth) return <Redirect to='/login' />
        return <Component {...props} />
    }
    return RedirectComponent
}
