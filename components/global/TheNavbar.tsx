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
import Pencil from "@/public/icons/pencil.svg";
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
            <ul className="flex w-full">
              <li className="flex my-auto">
                <Link href="/">
                  <a>
                    <Magnifier className="w-8 h-8 flex" />
                  </a>
                </Link>
              </li>
              <div className="flex ml-auto">
                {check != null ? (
                  <>
                    <li className="p-2 flex">
                      <div className="dropdown dropdown-left">
                        <label
                          tabIndex={0}
                          className="cursor-pointer bg-white p-2 rounded-lg"
                        >
                          <User className="inline" />{" "}
                          <span className="align-middle">francosbenitez</span>
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                          <li>
                            <Link href="/favorites">
                              <a className="underline">
                                <Star className="w-6 h-6" /> Mis favoritos
                              </a>
                            </Link>
                          </li>
                          <li>
                            <Link href="/edit">
                              <a className="underline">
                                <Pencil className="w-6 h-6" /> Editar perfil
                              </a>
                            </Link>
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
              </div>
            </ul>
          </div>
        </header>
      )}
    </>
  );
};

export default TheNavbar;
