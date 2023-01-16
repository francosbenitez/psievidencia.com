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
import TheReset from "./TheReset";
import MenuIcon from "@mui/icons-material/Menu";

const TheNavbar = (props: any) => {
  const {
    showLogin,
    showRegister,
    showReset,
    loginRef,
    registerRef,
    resetRef,
  }: any = props;

  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const { isLoggedIn, userInfo } = useSelector(
    (state: any) => state.userReducer
  );
  const dispatch = useDispatch();
  const handleLogout = async () => {
    router.push("/");
    await UsersService.logout();
    dispatch(logout());
  };
  useEffect(() => {
    setMounted(true);
  }, []);

  const [themeMenuOpened, setThemeMenuOpened] = useState(false);
  const themeMenu = useRef<HTMLDivElement>(null);
  const themeMenuButton = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    if (!themeMenuOpened) {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    } else if (themeMenuOpened) {
      if (themeMenu.current !== null) {
        if (!themeMenu.current.contains(document.activeElement)) {
          setThemeMenuOpened(false);
        }
      }
    }
  }, [themeMenuOpened]);

  return (
    <>
      {mounted && (
        <header className="py-5 sm:flex md:items-center custom-navbar">
          <div className="container w-11/12 mx-auto">
            <div className="flex justify-between flex-wrap items-center top-0 z-10">
              <div className="flex flex-row">
                <Link href="/">
                  <a>
                    <Magnifier className="w-8 h-8 flex" />
                  </a>
                </Link>
              </div>

              <label
                htmlFor="menu-toggle"
                className="pointer-cursor sm:hidden block"
              >
                <MenuIcon />
              </label>
              <input className="hidden" type="checkbox" id="menu-toggle" />

              <div
                className="hidden sm:flex sm:items-center sm:w-auto w-full "
                id="menu"
              >
                <nav>
                  <ul className="sm:flex-1 items-center justify-between pt-4 sm:py-2">
                    <li className="block sm:inline my-4 sm:mx-2">
                      <Link href="/faq">
                        <a className="hover:bg-transparent active:bg-transparent active:text-primary underline">
                          FAQ
                        </a>
                      </Link>
                    </li>
                    {isLoggedIn ? (
                      <>
                        <li className="p-2 flex">
                          <div
                            ref={themeMenu}
                            className="dropdown dropdown-left"
                          >
                            <label
                              ref={themeMenuButton}
                              tabIndex={0}
                              className="cursor-pointer bg-white p-2 rounded-lg"
                              onBlur={() => {
                                setThemeMenuOpened(false);
                              }}
                              onClick={() => {
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
                              onBlur={() => {
                                themeMenuButton?.current?.focus();
                              }}
                              onFocus={(e) => {
                                setThemeMenuOpened(true);
                              }}
                              onClick={() => {
                                if (
                                  document.activeElement instanceof HTMLElement
                                ) {
                                  document.activeElement.blur();
                                }
                              }}
                            >
                              <li
                                onClick={() => {
                                  if (
                                    document.activeElement instanceof
                                    HTMLElement
                                  ) {
                                    document.activeElement.blur();
                                  }
                                }}
                              >
                                <Link href="/favorites">
                                  <a className="bg-white hover:bg-transparent active:bg-transparent active:text-primary">
                                    <Star className="w-6 h-6" /> Mis favoritos
                                  </a>
                                </Link>
                              </li>
                              <li
                                onClick={() => {
                                  if (
                                    document.activeElement instanceof
                                    HTMLElement
                                  ) {
                                    document.activeElement.blur();
                                  }
                                }}
                              >
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
                        <li className="block sm:inline my-4 sm:mx-2">
                          <TheModal
                            ref={loginRef}
                            button={<LoginBtn />}
                            title={"Ingresar"}
                            content={
                              <TheLogin
                                showRegister={showRegister}
                                showReset={showReset}
                              />
                            }
                            modalCentered={true}
                            modalMask={true}
                            showRegister={showRegister}
                            showReset={showReset}
                          />
                        </li>
                        <TheModal
                          ref={resetRef}
                          title={"Recuperá tu contraseña"}
                          content={<TheReset showLogin={showLogin} />}
                          modalCentered={true}
                          modalMask={true}
                          showReset={showReset}
                          showLogin={showLogin}
                        />
                        <li className="block sm:inline my-4 sm:ml-2">
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
                </nav>
              </div>
            </div>
          </div>
        </header>
      )}
    </>
  );
};

export default TheNavbar;
