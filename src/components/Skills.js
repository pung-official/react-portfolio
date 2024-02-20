import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TrackVisibility from 'react-on-screen';
import { motion } from 'framer-motion';

export const Skills = () => {
    const isDesktop = window.innerWidth >= 767;

    const skillsData = [
      { name: "React", x: "-3vw", y: "-6vw" },
      { name: "Javascript", x: "-5vw", y: "13vw" },
      { name: "NodeJS", x: "5vw", y: "-4vw" },
      { name: "CSS", x: "-3vw", y: "1vw" },
      { name: "HTML", x: "3vw", y: "7vw" },
      { name: "ES6", x: "-23vw", y: "10vw" },
      { name: "PHP", x: "12vw", y: "4vw" },
      { name: "Laravel", x: "19vw", y: "8vw" },
      { name: "Java", x: "-13vw", y: "12vw" },
      { name: "Vue", x: "-7vw", y: "-12vw" },
      { name: "AEM", x: "-17vw", y: "-18vw" },
      { name: "Teamsite", x: "5vw", y: "-15vw" },
      { name: "ChatGPT", x: "-18vw", y: "-6vw" },
      { name: "VS Code", x: "-25vw", y: "3vw" },
      { name: "Docker", x: "-28vw", y: "-6vw" },
      { name: "Photoshop", x: "-15vw", y: "5vw" },
      { name: "MYSQL", x: "10vw", y: "13vw" },
      { name: "Gitlab", x: "25vw", y: "-10vw" },
      { name: "Github", x: "20vw", y: "-16vw" },
      { name: "Bootstrap", x: "14vw", y: "-6vw" }
    ];

    const Skill = ({ name, x, y }) => {
      return (
        <>
              <TrackVisibility partialVisibility>
                {({ isVisible }) => (
                  <motion.div 
                    className={`skill-item d-flex items-center justify-center rounded p-3 cursor-pointer bg-white text-dark ${isDesktop ? 'position-absolute' : ''}`} 
                    whileHover={{ scale: 1.05 }} 
                    initial={{ x: 0, y: 0 }}
                    animate={{ x: isVisible && isDesktop ? x : 0, y: isVisible && isDesktop ? y : 0 }} 
                    transition={{ duration: 1.5 }}
                    >
                    {name}
                  </motion.div>
                )}
              </TrackVisibility>
        </>
      );
    };
    return (
        <section className="skills" id="skills">
            <Container fluid>
                <Row>
                    <Col className="py-3 text-center"> 
                    <TrackVisibility>
                      {({ isVisible }) => 
                            <div className={ isVisible ? "animate__animated animate__bounce" : "" }>
                        <h2>Skills</h2>
                        </div>}
                    </TrackVisibility>
                    </Col>
                </Row>
                <Row>
                <Col className="bg-circular-light position-relative d-flex flex-wrap justify-content-center align-items-center rounded mx-width-1200 h-700 mx-auto">
                      {skillsData.map((skill, index) => (
                        <Skill key={index} name={skill.name} x={skill.x} y={skill.y} />
                      ))}
                    </Col>
                </Row>
            </Container>
        </section>
    )  

}