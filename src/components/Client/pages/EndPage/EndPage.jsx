import { Typography } from "@mui/material"
import Timer from "../../Timer/Timer"
import Title from "../../Title/Title"
import SuccessSVG from "./SuccessSVG/SuccessSVG"
import { useNavigate } from "react-router-dom"
import CustomButton from "../../CustomButton/CustomButton"
import { useSelector } from "react-redux";
import SubTitle from "../../SubTitle/SubTitle"

export default function EndPage() {
    const navigate = useNavigate();
    const { action } = useSelector(state => state.actionReducer);
    const handleNavigate = () => {
        action === 'return' ?
            setTimeout(() => navigate('/return-tools'), 600) :
            setTimeout(() => navigate('/home'), 600)
    }
    return (
        <div className="main-container end-container">
            <div>
                <Title>Successful</Title>
                {action === 'return' ?
                    <SubTitle>{`You have successfully returned the tool`}</SubTitle> :
                    <SubTitle>{`Message when client pick up everything`}</SubTitle>
                }
            </div>

            <SuccessSVG />
            <div className="timer">
                <CustomButton type='large' variant="outlined" color="primary" onClick={handleNavigate} sx={{ padding: '1rem 3rem', border: '4px solid white' }}>
                    <Timer handler={handleNavigate} time={10} />
                    <Typography variant="h3">{action === 'return' ? 'back to return page' : 'back to main screen'}</Typography>
                </CustomButton>
            </div>
        </div>
    )
}