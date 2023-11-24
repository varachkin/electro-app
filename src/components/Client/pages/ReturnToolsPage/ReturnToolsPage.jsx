import * as React from 'react';
import { IdleTimerProvider } from "react-idle-timer";
import { locales } from "../../../../locales";
import useLogoutHook from "../../../../hooks/useLogoutHook";
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../CustomButton/CustomButton';
import TableReturn from '../../Tables/TableReturn';
import SubTitle from './../../SubTitle/SubTitle'

export default function ReturnToolsPage() {
  const onIdle = useLogoutHook();
  const [isBottom, setIsBottom] = React.useState(false)
  const navigate = useNavigate();

  const handleScrollTable = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop < Math.floor(e.target.clientHeight) + 20;
    if (bottom) {
      setIsBottom(true)
    } else {
      setIsBottom(false)
    }
  }

  return (
    <IdleTimerProvider timeout={locales.clientTimeoutIdle} onIdle={onIdle}>
      <div className="main-container table-container">
        <SubTitle>return tools</SubTitle>
        <div className={`table-return ${!isBottom ? 'table-return-bg' : ''}`} onScroll={handleScrollTable}>
          <TableReturn />
        </div>
        <div className='table-footer-btn'>
          <CustomButton
            variant='outlined'
            type='large'
            onClick={() => navigate('/home')}
          >
            <Typography variant='h4'>back to home</Typography>
          </CustomButton>
        </div>
      </div>
    </IdleTimerProvider>
  );
}
