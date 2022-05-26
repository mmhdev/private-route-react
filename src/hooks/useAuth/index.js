import { useContext } from "react";
import { AuthProviderContext } from "../../component/Provider/AuthProvider";

function useAuth() {
  return useContext(AuthProviderContext);
}

export default useAuth;
