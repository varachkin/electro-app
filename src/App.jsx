import {useEffect} from "react";
import AppRouter from "./AppRouter";
import {LangProvider} from "./contexts/LangContext";
import {LoginProvider} from "./contexts/LoginContext";
import {ServiceLoginProvider} from "./contexts/ServiceLoginContext";
import Page from "./components/Client/Page/Page";
import {ThemeProvider} from '@mui/material/styles';
import {themeDark} from "./utils/theme";
import {Provider} from "react-redux";
import {setupStore} from "./store/store";

export default function App(props) {

    useEffect(() => {
    });
    const store = setupStore()

    return (
        <>
            <Provider store={store}>
                <ThemeProvider theme={themeDark}>
                    <LangProvider>
                        <LoginProvider>
                            <ServiceLoginProvider>
                                <div id={'wrapper'}>
                                    <Page>
                                        <AppRouter {...props} />
                                    </Page>
                                </div>

                            </ServiceLoginProvider>
                        </LoginProvider>
                    </LangProvider>
                </ThemeProvider>
            </Provider>
        </>
    );
}