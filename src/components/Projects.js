import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from './ProjectCard';
import projImg1 from "../assets/img/uob-research.jpg";
import projImg2 from "../assets/img/wrs.jpg";
import projImg4 from "../assets/img/da.jpg";
import projImg5 from "../assets/img/calculator.jpg";
import projImg6 from "../assets/img/edm.jpg";
import projImg8 from "../assets/img/pfs.jpg";
import projImg9 from "../assets/img/homestay.jpg";
import projImg10 from "../assets/img/edm-full.jpg";
import projImg11 from "../assets/img/motion-game.jpg";
import projImg12 from "../assets/img/filter-game.jpg";
import projImg13 from "../assets/img/tax-rebate-calculator.jpg";
import projVideo from "../assets/video/motion-detection-game.mp4";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects = [
        {
            title: "Dining Advisor",
            description: "Laravel & React JS",
            imgUrl: projImg4,
            link: "https://thediningadvisor.com/home"
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
            title: "GovTech Security Awareness Capaign",
            description: "NEXT JS, Fraser",
            imgUrl: projImg11,
            link: projVideo
        },
        {
            title: "TIKTOK Filter Game - To raise awareness of domestic violence in Singapore",
            description: "Effect House, TikTok",
            imgUrl: projImg12,
            link: "https://vt.tiktok.com/ZSMN99jBn"
        },
        {
            title: "Homestay Reservation App",
            description: "Android Studio, Java, PHP",
            imgUrl: projImg9,
            link: "https://github.com/pung-official/fyp-reservation.git"
        }
    ];
    const miniprojects = [
        {
            title: "Debt Consolidation Plan Calculator",
            description: "Teamsite Customised Component",
            imgUrl: projImg5,
            link: "https://www.uob.com.sg/personal/borrow/personal-financing/debt-consolidation-plan.page#how-it-works"
        },
        {
            title: "Tax Payment Rebate Calculator",
            description: "Teamsite Customised Component",
            imgUrl: projImg13,
            link: "https://www.uob.com.sg/personal/save/one-account-tax-saver.page"
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
                            <Nav.Link eventKey="first">Website</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Web App</Nav.Link>
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
