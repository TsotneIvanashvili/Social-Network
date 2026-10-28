import { createContext, useEffect, useState } from "react";
import { GetLocal, SetLocal } from "../utils/LocalStorage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const AuthContxt = createContext();

function AuthContext({ children }) {
  const queryClient = useQueryClient();

  const { data: current = {} } = useQuery({
    queryKey: ["current"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/current");
      return res.data;
    },
  });

  const navigate = useNavigate();

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/users");
      return res.data;
    },
  });

 

  const RegistrationHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData);


    if (users.find((user) => user.Email === data.Email)) {
      alert("Email Already In Use!");
      return;
    } else if (data.Password !== data.ConfPassword) {
      alert("Passwords Do Not Match!");
      return;
    } else {
      delete data.ConfPassword;
      axios.post("http://localhost:3000/users", {...data, Sent: [], Received: [], Friends: []});
    }

    queryClient.setQueryData(["users"], (oldUsers = []) => [...oldUsers, {...data, Sent: [], Received: [], Friends: []}])

    navigate("/login");
  };

  const LoginHandler = async (e) => {
    e.preventDefault();

    const formdata = new FormData(e.target);
    const data = Object.fromEntries(formdata);

    const exists = users.find(
      (user) => user.Email === data.Email && user.Password === data.Password,
    );

    if (exists) {
      const res = await axios.patch("http://localhost:3000/current", exists);

      queryClient.setQueryData(["current"], res.data);

      navigate("/profile");
    } else {
      alert("User Does Not Exist");
      return;
    }
  };

  const Logout = async () => {
    await axios.put("http://localhost:3000/current", {});

    queryClient.setQueryData(["current"], {});
  };

  return (
    <AuthContxt.Provider
      value={{ RegistrationHandler, LoginHandler, current, Logout, users }}
    >
      {children}
    </AuthContxt.Provider>
  );
}

export default AuthContext;
