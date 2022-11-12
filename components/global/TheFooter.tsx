import React from "react";
import TheSuggestions from "./TheSuggestions";
import Instagram from "@/public/icons/instagram.svg";
import Twitter from "@/public/icons/twitter.svg";
import Email from "@/public/icons/email.svg";
import Coffee from "@/public/icons/coffee.svg";
import Magnifier from "@/public/icons/magnifier.svg";
import Link from "next/link";
import { logout } from "@/store/user/userSlice";
import UsersService from "@/services/UsersService";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  showLogin: () => void;
};

const TheFooter = (props: Props) => {
  const { showLogin }: Props = props;

  const router = useRouter();

  const { isLoggedIn } = useSelector((state: any) => state.userReducer);

  const dispatch = useDispatch();
  const handleLogout = async () => {
    router.push("/");
    await UsersService.logout();
    dispatch(logout());
  };

  return (
    <div className="footer-custom">
      <footer className="footer p-10 container w-11/12 mx-auto">
        <div>
          <Magnifier className="w-8 h-8" />
          <p>Psievidencia</p>
        </div>
        <div>
          <span className="footer-title">Proyecto</span>
          <Link href="/about">
            <a className="link link-hover">Acerca</a>
          </Link>
          <Link href="/collaborate">
            <a className="link link-hover">Colaborar</a>
          </Link>
          <Link href="/contact">
            <a className="link link-hover">Contacto</a>
          </Link>
        </div>
        <div>
          <span className="footer-title">Mi perfil</span>
          <Link href={`${isLoggedIn ? "/favorites" : ""}`}>
            <a
              className="link link-hover"
              onClick={
                isLoggedIn
                  ? () => console.log("user is logged in!")
                  : () => showLogin()
              }
            >
              Mis favoritos
            </a>
          </Link>
          <Link href={`${isLoggedIn ? "/edit" : ""}`}>
            <a
              className="link link-hover"
              onClick={
                isLoggedIn
                  ? () => console.log("user is logged in!")
                  : () => showLogin()
              }
            >
              Editar perfil
            </a>
          </Link>
          <a
            className="link link-hover"
            onClick={isLoggedIn ? () => handleLogout() : () => showLogin()}
          >
            Cerrar sesión
          </a>
        </div>
        <div>
          <span className="footer-title">Redes</span>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://twitter.com/psievidencia"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter />
            </a>
            <a
              href="https://www.instagram.com/psievidencia_app/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="mailto:hola@psievidencia.com"
              target="_blank"
              rel="noreferrer"
            >
              <Email />
            </a>
            <a
              href="https://cafecito.app/psievidencia"
              target="_blank"
              rel="noreferrer"
            >
              <Coffee />
            </a>
          </div>
        </div>
      </footer>
      <span className="hidden">
        <TheSuggestions />
      </span>
    </div>
  );
};

export default TheFooter;
