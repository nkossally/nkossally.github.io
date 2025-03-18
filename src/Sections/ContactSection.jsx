import { forwardRef } from "react";
export const ContactSection = forwardRef((props, ref) => {
  return (
    <div className={"contact-section"} ref={ref}>
      <div className={"contact-column"}>
        <div className={"contact-heading"}>Location</div>
        <div className={"contact-description"}>Brooklyn, New York</div>
      </div>
      <div className="contact-column">
        <div className={"contact-heading"}> Email</div>
        <div className={"contact-description"}>nkossally@gmail.com</div>
      </div>
    </div>
  );
});
