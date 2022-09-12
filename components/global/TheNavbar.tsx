import React from "react";
import Link from "next/link";
import TheModal from "@/components/global/TheModal";
import TheLogin from "@/components/global/TheLogin";
import LoginBtn from "@/components/global/LoginBtn";
import RegisterBtn from "@/components/global/RegisterBtn";
import TheRegister from "@/components/global/TheRegister";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/store/user/userSlice";
import UsersService from "@/services/UsersService";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import User from "@/public/icons/user.svg";
import Power from "@/public/icons/power.svg";
import Star from "@/public/icons/star.svg";

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
            <ul className="flex justify-end w-full">
              {check != null ? (
                <>
                  <li className="p-2 flex">
                    <div className="dropdown dropdown-left">
                      <label tabIndex={0} className="cursor-pointer">
                        <User />
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          {/* {router.pathname === "/favorites" ? (
                            <Link href="/">
                              <a className="underline">Home</a>
                            </Link>
                          ) : ( */}
                          <Link href="/favorites">
                            <a className="underline">
                              <Star className="w-6 h-6" /> Mis favoritos
                            </a>
                          </Link>
                          {/* )} */}
                        </li>
                        <li>
                          <button
                            className="underline"
                            onClick={() => handleLogout()}
                          >
                            <Power className="w-6 h-6" /> Cerrar sesión
                          </button>
                        </li>
                      </ul>
                    </div>
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
            </ul>
          </div>
        </header>
      )}
    </>
  );
};

export default TheNavbar;
