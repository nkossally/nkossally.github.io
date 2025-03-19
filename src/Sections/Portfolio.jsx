import { forwardRef } from "react";

import { Project } from "../Components/Project";

import SetImg from "../assets/Set.png";
import ScrabbleImg from "../assets/Scrabble.png";
import DominoesImg from "../assets/Dominoes.png";
import ImageEncrypterImg from "../assets/Image-Encrypter.png";

export const Portfolio = forwardRef((props, ref) => {
  return (
    <div className={"portfolio"} ref={ref}>
      <div className="section-title"> My Portfolio</div>
      <div className="projects-row">
        <Project
          title="Scrabble"
          url="https://nkossally.github.io/seven-letters"
          image={ScrabbleImg}
          description="React/Flask implementation of the game of Scrabble."
        />
        <Project
          title="AES Image Encrypter"
          url="https://nkossally.github.io/image-encrypter/"
          image={ImageEncrypterImg}
          description="App for AES encyption of images."
        />
        <Project
          title="Dominoes"
          url="https://nkossally.github.io/dominoes4"
          image={DominoesImg}
          description="JavaScript/React implementation of the game of dominoes."
        />
        <Project
          title="Set"
          url="https://nkossally.github.io/Set"
          image={SetImg}
          description="JavaScript implementation of the card game Set."
        />
      </div>
    </div>
  );
});
