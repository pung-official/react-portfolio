import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import profileImg from "../assets/img/profile.png";
// import profileImg2 from "../assets/img/profile2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300);
    const period = 2000;
    const toRotate = ["Pung", "Web Developer", "App Developer"];
      
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { 
            clearInterval(ticker) 
        };
    }, [text, isDeleting, loopNum, delta]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => Math.max(prevDelta / 2, 50));
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }

    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}> 
                        <TrackVisibility>
                            {({ isVisible }) => 
                            <div className={ isVisible ? "animate__animated animate__fadeIn" : "" }>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{`Hi I'm `}<span className="">{text}</span></h1>
                                <p>I am a passionate and tech-savvy individual with a keen enthusiasm to create seamless and captivating online experiences. Let's turn your ideas into stunning reality!</p>
                                <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="text-center mt-3">
                        <img src={profileImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}