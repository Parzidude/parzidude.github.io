import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import HeadingSlide from "./HeadingSlide";
import "./Style.css";
import "../Components/Image.css";
import datay1 from "../assets/Year1.json";
import datay2 from "../assets/Year2.json";
import datay3 from "../assets/Year3.json";
import datay4 from "../assets/Year4.json";
import datay5 from "../assets/Year5.json";
import datay6 from "../assets/Year6.json";
import datay7 from "../assets/Year7.json";
import datay8 from "../assets/Year8.json";
import datay9 from "../assets/Year9.json";
import datay10 from "../assets/Year10.json";
import Slide from "../Slides/Slide";

export default function PageSlides() {
  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection>
          <HeadingSlide />
        </FullpageSection>
        <FullpageSection>
          <Slide interactiveimagedata={datay1} />
        </FullpageSection>
        <FullpageSection>
          <Slide interactiveimagedata={datay2} />
        </FullpageSection>
        <FullpageSection>
          <Slide interactiveimagedata={datay3} />
        </FullpageSection>
        <FullpageSection>
          <Slide interactiveimagedata={datay4} />
        </FullpageSection>
        <FullpageSection>
          <Slide interactiveimagedata={datay5} />
        </FullpageSection>
        <FullpageSection>
          <Slide interactiveimagedata={datay6} />
        </FullpageSection>
        <FullpageSection>
          <Slide interactiveimagedata={datay7} />
        </FullpageSection>
        <FullpageSection>
          <Slide interactiveimagedata={datay8} />
        </FullpageSection>
        <FullpageSection>
          <Slide interactiveimagedata={datay9} />
        </FullpageSection>
        <FullpageSection>
          <Slide interactiveimagedata={datay10} />
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
}
