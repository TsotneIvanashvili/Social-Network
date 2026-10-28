import { useContext, useState } from "react"
import { AuthContxt } from "../Contexts/AuthContext"
import { friendsContext } from "../Contexts/FriendsContext"

function Friends() {

    const {current, users} = useContext(AuthContxt)
    const {addFriend, sender} = useContext(friendsContext)
    
    
    
    
    
    return(
        <div className="flex justify-around">
            <div className="shadow-[2px_2xp_20px]">
                <p>Your Friends</p>
                {
                    Object.keys(current).length ? (
                        <div>
                            
                        </div>
                    ) 
                    :
                    (
                        <div>
                            <h1>Log In To Add Friends</h1>

                        </div>
                    ) 
                }

            </div>

            <div>
                <p className="text-3xl mb-10">Find New Friends</p>

                    <div className="flex flex-col gap-10">
                        {
                            users.map( user => {

                                return(
                                    <div className="flex gap-10 w-100 bg-gray-200 p-4 rounded-2xl shadow-[1px_1px_10px_gray]" key={user.id}>
                                        <img className="w-30 h-fit rounded-full" src={user.PfImage} alt="" />
                                        <div className="flex flex-col gap-2">
                                            <p className="text-xl">{user.FirstName} {user.LastName}</p>
                                            <p>Tbilisi, Georgia</p>
                                            <button onClick={() => addFriend(user)} className="bg-blue-500 cursor-pointer text-white font-semibold p-1 pl-2 pr-2 rounded-2xl">Add Friend</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
            </div>


            <div>
                <h1>Requests!</h1>
                {
                }
            </div>
        </div>
    )
}

export default Friends