import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";

import { useMediaQuery } from "react-responsive";
import { toast } from "react-toastify";

import Container from "../../shared/Container/Container";
import logoDesktop from "../../assets/images/logo-desktop.png";
import logoMobile from "../../assets/images/logo-mobile.png";
import s from "./LoginPage.module.scss";
import axios from "axios";

function LoginPage() {
  const [user, setUser] = useState(
    localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : null
  );
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    console.log("user", user);
    (async () => {
      try {
        if (user) {
          localStorage.setItem("token", JSON.stringify(user.access_token));
          toast.success("Hi,there! We glad to see you again!");
          await axios
            .get(
              `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
              {
                headers: {
                  Authorization: `Bearer ${user.access_token}`,
                  Accept: "application/json",
                },
              }
            )
            .then((res) => {
              localStorage.setItem("name", JSON.stringify(res.data.name));
            });
          navigate("/", { replace: true });
        }
      } catch (error) {
        console.log(error);
      }
    })();
    // if (user) {
    //     localStorage.setItem("token", JSON.stringify(user.access_token));
    //     toast.success(
    //       'Hi,there! We glad to see you again!'
    //     );
    //     axios
    //     .get(
    //       `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
    //       {
    //         headers: {
    //           Authorization: `Bearer ${user.access_token}`,
    //           Accept: 'application/json',
    //         },
    //       }
    //     )
    //     .then(res => {
    //         setUserData(res.data);
    //         console.log('userData',userData)
    //     })
    //   navigate("/", { replace: true });
    // }
  }, [user, navigate]);

  // log out function to log the user out of google and set the profile array to null
  // const logOut = () => {
  //     googleLogout();
  //     setProfile(null);
  // };

  return (
    <Container>
      <div className={s.logo}>
        <img alt="logo" src={isMobile ? logoMobile : logoDesktop} />
      </div>
      <div className={s.loginWrapper}>
        <h2 className={s.loginTitle}>
          Login with Google to see information about Rick and Morty characters!
        </h2>
        <button className={s.loginButton} onClick={() => login()}>
          Log in with Google 🚀{" "}
        </button>
      </div>
    </Container>
  );
}
export default LoginPage;
