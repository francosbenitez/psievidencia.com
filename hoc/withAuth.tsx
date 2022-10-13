import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import UsersService from "@/services/UsersService";

const withAuth = (Component: any) => {
  const AuthenticatedComponent = (props: any) => {
    const router = useRouter();
    const [success, setSuccess] = useState<boolean>();

    useEffect(() => {
      const getUser = async () => {
        try {
          const response = (await UsersService.verifyToken()).data;

          if (!response.success) {
            router.push("/404");
          } else {
            setSuccess(true);
          }
        } catch (error) {
          router.push("/404");
          setSuccess(false);
        }
      };
      getUser();
    }, []);

    return success ? <Component {...props} /> : null;
  };

  return AuthenticatedComponent;
};

export default withAuth;
