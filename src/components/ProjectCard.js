import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        {link ? (
            <a href={link} target="_blank" rel="noreferrer">
              <img src={imgUrl} alt={title} />
            </a>
          ) : (
            <img src={imgUrl} alt={title} />
          )}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
