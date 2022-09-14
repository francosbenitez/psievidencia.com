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
import { useState, useEffect, useRef } from "react";
import Power from "@/public/icons/power.svg";
import Star from "@/public/icons/star.svg";
import Pencil from "@/public/icons/pencil.svg";
import Magnifier from "@/public/icons/magnifier.svg";
import Avatar from "boring-avatars";
import ArrowDown from "@/public/icons/arrow-down.svg";
import ArrowUp from "@/public/icons/arrow-up.svg";

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

  const [themeMenuOpened, setThemeMenuOpened] = useState(false);
  const themeMenu = useRef(null);
  const themeMenuButton = useRef(null);

  useEffect(() => {
    if (!themeMenuOpened) {
      document.activeElement.blur();
    } else if (
      themeMenuOpened &&
      !themeMenu.current.contains(document.activeElement)
    ) {
      setThemeMenuOpened(false);
    }
  }, [themeMenuOpened]);

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
                      <div ref={themeMenu} className="dropdown dropdown-left">
                        <label
                          ref={themeMenuButton}
                          tabIndex={0}
                          className="cursor-pointer bg-white p-2 rounded-lg"
                          onBlur={(e) => {
                            setThemeMenuOpened(false);
                          }}
                          onClick={(e) => {
                            if (themeMenuOpened) {
                              setThemeMenuOpened(false);
                            } else {
                              setThemeMenuOpened(true);
                            }
                          }}
                        >
                          <span className="avatar-custom">
                            <Avatar
                              size={25}
                              name={userInfo.user.username}
                              variant="beam"
                              colors={[
                                "#92A1C6",
                                "#146A7C",
                                "#F0AB3D",
                                "#C271B4",
                                "#C20D90",
                              ]}
                            />
                          </span>
                          <span className="align-middle">
                            {userInfo.user.username}
                          </span>
                          {themeMenuOpened ? (
                            <ArrowUp className="ml-3 inline" />
                          ) : (
                            <ArrowDown className="ml-3 inline" />
                          )}
                        </label>
                        <ul
                          tabIndex={0}
                          className="dropdown-content menu p-2 shadow bg-white rounded-box w-52"
                          onBlur={(e) => {
                            themeMenuButton.current.focus();
                          }}
                          onFocus={(e) => {
                            setThemeMenuOpened(true);
                          }}
                          onClick={() => document.activeElement.blur()}
                        >
                          <li onClick={() => document.activeElement.blur()}>
                            <Link href="/favorites">
                              <a className="bg-white hover:bg-transparent active:bg-transparent active:text-primary">
                                <Star className="w-6 h-6" /> Mis favoritos
                              </a>
                            </Link>
                          </li>
                          <li onClick={() => document.activeElement.blur()}>
                            <Link href="/edit">
                              <a className="bg-white hover:bg-transparent active:bg-transparent active:text-primary">
                                <Pencil className="w-6 h-6" /> Editar perfil
                              </a>
                            </Link>
                          </li>
                          <li>
                            <button
                              className="bg-white hover:bg-transparent active:bg-transparent active:text-primary"
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
