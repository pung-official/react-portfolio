import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TrackVisibility from 'react-on-screen';
import { motion } from 'framer-motion';
import react from "../assets/img/react.png";
import js from "../assets/img/js.png";
import nodejs from "../assets/img/nodejs.png";
import css from "../assets/img/css.png";
import html from "../assets/img/html.png";
import voyager from "../assets/img/voyager.png";
import php from "../assets/img/php.png";
import laravel from "../assets/img/laravel.png";
import java from "../assets/img/java.png";
import vue from "../assets/img/vue.png";
import aem from "../assets/img/aem.png";
import teamsite from "../assets/img/opentext.png";
import chatgpt from "../assets/img/chatgpt.png";
import vscode from "../assets/img/vscode.png";
import docker from "../assets/img/docker.png";
import jquery from "../assets/img/jquery.png";
import mysql from "../assets/img/mysql.png";
import gitlab from "../assets/img/gitlab.png";
import github from "../assets/img/github.png";
import bootstrap from "../assets/img/bootstrap.png";


export const Skills = () => {
    const isDesktop = window.innerWidth >= 767;

    const skillsData = [
      { name: "React JS",
        imgpath: react,
        x: "-3vw", 
        y: "-6vw" 
      },
      { name: "Javascript", 
        imgpath: js,
        x: "-5vw",
        y: "13vw" 
      },
      { name: "NodeJS", 
        imgpath: nodejs,
        x: "5vw", 
        y: "-4vw" 
      },
      { 
        name: "CSS", 
        imgpath: css,
        x: "-3vw",
        y: "1vw" 
      },
      { 
        name: "HTML", 
        imgpath: html,
        x: "3vw",
        y: "7vw" 
      },
      { 
        name: "Voyager", 
        imgpath: voyager,
        x: "-23vw", 
        y: "10vw" 
      },
      { 
        name: "PHP", 
        imgpath: php,
        x: "12vw", 
        y: "4vw" 
      },
      { 
        name: "Laravel", 
        imgpath: laravel,
        x: "19vw", 
        y: "8vw" 
      },
      { 
        name: "Java",
        imgpath: java,
        x: "-13vw", 
        y: "12vw" 
      },
      { 
        name: "Vue JS", 
        imgpath: vue,
        x: "-7vw", 
        y: "-12vw" 
      },
      { 
        name: "Adobe Experience Manager (AEM)", 
        imgpath: aem,
        x: "-17vw", 
        y: "-18vw" 
      },
      { 
        name: "Opentext Teamsite", 
        imgpath: teamsite,
        x: "5vw", 
        y: "-15vw" 
      },
      { 
        name: "ChatGPT", 
        imgpath: chatgpt,
        x: "-18vw", 
        y: "-6vw"
      },
      { 
        name: "VS Code",
        imgpath: vscode, 
        x: "-25vw", 
        y: "3vw" 
      },
      { 
        name: "Docker", 
        imgpath: docker,
        x: "-28vw", 
        y: "-6vw" 
      },
      { 
        name: "Jquery",
        imgpath: jquery,
        x: "-15vw", 
        y: "5vw" 
      },
      { 
        name: "MYSQL", 
        imgpath: mysql,
        x: "10vw", 
        y: "13vw" 
      },
      { 
        name: "Gitlab", 
        imgpath: gitlab,
        x: "25vw", 
        y: "-10vw" 
      },
      { 
        name: "Github", 
        imgpath: github,
        x: "20vw", 
        y: "-16vw" 
      },
      { 
        name: "Bootstrap", 
        imgpath: bootstrap,
        x: "14vw", 
        y: "-6vw"
      }
    ];

    const Skill = ({ name, imgpath, x, y }) => {
      return (
        <>
              <TrackVisibility partialVisibility>
                {({ isVisible }) => (
                  // <motion.div 
                  //   className={`skill-item d-flex items-center justify-center rounded p-3 cursor-pointer bg-white text-dark ${isDesktop ? 'position-absolute' : ''}`} 
                  //   whileHover={{ scale: 1.2, cursor: 'pointer'  }} 
                  //   initial={{ x: 0, y: 0 }}
                  //   animate={{ x: isVisible && isDesktop ? x : 0, y: isVisible && isDesktop ? y : 0 }} 
                  //   transition={{ duration: 1.5 }}
                  //   >
                  //   {name}
                  // </motion.div>
                  <motion.img 
                    src={imgpath}
                    title={name}
                    className={`skill-item d-flex items-center justify-center rounded p-3 cursor-pointer w100 ${isDesktop ? 'position-absolute' : ''}`} 
                    whileHover={{ scale: 1.2, cursor: 'pointer'  }} 
                    initial={{ x: 0, y: 0 }}
                    animate={{ x: isVisible && isDesktop ? x : 0, y: isVisible && isDesktop ? y : 0 }} 
                    transition={{ duration: 1.5 }}/>
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
                        <Skill key={index} imgpath={skill.imgpath} name={skill.name} x={skill.x} y={skill.y} />
                      ))}
                    </Col>
                </Row>
            </Container>
        </section>
    )  

}