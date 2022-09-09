import React from "react";
import Link from "next/link";
import TheModal from "./TheModal";
import TheLogin from "./TheLogin";
import LoginBtn from "./LoginBtn";
import RegisterBtn from "./RegisterBtn";
// import LogoutBtn from "./LogoutBtn";
import TheRegister from "./TheRegister";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/user/userSlice";
import UsersService from "../../services/UsersService";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Magnifier from "@/public/icons/magnifier.svg";

const TheNavbar = (props: any) => {
  const { showLogin, showRegister, loginRef, registerRef }: any = props;

  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { userInfo, userToken } = useSelector(
    (state: any) => state.userReducer
  );
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await UsersService.logout();
    dispatch(logout());
    router.push("/");
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  const check =
    userToken != null ? userToken : userInfo != null ? userInfo.token : null;

  return (
    <>
      {mounted && (
        <header className="w-full mx-auto py-5 navbar">
          <div className="container w-11/12 mx-auto">
            <ul className="flex">
              <li className="flex my-auto">
                <Magnifier className="w-8 h-8 flex" />
              </li>
              <div className="flex ml-auto">
                {check != null ? (
                  <>
                    <li className="p-2 flex">
                      {router.pathname === "/favorites" ? (
                        <Link href="/">
                          <a className="self-center underline">Home</a>
                        </Link>
                      ) : (
                        <Link href="/favorites">
                          <a className="self-center underline">Mis favoritos</a>
                        </Link>
                      )}
                    </li>
                    <li>
                      <button
                        className="rounded btn bg-primary text-white p-2 border-white"
                        onClick={() => handleLogout()}
                      >
                        Salir
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="p-2">
                      <TheModal
                        ref={loginRef}
                        button={<LoginBtn />}
                        title={"Ingresar"}
                        content={<TheLogin showRegister={showRegister} />}
                        modalCentered={true}
                        modalMask={true}
                        showRegister={showRegister}
                      />
                    </li>
                    <li className="p-2">
                      <TheModal
                        ref={registerRef}
                        button={<RegisterBtn />}
                        title={"Registrarse"}
                        content={<TheRegister showLogin={showLogin} />}
                        modalCentered={true}
                        modalMask={true}
                        showLogin={showLogin}
                      />
                    </li>
                  </>
                )}
              </div>
            </ul>
          </div>
        </header>
      )}
    </>
  );
};

export default TheNavbar;
