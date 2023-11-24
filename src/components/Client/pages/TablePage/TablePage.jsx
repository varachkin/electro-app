import * as React from 'react';
import { IdleTimerProvider } from "react-idle-timer";
import { locales } from "../../../../locales";
import useLogoutHook from "../../../../hooks/useLogoutHook";
import TableTools from "../../Tables/TableTools";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext } from '@mui/lab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import IconBTN from '../../IconBTN/IconBTN';
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import TableCategories from '../../Tables/TableCategories';
import TableList from '../../Tables/TableList';
import CustomButton from '../../CustomButton/CustomButton';
import { useDispatch, useSelector } from "react-redux";
import { pickUp } from '../../../../features/user/userSlice';
import IconFilterBTN from '../../IconFilterBTN/IconFilterBTN';

const INITIAL_TABLE_VARIANT = {
  '1': {
    type: 'tools',
    view: 'table',
  },
  '2': {
    type: 'categories',
    view: 'table',
  },
  '3': {
    type: 'list',
    view: 'row',
  }
}

export default function TablePage() {
  const onIdle = useLogoutHook();
  const navigate = useNavigate();
  const [filter, setFilter] = React.useState(null);
  const [activeTab, setActiveTab] = React.useState('1');
  const [tableVariant, setTableVariant] = React.useState(INITIAL_TABLE_VARIANT);
  const [isBottom, setIsBottom] = React.useState(false)
  const { tools, categories } = useSelector(state => state.tableReducer)
  const selectedTools = tools.filter(el => el.selected)
  const dispatch = useDispatch();

  const handleToPickUp = () => {
    navigate('/pickup')
    dispatch(pickUp(selectedTools));
  }

  const handleScrollTable = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop < Math.floor(e.target.clientHeight) + 20;
    if (bottom) {
      setIsBottom(true)
    } else {
      setIsBottom(false)
    }
  }
  const handleChange = (event, newValue) => {
    if (newValue === '1') setFilter(null)
    setActiveTab(newValue);
  };

  const handleChangeTableView = () => {
    if (activeTab !== '3') {
      const copy = { ...tableVariant };
      copy[activeTab].view === 'table' ? copy[activeTab].view = 'row' : copy[activeTab].view = 'table';
      setTableVariant(copy)
    }
  }

  const handleSetFilter = (event, filter) => {
    setFilter(filter);
    setActiveTab('1');
  }

  const handleResetFilter = ()=> {
    setFilter(null);
  }

  const handleScrollTableToTop = () => {
    const table = document.getElementById('table');
    if (table) {
      table.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  useEffect(() => {
    handleScrollTableToTop()
  }, [activeTab])

  const filteredData = filter ? tools.filter((el) => el.category === filter) : [...tools]

  return (
    <IdleTimerProvider timeout={locales.clientTimeoutIdle} onIdle={onIdle}>
      <div className="main-container table-container">
        <div className='table'>
          <TabContext value={activeTab}>
            <div className='table-header'>
              <Box sx={{
                width: '100%',
              }}>
                <TabList onChange={handleChange} className='table-nav'>
                  <IconFilterBTN
                    isDisable={!filter}
                    handleChangeTableView={handleResetFilter}
                    filter={filter}
                  />
                  <Tab label="Tools" value="1" sx={{ fontSize: '0.75rem' }} />
                  <Tab label='Categories' value="2" />
                  <Tab label="My list" value="3" />
                  <IconBTN
                    isDisable={activeTab === '3'}
                    handleChangeTableView={handleChangeTableView}
                    filter={tableVariant[activeTab].view}
                  />
                </TabList>
              </Box>
            </div>
            <div className={`table-body ${isBottom ? '' : 'table-container-bg'}`} onScroll={handleScrollTable} id='table'>
              <TabPanel value="1">
                <TableTools type={tableVariant[activeTab]} tools={filteredData} />
              </TabPanel>
              <TabPanel value="2">
                <TableCategories type={tableVariant[activeTab]} categories={categories} handleSetFilter={handleSetFilter} />
              </TabPanel>
              <TabPanel value="3"><TableList type={tableVariant[activeTab]} /></TabPanel>
            </div>
          </TabContext>
        </div>
      </div>
      <div className='table-footer-btn'>
        {activeTab === '1' ? (
          <>
            <CustomButton
              variant='outlined'
              type='medium'
              onClick={() => navigate('/home')}
            >
              back to home
            </CustomButton>
            <CustomButton
              variant='contained'
              type='medium'
              onClick={(e) => handleChange(e, '3')}
              disabled={!selectedTools.length}
            >
              to rent tools
            </CustomButton>
          </>

        ) : activeTab === '2' ? (
          <></>
        ) : (
          <>
            <CustomButton
              variant='outlined'
              type='medium'
              onClick={(e) => handleChange(e, '1')}
            >
              to tools
            </CustomButton>
            <CustomButton
              type='medium'
              variant='contained'
              onClick={handleToPickUp}
              disabled={!selectedTools.length}
            >
              pick up
            </CustomButton>
          </>
        )
        }
      </div>
    </IdleTimerProvider>
  );
}
