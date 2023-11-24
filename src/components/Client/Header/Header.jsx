import { Typography } from "@mui/material";
import CustomButton from "../CustomButton/CustomButton";
import Logo from "../Logo/Logo";
import { useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
    const {pathname} = useLocation();
    const navigate = useNavigate()
    const handleServisClick = ()=>{
        // Should add logic to service button click
        navigate('/login')
    }

    const color = pathname !== '/table' && pathname !== '/return-tools' ? '#ffffff' : '#585857'
    return (
        <header className="header">
            <div className="header-logo">
                { pathname === '/' ?
                    <span style={{fontSize: '12px'}}>Technical support tel. +48 888 888 888</span> :
                    <Logo color={color}/>}
            </div>
            <div className='header-btn'>
                <CustomButton variant='outlined' type='small' onClick={handleServisClick}>
                    serwis
                </CustomButton>
            </div>
         </header>
    )
}


