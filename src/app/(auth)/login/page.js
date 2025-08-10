import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <section className="login-container">
      <div className=" shadow-2xl">
        <div className="flex-center">
          <Image
            src={"/images/icons/logo.png"}
            alt="Logo"
            height={100}
            width={100}
          />
          <h2>H Commerce</h2>
        </div>
      </div>
    </section>
  );
};

export default Login;
