import React from 'react';
import { Button, ThemeProvider } from "@mui/material";
import { themeDark } from "../../../../utils/theme";
import Loader from '../../Loader/Loader';
import useLogoutHook from "../../../../hooks/useLogoutHook";
import { IdleTimerProvider } from 'react-idle-timer';
import { locales } from "../../../../locales";
import Title from '../../Title/Title';
import SubTitle from '../../SubTitle/SubTitle';
import RoundItem from '../../RoundItem/RoundItem';
import Test from '../../Test/Test';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fromSelectToRent } from '../../../../features/user/userSlice';
import { changeSelectToRent, clearList } from '../../../../features/table/tableSlice';
import { setActionPickUp } from "../../../../features/actions/actionsSlice";

const PickUpPage = () => {
    const onIdle = useLogoutHook();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { toolsList } = useSelector(state => state.userReducer)
    const selectedList = toolsList.filter(el => el.selected)
    const { animatedMode } = useSelector(state => state.actionReducer)

    const handleSuccess = () => {
        dispatch(fromSelectToRent(toolsList));
        dispatch(changeSelectToRent());
        dispatch(clearList());
        dispatch(setActionPickUp())
        navigate('/end')
    }

    return (
        <IdleTimerProvider timeout={locales.clientTimeoutIdle} onIdle={onIdle}>
            <div className="main-container">
                <div className="flex-container pick-up-container">
                    <div className='title-section'>
                        <Title>Waiting for tools pick up</Title>
                    </div>
                    <div className='spinner-section'>
                        {!animatedMode ? <Test /> : <Loader />}
                    </div>
                    <div className='info-section'>
                        <SubTitle>Pick up the tools from boxes:</SubTitle>
                        <div className='round-items-wrapper'>
                            <div>
                                {selectedList.map((el) => (
                                    <RoundItem key={el.id}>{el.box}</RoundItem>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ position: 'fixed', bottom: '2rem', left: '2rem' }}>
                    <Button onClick={handleSuccess}>go to success </Button>
                </div>
            </div>
        </IdleTimerProvider>
    );
};

export default PickUpPage;