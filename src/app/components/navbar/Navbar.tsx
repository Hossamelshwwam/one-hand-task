import React from "react";
import logo from "@/app/assets/navbar-icon.svg";
import dashboard from "@/app/assets/website-icon.svg";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-image">
        <Image src={logo} alt="logo image" />
        <p>black in dashboard</p>
      </div>
      <Link href="/" className="link">
        <Image src={dashboard} alt="dashboard icon" width={20} />
        go to website
      </Link>
    </div>
  );
};

export default Navbar;
