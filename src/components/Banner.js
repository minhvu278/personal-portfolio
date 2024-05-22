import {Col, Container, Row} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import headingImg from "../assets/img/header-img.svg"
import {useEffect, useState} from "react";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)}
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text)
        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)

            if (!isDeleting && updatedText === fullText) {
                setIsDeleting(true)
                setDelta(period)
            } else if(isDeleting && updatedText === '') {
                setIsDeleting(false)
                setLoopNum(loopNum + 1)
                setDelta(500)
            }
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>
                            {`Hi I'm minhvu278`}
                            <span className="wrap">{text}</span>
                            <p>Desc</p>
                            <button onClick={() => console.log('connect')}>
                                Let's connect <ArrowRightCircle size={25} />
                            </button>
                        </h1>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headingImg} alt="Header img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}