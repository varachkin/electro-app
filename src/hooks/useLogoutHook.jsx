import { useNavigate } from "react-router-dom";
import { useLoginUpdate } from "../contexts/LoginContext";
import { useServiceLoginUpdate } from "../contexts/ServiceLoginContext";
export default function useLogoutHook() {
  const changeLogin = useLoginUpdate();
  const changeServiceLogin = useServiceLoginUpdate();
  let navigate = useNavigate();
  const onIdle = () => {
    // changeLogin(false);
    // changeServiceLogin(false);
    // navigate("/");
  };
  return onIdle;
}
