import { forwardRef } from "react";
import ProfessionalPhoto from "../assets/professional_photo.jpg";
import Resume from "../assets/Najja Kossally Resume.pdf";

import classNames from "classnames";
export const About = forwardRef((props, ref) => {
  return (
    <div className={"about-section"} ref={ref}>
      <div className={classNames("name")}>Najja Kossally</div>
      <div className={classNames("job")}>Software Engineer</div>
      <div className="links-icons-container">
        <img className={"professional-photo"} src={ProfessionalPhoto} />

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
            I am a software engineer with experience in React, Redux, Rails,
            Javascript and Java.
          </div>
          <div className="about-me">
            I have worked for the companies Capsule and Google.
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
