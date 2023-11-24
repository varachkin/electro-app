import { Switch } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { changeAnimatedMode } from "../../../features/actions/actionsSlice";

export function Switcher() {
    const { animatedMode } = useSelector(state => state.actionReducer);
    const dispatch = useDispatch();
    const handleChange = () => {
        dispatch(changeAnimatedMode())
    }

    return (
        <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 9999, opacity: 0.1 }}>
            <Switch value={animatedMode} onChange={handleChange} />
        </div>

    )
}