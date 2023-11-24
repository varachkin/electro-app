import { Button } from "@mui/material";
import RoundItem from "../../RoundItem/RoundItem";
import SubTitle from "../../SubTitle/SubTitle";
import WarningSVG from "./WarningSVG";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { markAsReturned } from "../../../../features/user/userSlice";

export default function Warning() {
    const navigate = useNavigate()
    const {toolsList} = useSelector(state => state.userReducer)
    const selectedTool = toolsList.find(el => el.selected);
    const dispatch = useDispatch();
    const handleSuccess = () => {
        dispatch(markAsReturned(selectedTool.id))
        navigate('/end')
    }
    return (
        <>
            <div className="main-container flex-container">
                <SubTitle>please, Close the door to continue</SubTitle>
                <WarningSVG />
                <SubTitle>Check the door of the box</SubTitle>
                <RoundItem>{selectedTool.box}</RoundItem>
            </div>
            <Button onClick={handleSuccess}>go to success</Button>
        </>

    )
}