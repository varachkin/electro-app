import { ThemeProvider } from "@emotion/react";
import { Paper } from "@mui/material";
import { useLocation } from "react-router-dom"
import { themeLight, themeDark } from "../../../utils/theme";

export default function Main({ children }) {
    const { pathname } = useLocation();
    const isBackgroundImage = (pathname !== '/table' && pathname !== '/return-tools');
    const theme = pathname !== '/table' && pathname !== '/return-tools' ? themeDark : themeLight

    const style = {
        borderRadius: 0,
        background: pathname === '/warning' ?
            'linear-gradient(180deg, #ad5909, #ff9a56d5)' :
            isBackgroundImage ? 'linear-gradient(260deg, #010631, #0b006e)' :
                'linear-gradient(260deg, #d6d6d6, #efeff0)',
        '&::before': {
            opacity: isBackgroundImage ? 0.2 : 0,
            filter: pathname === '/warning' ? 'invert()' : 'none',
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Paper className="main-page wrapper" sx={style}>
                {children}
            </Paper>
        </ThemeProvider>
    )
}