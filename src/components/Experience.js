import { Container, Row, Col } from "react-bootstrap";
import iconCode from '../assets/img/gif/code.gif';
import iconBook from '../assets/img/gif/book.gif';
import iconLearning from '../assets/img/gif/learning.gif';
import iconMonitor from '../assets/img/gif/monitor.gif';
import TrackVisibility from 'react-on-screen';

export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <Col className="py-3 text-center"> 
          <TrackVisibility>
              {({ isVisible }) => 
                <div className={ isVisible ? "animate__animated animate__bounce" : "" }>
                <h2>Experience</h2>
            </div>}
          </TrackVisibility>
        </Col>
        <div className="timeline">
          <div className="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
            <div className="col-10 col-md-5 order-3 order-md-1 timeline-content p-0">
              <h3 className="text-black">Germs Digital</h3>
              <div className="p-2">
                <u>Web Developer</u><br/>
                <ul>
                  <li>Delivered migration project with more than 500 pages for one of the top 3 banks in Singapore</li>
                  <li>Crafting Microsites and eDMs in alignment with Figma designs and concepts</li>
                  <li>Seamlessly integrating and updating features/functions for both new and existing websites</li>
                </ul>
              </div>
            </div>
            <div className="col-2 col-sm-1 px-md-4 order-2 timeline-image text-md-center p-1">
              <img src={iconCode} className="img-fluid p-2" alt="img" />
            </div>
            <div className="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
              <time>2022 - Present</time>
            </div>
          </div>
          <div className="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
            <div className="col-10 col-md-5 order-3 order-md-1 timeline-content p-0">
              <h3 className="text-black">Webscape Consulting Pte Ltd</h3>
              <div className="p-2"><u>Webmaster</u><br/>As a experience webmaster, I adeptly handle and fulfill daily tasks and requests.<br/><br/>
              <u>Business Analyst (2021 onwards)</u><br/>
              <ul>
                <li>Act as a proficient intermediry, effectively translating project requirements and briefs to the team with clarify and precision</li>
                <li>Offer valuable insights to clients, ensuring a comprehensive understanding of the system's behavior and functionality</li>
                <li>Meticulously document and curate comprehensive technical guidelines with the team</li>
              </ul>
              </div>
            </div>
            <div className="col-2 col-sm-1 px-md-4 order-2 timeline-image text-md-center p-1">
              <img src={iconMonitor} className="img-fluid p-2" alt="img" />
            </div>
            <div className="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
              <time>2018 - 2022</time>
            </div>
          </div>
          <div className="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
            <div className="col-10 col-md-5 order-3 order-md-1 timeline-content p-0">
              <h3 className=" text-black">CTC Integrated Software Engineering</h3>
              <div className="p-2"> 
                <u>Degree Internship</u><br/>
                <ul>
                    <li>Car seat ordering website development</li>
                    <li>Company website development using Wordpress</li>
                    <li>Using Microsoft FoxPro to create data conversion application</li>
                </ul>
              </div>
            </div>
            <div className="col-2 col-sm-1 px-md-4 order-2 timeline-image text-md-center p-1">
              <img src={iconLearning} className="img-fluid p-2" alt="img" />
            </div>
            <div className="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
              <time>2018 - 3 months</time>
            </div>
          </div>
          <div className="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
            <div className="col-10 col-md-5 order-3 order-md-1 timeline-content p-0">
              <h3 className=" text-black">Neuphoenix Machine Vision</h3>
              <div className="p-2"> 
                <u>Diploma Internship</u><br/>
                <ul>
                    <li>Exploring Atlassian code version control tool and brief the tech team in the company</li>
                    <li>Learning Machine Vision C# application</li>
                    <li>IT support including but not limited to PC formatting, network configuration and router setup.</li>
                </ul>
              </div>
            </div>
            <div className="col-2 col-sm-1 px-md-4 order-2 timeline-image text-md-center p-1">
              <img src={iconBook} className="img-fluid p-2" alt="img" />
            </div>
            <div className="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
              <time>2015 - 3 months</time>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
