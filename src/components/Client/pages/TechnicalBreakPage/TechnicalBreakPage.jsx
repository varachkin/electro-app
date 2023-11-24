import WrapperSVG from "../../WrapperSVG/WrapperSVG";
import TechnicalBreak from "../../TechBreakSVG/TechBreakSVG";
import Title from "../../Title/Title";

export default function TechnicalBreakPage() {
  return (
    <div className="main-container technicalbreak-container">
      <Title>Technical braek</Title>
      <WrapperSVG>
        <TechnicalBreak />
      </WrapperSVG>
    </div>
  )
}
