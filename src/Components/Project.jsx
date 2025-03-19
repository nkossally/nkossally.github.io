import { Text } from "./Text";
export const Project = ({ image, title, description, url }) => {
  return (
    <div className={"project-container"}>
      <div>
        <a href={url}  target="_blank" >
          <img src={image} className="project-image" alt="Latest Products Image" />
        </a>
      </div>
      <h4>
        <a href={url} target="_blank" className="project-title"><Text text={title} /></a>
      </h4>
      <p className="project-description">
        <Text text={description} />
      </p>
    </div>
  );
};
