import React from 'react';
import {Button, ThemeProvider} from "@mui/material";
import {themeDark} from "../../../../utils/theme";

const TestPage = () => {
    return (
        <ThemeProvider theme={themeDark}>
        <div style={{display: 'flex', height: '100%', flexDirection: 'column', width: '50%'}}>
            <p style={{padding: '4rem'}}>
                <Button variant={"contained"}>Button</Button>
            </p>

            <p style={{padding: '4rem'}}>
                <Button variant={"outlined"}>Button</Button>
            </p>
        </div>
        </ThemeProvider>
    );
};

export default TestPage;