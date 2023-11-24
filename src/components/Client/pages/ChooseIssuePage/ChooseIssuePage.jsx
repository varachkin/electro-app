import { IdleTimerProvider } from "react-idle-timer";
import { locales } from "../../../../locales";
import useLogoutHook from "../../../../hooks/useLogoutHook";
import SubTitle from "../../SubTitle/SubTitle";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../CustomButton/CustomButton";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setIssue } from "../../../../features/user/userSlice";
import {setActionReturn} from "../../../../features/actions/actionsSlice";

export default function ChooseIssuePage({ id }) {
  const onIdle = useLogoutHook();
  const navigate = useNavigate();
  const { toolsList } = useSelector(state => state.userReducer)
  const selectedTool = toolsList.find(el => el.selected);
  const dispatch = useDispatch();

  const handleSetIssue = (event) => {
    const payload = {
      id: selectedTool.id,
      message: event.target.textContent
    }
    dispatch(setIssue(payload))
    dispatch(setActionReturn())
    navigate('/put-on');
  }
  const handleBack = () => {
    navigate(-1);
  }
  const ISSUES = ['issue 1','issue 2','issue 3']
  return (
    <IdleTimerProvider timeout={locales.clientTimeoutIdle} onIdle={onIdle}>
      <div className="main-container home-container">
        <div className="flex-container">
          <SubTitle bold>Please, choose the issue</SubTitle>
          <div className="btn-block">
            {ISSUES.map(el => (
              <CustomButton type='large' variant='contained' onClick={handleSetIssue} key={el}>{el}</CustomButton>
            ))}
          </div>
          <CustomButton type='large' variant='outlined' onClick={handleBack}>BACK</CustomButton>
        </div>
      </div>
    </IdleTimerProvider>
  );
}