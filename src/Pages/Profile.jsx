import { useContext } from "react";
import { AuthContxt } from "../Contexts/AuthContext";

function Profile() {
  const { current, Logout } = useContext(AuthContxt);

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <div className="flex gap-10 border-2 p-2 rounded-2xl">
            <img className="w-20 h-fit rounded-full" src={current.PfImage} alt="" />
            <div className="flex flex-col gap-1">
                <h1 className="text-xl">{current.FirstName} {current.LastName}</h1>
                <h1>{current.Email}</h1>
                <div className="flex justify-end">
                    <button className="bg-red-600 cursor-pointer text-white font-bold p-1 rounded" onClick={Logout}>Log Out</button>

                </div>
            </div>
        </div>

        
      </div>
    </div>
  );
}

export default Profile;
