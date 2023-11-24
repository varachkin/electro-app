import { IdleTimerProvider } from "react-idle-timer";
import { locales } from "../../../../locales";
import useLogoutHook from "../../../../hooks/useLogoutHook";
export default function SomethingWentWrongPage() {
  const onIdle = useLogoutHook();
  return (
    <IdleTimerProvider timeout={locales.clientTimeoutIdle} onIdle={onIdle}>
      <div className="main-container somethingwentwrong-container">SomethingWentWrongPage</div>;
    </IdleTimerProvider>
  );
}

