import { createContext, useContext, useState } from "react";
import { AuthContxt } from "./AuthContext";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const friendsContext = createContext();
function FriendsContext({ children }) {
  const { users, current } = useContext(AuthContxt);
  const queryClient = useQueryClient();
  const sender = users.find((person) => person.id === current?.id);
  const addFriend = async (user) => {
    const receiver = users.find((p) => p.id === user.id);

    if (current.id === receiver.id) {
      return alert("Cant Add Yourself");
    }

    if (!current?.id) return alert("Pls Log In!");

    if (!sender) return;

    if (sender.Sent.includes(user.id)) {
      return alert("Already Added");
    }

    const newUser = {
      ...sender,
      Sent: [...sender.Sent, user.id],
    };

    const receiverUser = {
      ...receiver,
      Received: [...receiver.Received, sender.id],
    };

    await axios.patch(`http://localhost:3000/users/${sender.id}`, newUser);
    await axios.patch(
      `http://localhost:3000/users/${receiver.id}`,
      receiverUser,
    );

    queryClient.invalidateQueries({ queryKey: ["users"] });
  };

  return (
    <friendsContext.Provider value={{ addFriend, sender }}>
      {children}
    </friendsContext.Provider>
  );
}

export default FriendsContext;
