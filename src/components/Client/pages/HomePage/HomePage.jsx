import { IdleTimerProvider } from "react-idle-timer";
import { locales } from "../../../../locales";
import useLogoutHook from "../../../../hooks/useLogoutHook";
import SubTitle from "../../SubTitle/SubTitle";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../CustomButton/CustomButton";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeReturnedTools } from "../../../../features/user/userSlice";

export default function HomePage() {
  const onIdle = useLogoutHook();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChooseTools = () => {
    navigate('/table')
  }

  const handleGoToReturnTools = () => {
    navigate('/return-tools')
  }

  const handleLogOut = () => {
    dispatch(removeReturnedTools());
    navigate('/')
  }

  return (
    <IdleTimerProvider timeout={locales.clientTimeoutIdle} onIdle={onIdle}>
      <div className="main-container home-container">
        <div className="flex-container">
          <SubTitle bold>What do you want to do ?</SubTitle>
          <div className="btn-block">
            <CustomButton type='large' variant='contained' onClick={handleGoToReturnTools}>return tools</CustomButton>
            <CustomButton type='large' variant='contained' onClick={handleChooseTools}>rent tools</CustomButton>
          </div>
          <CustomButton type='large' variant='outlined' onClick={handleLogOut}>log out</CustomButton>
        </div>
      </div>
    </IdleTimerProvider>
  );
}
