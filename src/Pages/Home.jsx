import { useContext } from "react";
import { postsContext } from "../Contexts/PostsContext";

function Home() {
  const { makePost, posts, deletePost} = useContext(postsContext);

  return (
    <div className="flex flex-col items-center gap-20">
      <h1>Welcome To Your Local Social Network!</h1>

      <form onSubmit={makePost}>
        <input
          type="text"
          placeholder="Description..."
          name="Description"
          required
        />
        <input type="text" placeholder="Image Link (optional)" name="Image" />
        <button>Submit!</button>
      </form>

      {!posts ? (
        <h1>No Posts Made!</h1>
      ) : (
        <div className="flex flex-col w-[50%] gap-10">
          {posts.map((post) => {
            return (
              <div className="border-2 p-2 flex flex-col gap-5">
                <div className="flex justify-between">
                  <div className="flex gap-5 items-center">
                    <img className="w-20 rounded-full" src={post.AuthorPfp} alt="" />
                    <h2 className="text-2xl">
                    {post.Author} 
                  </h2>
                  </div>
                  <button className="font-bold text-white p-2 bg-red-800 rounded-sm" onClick={() => deletePost(post)}>delete</button>
                </div>

                <div key={post.id} className="border ">
                  <h1>{post.Description}</h1>
                  <img src={post.Image} alt="" className="w-full" />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
