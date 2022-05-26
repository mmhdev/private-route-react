import { useContext } from "react";
import { AuthProviderContextDispatcher } from "../../component/Provider/AuthProvider";

function useAuthActions() {
  return useContext(AuthProviderContextDispatcher);
}

export default useAuthActions;
