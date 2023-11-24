import TechErrorSVG from "./TechErrorSVG/TechErrorSVG"
import UnknownErrorSVG from "./UnknownErrorSVG/UnknownErrorSVG"
import WrapperSVG from "../../WrapperSVG/WrapperSVG"
import Title from "../../Title/Title"

export default function ErrorPage({ type, error }) {
    return (
        <div className="error-page-container">
            <Title>{error || 'unknown error'}</Title>
            <WrapperSVG>
                {type === 'unknown' ? <UnknownErrorSVG /> : <TechErrorSVG />}
            </WrapperSVG>
        </div>
    )
}