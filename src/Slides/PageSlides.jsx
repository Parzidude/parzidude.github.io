import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import HeadingSlide from "./HeadingSlide";
import Slide from "../Slides/Slide";
import "./Style.css";

export default function PageSlides() {
  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection>
          <HeadingSlide />
        </FullpageSection>
        <FullpageSection>
          <Slide />
        </FullpageSection>
        <FullpageSection
          style={{
            backgroundColor: "firebrick",
            padding: "1em",
          }}
        >
          3
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
}
