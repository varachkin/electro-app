import { IdleTimerProvider } from "react-idle-timer";
import { locales } from "../../../locales";
import useLogoutHook from "../../../hooks/useLogoutHook";
export default function OpeningPage() {
  const onIdle = useLogoutHook();
  
  return (
    <IdleTimerProvider timeout={locales.clientTimeoutIdle} onIdle={onIdle}>
      <div className="main-container opening-container">OpeningPage</div>;
    </IdleTimerProvider>
  );
}
