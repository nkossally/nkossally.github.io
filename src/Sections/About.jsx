import { forwardRef } from "react";
import Resume from "../assets/Najja Kossally Resume.pdf";
import {Text} from "../Components/Text"

import classNames from "classnames";
export const About = forwardRef((props, ref) => {
  return (
    <div className={"about-section"} ref={ref}>
      <div className={classNames("name")}>Najja Kossally</div>
      <div className={classNames("job")}>Software Engineer</div>
      <div className="links-icons-container">
        <a
          href="https://www.linkedin.com/in/najja-k-a4403772"
          target="_blank"
        >
          <div className={"professional-photo"}></div>
        </a>

        <a
          href="https://www.linkedin.com/in/najja-k-a4403772"
          className="about-links"
          target="_blank"
        >
          <div className={"linked-in"}></div>
        </a>

        <a
          href="https://github.com/nkossally"
          className="about-links"
          target="_blank"
        >
          <div className={"github"}></div>
        </a>
      </div>
      <div className="about-section-inner-container">
        <div className="about-half">
          <div className={"about-section-title"}> About Me</div>

          <div className="about-me">
           
            <Text text="I am a software engineer with experience in React, Redux, Rails, Javascript and Java." />

          </div>
          <div className="about-me">
            <Text text="I have worked for the companies Capsule and Google." />
          </div>
        </div>
      </div>
      <a
        className={"resume-button"}
        href={Resume}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download my Resume
      </a>
    </div>
  );
});
