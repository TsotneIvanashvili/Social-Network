import { useContext } from "react"
import { AuthContxt } from "../Contexts/AuthContext"
import { Navigate } from "react-router-dom"

const LoggedInProtection = ({children}) => {
    const {current} = useContext(AuthContxt)

    return Object.keys(current).length ? <Navigate to="/profile"/> : children
}
    

export default LoggedInProtection