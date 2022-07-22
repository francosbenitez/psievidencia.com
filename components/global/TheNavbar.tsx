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

const TheNavbar = () => {
  const { userInfo, userToken } = useSelector(
    (state: any) => state.userReducer
  );
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await UsersService.logout();
    dispatch(logout());
  };
  return (
    <div className="container mx-auto px-5 sm:px-0">
      <ul className="flex justify-end mt-5">
        {/* if logged ? ['Ingresar', 'Registrarse'] : ['Mis favoritos' 'Salir'] */}
        {userToken || userInfo ? (
          <>
            <li className="p-2 flex">
              <Link href="/favorites">
                <p className="self-center underline">Mis favoritos</p>
              </Link>
            </li>
            <li>
              <button
                className="rounded btn bg-primary text-white p-2 border-white"
                onClick={() => handleLogout()}
              >
                Salir
              </button>
              {/* <LogoutBtn logout={dispatch(logout())} /> */}
            </li>
          </>
        ) : (
          <>
            <li className="p-2">
              <TheModal
                button={<LoginBtn />}
                title={"Ingresar"}
                content={<TheLogin />}
              />
            </li>
            <li className="p-2">
              <TheModal
                button={<RegisterBtn />}
                title={"Registrarse"}
                content={<TheRegister />}
              />
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default TheNavbar;
