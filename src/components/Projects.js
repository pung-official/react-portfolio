import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from './ProjectCard';
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/uob-research.jpg";
import projImg2 from "../assets/img/wrs.jpg";
import projImg3 from "../assets/img/one-card.jpg";
import projImg4 from "../assets/img/da.jpg";
import projImg5 from "../assets/img/calculator.jpg";
import projImg6 from "../assets/img/edm.jpg";
import projImg7 from "../assets/img/form.jpg";
import projImg8 from "../assets/img/pfs.jpg";
import projImg9 from "../assets/img/homestay.jpg";
import projImg10 from "../assets/img/edm-full.jpg";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects = [
        {
            title: "Dining Advisor",
            description: "Laravel & React JS",
            imgUrl: projImg4,
            link: ""
        },
        {
            title: "UOB Research Project",
            description: "Teamsite",
            imgUrl: projImg1,
            link: "https://www.uobgroup.com/research/quarterly-global-outlook.page"
        },
        {
            title: "Mandai WildLife Reserve",
            description: "AEM",
            imgUrl: projImg2,
            link: "https://www.mandai.com/en/saving-wildlife/animals.html"
        },
        {
            title: "UOB Personal",
            description: "UOB migration project with more than 500 pages",
            imgUrl: projImg8,
            link: "https://www.uob.com.sg/personal/index.page"
        },        
    ];
    const mobileapps = [
        {
            title: "Homestay Reservation App",
            description: "Android Studio, Java, PHP",
            imgUrl: projImg9,
            link: "https://github.com/pung-official/fyp-reservation.git"
        }
    ];
    const miniprojects = [
        {
            title: "UOB Form",
            description: "Development",
            imgUrl: projImg7,
            link: "https://forms.uob.com.sg/industry-insights/download-form.html"
        },
        {
            title: "Debt Consolidation Plan Calculator",
            description: "Teamsite Customised Component",
            imgUrl: projImg5,
            link: "https://www.uob.com.sg/personal/borrow/personal-financing/debt-consolidation-plan.page#how-it-works"
        },
        {
            title: "Electronic Direct Mail",
            description: "eDM Development & Blasting",
            imgUrl: projImg6,
            link: projImg10
        },
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
                        <Tab.Pane eventKey="second">
                        <Row>
                            {mobileapps.map((mobileapp, index) => {
                                return (
                                    <ProjectCard 
                                        key={index} 
                                        {...mobileapp} />
                                )
                            })}
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <Row>
                                {miniprojects.map((miniproject, index) => {
                                    return (
                                        <ProjectCard 
                                            key={index} 
                                            {...miniproject} />
                                    )
                                })}
                                </Row>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>
    );
}
