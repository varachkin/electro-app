import { IdleTimerProvider } from "react-idle-timer";
import { locales } from "../../../../locales";
import useLogoutHook from "../../../../hooks/useLogoutHook";
import SubTitle from "../../SubTitle/SubTitle";
import { useNavigate } from "react-router-dom";
import CustomButton from "../../CustomButton/CustomButton";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { markAsSelect } from "../../../../features/user/userSlice";
import { markAsAvailable } from "../../../../features/table/tableSlice";
import { setActionReturn } from "../../../../features/actions/actionsSlice";

export default function ReturnIssueQuestionPage() {
  const onIdle = useLogoutHook();
  const navigate = useNavigate();
  const { toolsList } = useSelector(state => state.userReducer)
  const selectedTool = toolsList.find(el => el.selected)
  const dispatch = useDispatch();

  const handleYes = () => {
    dispatch(markAsSelect(selectedTool.id))
    navigate("/choose-issue");
  }

  const handleNo = () => {
    dispatch(markAsSelect(selectedTool.id))
    dispatch(markAsAvailable(selectedTool.id))
    dispatch(setActionReturn())
    navigate('/put-on')
  }

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <IdleTimerProvider timeout={locales.clientTimeoutIdle} onIdle={onIdle}>
      <div className="main-container home-container">
        <div className="flex-container">
          <SubTitle bold>Does it have any issues?</SubTitle>
          <div className="btn-block">
            <CustomButton type='large' variant='contained' onClick={handleYes}>YES</CustomButton>
            <CustomButton type='large' variant='contained' onClick={handleNo}>NO</CustomButton>
          </div>
          <CustomButton type='large' variant='outlined' onClick={handleBack}>BACK</CustomButton>
        </div>
      </div>
    </IdleTimerProvider>
  );
}
