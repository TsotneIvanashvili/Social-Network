import { useContext } from "react"
import { AuthContxt } from "../Contexts/AuthContext"

function Register(){

    const {RegistrationHandler} = useContext(AuthContxt)




    return(
        <div className="flex justify-center items-center flex-col gap-10">
            <h1 className="text-2xl">Register Your Account!</h1>
            <form className="flex gap-10 flex-col w-[50%]" onSubmit={RegistrationHandler}>
                <input className="border p-2" type="text" name="FirstName" placeholder="First Name"/>
                <input className="border p-2" type="text" name="LastName" placeholder="Last Name"/>
                <input className="border p-2" type="email" name="Email" placeholder="Your Email"/>
                <input className="border p-2" type="text" name="PfImage" placeholder="Enter Your Profile Picture link..." />
                <input className="border p-2" type="password" name="Password" placeholder="Password"/>
                <input className="border p-2" type="password" name="ConfPassword" placeholder="Confirm Password"/>
                <button className="bg-gray-500 p-2 rounded text-white  hover:bg-black transition-all"   >Register!</button>
            </form>
        </div>
    )

}

export default Register