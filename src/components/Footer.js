import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    {/* <MailchimForm /> */}
                    {/* <Col sm={6}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""><img src={navIcon1} /></a>
                            <a href=""><img src={navIcon2} /></a>
                            <a href=""><img src={navIcon3} /></a>
                        </div>
                        <p>CopyRight 2024. All Right Reserved</p>
                    </Col> */}
                    <Col sm={12} className="text-center">
                        2024 &copy; All rights reserved.
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}