import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/banner-bg.png";
import projImg5 from "../assets/img/node-js.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg4,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg5,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        }
    ];
    return (
      <section className="project" id="project">
        <Container>
          <Row>
            <Col>
                <TrackVisibility>
                {({ isVisible }) => 
                        <div className={ isVisible ? "animate__animated animate__bounce" : "" }>
                            <h2>Projects</h2>
                        </div>}
                </TrackVisibility>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Web Development</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Mobile App</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Mini Project</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                            {projects.map((project, index) => {
                                return (
                                    <ProjectCard 
                                        key={index} 
                                        {...project} />
                                )
                            })}
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">Lorem Ipsums</Tab.Pane>
                        <Tab.Pane eventKey="third">Lorem Ipsums three</Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>
    );
}
