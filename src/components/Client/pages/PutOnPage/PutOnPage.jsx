import React from 'react';
import { Button } from "@mui/material";
import Loader from '../../Loader/Loader';
import useLogoutHook from "../../../../hooks/useLogoutHook";
import { IdleTimerProvider } from 'react-idle-timer';
import { locales } from "../../../../locales";
import Title from '../../Title/Title';
import SubTitle from '../../SubTitle/SubTitle';
import RoundItem from '../../RoundItem/RoundItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fromSelectToRent, markAsReturned } from '../../../../features/user/userSlice';
import Timer from '../../Timer/Timer';
import Test from "../../Test/Test";

const PutOnPage = () => {
    const onIdle = useLogoutHook();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { toolsList } = useSelector(state => state.userReducer)
    const selectedTool = toolsList.find(el => el.selected)
    const { animatedMode } = useSelector(state => state.actionReducer)

    const handleSuccess = () => {
        dispatch(fromSelectToRent(toolsList));
        dispatch(markAsReturned(selectedTool.id))
        navigate('/end')
    }

    const handleToWarning = () => {
        navigate('/warning')
    }

    return (
        <IdleTimerProvider timeout={locales.clientTimeoutIdle} onIdle={onIdle}>
            <div className="main-container">
                <div className="flex-container pick-up-container">
                    <Title>{`The box is opened`}</Title>
                    <div className='spinner-section'>
                        {!animatedMode ? <Test /> : <Loader />}
                    </div>
                    <div className='flex-container' style={{ flex: 0 }}>
                        <SubTitle>{`Please, put on the ${selectedTool.name} to the box`}</SubTitle>
                        <div className='round-items-wrapper'>
                            <div>
                                <RoundItem>{selectedTool.box}</RoundItem>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ position: 'fixed', bottom: '2rem', left: '2rem' }}>
                    <Button onClick={handleSuccess}>go to success </Button>
                </div>

                <div style={{ position: 'fixed', bottom: '2rem', right: '2rem' }}>
                    <Timer handler={handleToWarning} time={25} />
                </div>
            </div>
        </IdleTimerProvider>
    );
};

export default PutOnPage;