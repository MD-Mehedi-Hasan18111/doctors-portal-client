import { useContext } from "react";
import { Context } from "../contexts/AuthProvider/AuthProvider";

const useAuth = () => {
  return useContext(Context);
};

export default useAuth;
