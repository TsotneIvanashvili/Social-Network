import AuthContext from "./AuthContext"
import FriendsContext from "./FriendsContext"
import PostsContext from "./PostsContext"



function ContextProvider({children}){


    return(
        <AuthContext>
            <PostsContext>
                <FriendsContext>
                    {children}
                </FriendsContext>
            </PostsContext>
        </AuthContext>
    )
}


export default ContextProvider