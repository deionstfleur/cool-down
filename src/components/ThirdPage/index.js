import React from 'react'
import {Row, Card, Col, Button, Jumbotron, Container } from 'react-bootstrap'
import events from '../../images/events.jpg'
import homeless from '../../images/homeless.jpg'
import educate from '../../images/educate.jpg'


const ThirdPage = () => {
    return(
        <>
        {/* <Container> */}
            <Jumbotron >
                <h1>Follow us on Instagram: @cooldown</h1>
            </Jumbotron>
        {/* </Container> */}
        {/* <Row>
        <Col md={{ span: 3, offset: 4 }}>
            <h1 style={{paddingTop: 30}}>Our Promises</h1>
        </Col>

    </Row>

    <Row >
        <Col md={4}>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={homeless} />
        <Card.Body >
            <Card.Title>Provide for the homeless</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            
        </Card.Body>
    </Card>

        </Col>

        <Col md={4}>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Spread Awareness</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>

        </Col>

        <Col md={4}>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={educate} />
        <Card.Body>
            <Card.Title>Educate</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
    </Card>

        </Col>

    </Row> */}
    </>

    )

}

export default ThirdPage;