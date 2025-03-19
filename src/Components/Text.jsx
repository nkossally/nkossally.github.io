import classNames from "classnames";

export const Text = ({ text }) => {
  const words = text.split(" ");

  return (
    <div className="text-container">
      {words.map((word, idx) => {
        return (
          <div
            key={text.length + word + idx}
            className={classNames("moving-text")}
          >
            {word} <span> &nbsp;</span>
          </div>
        );
      })}
    </div>
  );
};
