import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import UsersService from "@/services/UsersService";
import LoadingBar from "@/components/home/LoadingBar";

const withAuth = (Component: any) => {
  const AuthenticatedComponent = (props: any) => {
    const router = useRouter();
    const [success, setSuccess] = useState<boolean>(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      const getUser = async () => {
        try {
          setLoading(true);
          const response = (await UsersService.verifyToken()).data;
          setLoading(false);

          if (!response.success) {
            router.push("/404");
          } else {
            setSuccess(true);
          }
        } catch (error) {
          setLoading(false);
          router.push("/404");
          setSuccess(false);
        }
      };
      getUser();
    }, []);

    return loading ? <LoadingBar /> : success ? <Component {...props} /> : null;
  };

  return AuthenticatedComponent;
};

export default withAuth;
