import { useContext } from "react"
import { AuthContxt } from "../Contexts/AuthContext"
import { Navigate } from "react-router-dom"

const AuthProtection = ({children}) => {
    const {current} = useContext(AuthContxt)

    return Object.keys(current).length ? children : <Navigate to="/login"/>
}


export default AuthProtection