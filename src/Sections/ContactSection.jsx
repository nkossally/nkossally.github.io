import { forwardRef } from "react";
import { Text } from "../Components/Text";
export const ContactSection = forwardRef((props, ref) => {
  return (
    <div className={"contact-section"} ref={ref}>
      <div className={"contact-column"}>
        <div className={"contact-heading"}><Text text={"Location"} /></div>
        <div className={"contact-description"}><Text text={"Brooklyn, New York"} /></div>
      </div>
      <div className="contact-column">
        <div className={"contact-heading"}> <Text text={"Email"} /></div>
        <div className={"contact-description"}> <Text text={"nkossally@gmail.com"} /></div>
      </div>
    </div>
  );
});
