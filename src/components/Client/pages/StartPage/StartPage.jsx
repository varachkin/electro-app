import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useServiceLoginUpdate } from "../../../../contexts/ServiceLoginContext";
import useTimeout from "../../../../hooks/useTimeout";
import { useLoginUpdate } from "../../../../contexts/LoginContext";
import Logo from "../../Logo/Logo";
import Scaner from "../../Scaner/Scaner";
import Arrow from "../../Arrow/Arrow";
import Title from "../../SubTitle/SubTitle";
import CustomButton from "../../CustomButton/CustomButton";
import ScanerCSS from "../../Scaner/ScanerCSS";
import { useSelector } from "react-redux";

export default function StartPage() {
  let navigate = useNavigate();
  const changeLogin = useLoginUpdate();
  const changeServiceLogin = useServiceLoginUpdate();
  const { animatedMode } = useSelector(state => state.actionReducer)

  useEffect(() => {
    goToTestTimeout();
  }, []);

  const handleLoginByPin = () => {
    navigate("/login")
  }

  const handleVerify = () => {
    changeLogin(true);
    changeServiceLogin(true);
  };

  const [goToTestTimeout] = useTimeout(() => {
    handleVerify();
  }, 5000);

  return (
    <div className="main-container start-container">
      <div className="start-container-logo">
        <Logo color='#ffffff'/>
      </div>
      {!animatedMode ? <Scaner /> : <ScanerCSS />}
      <div>
        <Title>for tool selection</Title>
        <Title bold>please scan your card</Title>
      </div>
      <Arrow />
      <CustomButton
        variant="outlined"
        color='primary'
        onClick={handleLoginByPin}
        type='large'
      >
        or login by using pin
      </CustomButton>
    </div>);
}
