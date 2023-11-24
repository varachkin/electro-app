import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Client/pages/HomePage/HomePage";
import StartPage from "./components/Client/pages/StartPage/StartPage";
import TablePage from "./components/Client/pages/TablePage/TablePage";
import OpeningPage from "./components/Client/OpeningPage/OpeningPage";
import TechnicalBreakPage from "./components/Client/pages/TechnicalBreakPage/TechnicalBreakPage";
import SomethingWentWrongPage from "./components/Client/pages/SomethingWentWrongPage/SomethingWentWrongPage";
import ServiceHomePage from "./components/Service/ServiceHomePage/ServiceHomePage";
import ProtectedRoutes from "./components/Core/ProtectedRoutes";
import ServiceProtectedRoutes from "./components/Core/ServiceProtectedRoutes";
import ErrorPage from "./components/Client/pages/ErrorPage/ErrorPage";
import Header from "./components/Client/Header/Header";
import Main from "./components/Client/Main/Main";
import PickUpPage from "./components/Client/pages/PickUpPage/PickUpPage";
import EndPage from "./components/Client/pages/EndPage/EndPage";
import LoginPage from "./components/Client/pages/LoginPage/LoginPage";
import ReturnToolsPage from "./components/Client/pages/ReturnToolsPage/ReturnToolsPage";
import ReturnIssueQuestionPage from "./components/Client/pages/ReturnIssueQuestionPage/ReturnIssueQuestionPage";
import ChooseIssuePage from "./components/Client/pages/ChooseIssuePage/ChooseIssuePage";
import PutOnPage from "./components/Client/pages/PutOnPage/PutOnPage";
import Warning from "./components/Client/pages/Warning/Warning";

export default function AppRouter(props) {

  return (
    <BrowserRouter>
      <Main>
        <Header />
        <Routes>
          <Route path="/" element={<StartPage {...props} />} />
          <Route path="/login" element={<LoginPage {...props} />} />
          <Route path="/technical-break" element={<TechnicalBreakPage {...props} />} />
          <Route path="/error" element={<ErrorPage {...props} />} />
          <Route path="/pickup" element={<PickUpPage {...props} />} />
          <Route path="/put-on" element={<PutOnPage {...props} />} />
          <Route path="/warning" element={<Warning {...props} />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/table" element={<TablePage {...props} />} />
            <Route path="/return-tools" element={<ReturnToolsPage {...props} />} />
            <Route path="/home" element={<HomePage {...props} />} />
            <Route path="/return" element={<ReturnIssueQuestionPage {...props} />} />
            <Route path="/opening" element={<OpeningPage {...props} />} />
            
            <Route path="/choose-issue" element={<ChooseIssuePage {...props} />} />
            <Route path="/end" element={<EndPage {...props} />} />
            <Route path="/something-went-wrong" element={<SomethingWentWrongPage {...props} />} />
            <Route path="/error" element={<ErrorPage {...props} />} />
            <Route element={<ServiceProtectedRoutes />}>
              <Route path="/service-home" element={<ServiceHomePage {...props} />} />
            </Route>
          </Route>
        </Routes>
      </Main>
    </BrowserRouter>
  );
}
