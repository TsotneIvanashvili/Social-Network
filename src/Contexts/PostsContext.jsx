import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useContext } from "react";
import { AuthContxt } from "./AuthContext";



export const postsContext = createContext()



function PostsContext({children}){


    const {current} = useContext(AuthContxt)
    const queryClient = useQueryClient()

    

    const {data: posts = [], isError} = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const res = await axios.get('http://localhost:3000/posts')
            return res.data
        }
    })

    if(isError){
        alert("Back End Has Errors Or Hasn't Started")
        
    }




    const makePost = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        let data = Object.fromEntries(formData)
        
        const newData = {
            ...data,
            Author: `${current.FirstName} ${current.LastName}`,
            AuthorPfp: current.PfImage,
            UserId: current.id
        }

        
        

        if(Object.keys(current).length){
            const res = await axios.post("http://localhost:3000/posts", newData)
            queryClient.setQueryData(["posts"], (oldPosts = []) => [...oldPosts, res.data])
        }   
        else{
            alert("Please Log In To Post To Social Network! ")
            return  
        }

        
        
    }



    const deletePost = async(received) => {
       
        
        if(received.UserId === current.id){
            await axios.delete(`http://localhost:3000/posts/${received.id}`)
            queryClient.setQueryData(["posts"], (oldPosts = []) => {
                return oldPosts.filter(post => post.id !== received.id)
        })
        
        }
        else{
            alert("Can't Delete Someone Else's post")
            return 
        }
                    
        
    }





    return(
        <postsContext.Provider value={{posts, makePost, deletePost}}>
            {children}
        </postsContext.Provider>
    )

}


export default PostsContext
