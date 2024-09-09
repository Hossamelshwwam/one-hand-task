"use client";
import logo from "@/app/assets/navbar-icon.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Form = () => {
  const route = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      formData.username === "admin@admin.com" &&
      formData.password === "12345678"
    ) {
      const login = async () => {
        // const userId = "1234";
        // const res = await axios.post(
        //   `https://one-hand/login?uid=${userId}`,
        //   {
        //     username: formData.username,
        //     password: formData.password,
        //   },
        //   {
        //     headers: {
        //       "X-Access-SecureKey": "OH2024",
        //     },
        //   }
        // );

        // const token = res.data.token;

        Cookies.set("token", "one-hand1234", { expires: 7, secure: true });
        console.log("token");

        route.push("/dashboard");
      };

      login();
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="input-holder">
        <label htmlFor="username">Username :</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="input-holder">
        <label htmlFor="password">Password :</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="button-holder">
        <button type="submit">Log in</button>
      </div>
    </form>
  );
};

export default function Home() {
  return (
    <div className="home">
      <div className="login">
        <h1>
          <Image src={logo} alt="logo icon" />
          black
        </h1>
        <h4>log in</h4>
        <Form />
      </div>
    </div>
  );
}
