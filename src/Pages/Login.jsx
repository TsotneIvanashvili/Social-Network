import { useContext } from "react"
import { AuthContxt } from "../Contexts/AuthContext"

function Login(){

    const {LoginHandler, current} = useContext(AuthContxt)

    return(
        <div>
            <h1>Log In!</h1>
            {
                Object.keys(current).length ?(
                    <h1>Already Logged In!</h1>
                ) 
                :(
                    <form onSubmit={LoginHandler}>
                <input type="email" name="Email" placeholder="Enter Email" />
                <input type="password" name="Password" placeholder="Enter Password" />
                <button className="cursor-pointer">Log In!</button>
            </form>
                )
            }
        </div>
    )

}

export default Login