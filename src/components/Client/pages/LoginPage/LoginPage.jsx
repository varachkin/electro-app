import { IdleTimerProvider } from "react-idle-timer";
import { useNavigate } from "react-router-dom";
import { locales } from "../../../../locales";
import useLogoutHook from "../../../../hooks/useLogoutHook";
import React from "react";
import GridButtons from "../../GridButtons/GridButtons";
import SubTitle from "../../SubTitle/SubTitle";
import Title from "../../Title/Title";
import CustomButton from "../../CustomButton/CustomButton";
import { Typography } from "@mui/material";
import Timer from "../../Timer/Timer";

export default function LoginPage() {
    const onIdle = useLogoutHook();
    const [pin, setPin] = React.useState('');
    const navigate = useNavigate();

    const handleTypeNum = (event) => {
        if(pin.length < 3){
            setPin(pin + event.target.textContent)
        }

    }

    const handleSendPin = () => {
        navigate("/home")
    }
    const handleNavigate = () => {
        navigate("/")
    }
    return (
        <IdleTimerProvider timeout={locales.clientTimeoutIdle} onIdle={onIdle}>
            <div className="main-container">
                <div className="pin-code-container">
                    <SubTitle bold>Enter your pin</SubTitle>
                    <div className="typing-field-container"><Title>{'*'.repeat(pin.length)}</Title></div>
                    <GridButtons handleTypeNum={handleTypeNum} />
                    <CustomButton
                        variant="outlined"
                        color='primary'
                        onClick={handleSendPin}
                        type='large'
                    >
                        Log in
                    </CustomButton>
                </div>
                <div style={{position: 'absolute', bottom: '1.75rem', right: '0'}}><Timer handler={handleNavigate} time={30} /></div>
            </div>
        </IdleTimerProvider>
    );
}