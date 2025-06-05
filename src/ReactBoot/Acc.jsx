import {Accordion, Container, Row, Col} from 'react-bootstrap';

const Acc = () => {
    return(
        <>
        <Container>
            <Row>
                <Col>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Item 1</Accordion.Header>
                            <Accordion.Body>
                                Aute adipisicing exercitation mollit exercitation laborum excepteur velit ea labore sint quis tempor. Et eu cupidatat mollit nisi consectetur laboris ullamco incididunt ipsum duis. Fugiat deserunt excepteur laboris tempor ex culpa consectetur ea reprehenderit minim.
                                Voluptate amet sint laborum dolore Lorem irure labore duis laborum est. Ad tempor cupidatat est laborum voluptate aliqua anim nisi qui. Sit laborum id excepteur ad nisi aute esse. Exercitation ea aute enim est do eu incididunt ad tempor. Tempor irure voluptate amet labore duis proident elit ea pariatur minim in. Enim est minim proident id in laboris exercitation fugiat quis incididunt irure non aute.
                            </Accordion.Body>
                        </Accordion.Item>

                         <Accordion.Item eventKey="1">
                            <Accordion.Header>Item 2</Accordion.Header>
                            <Accordion.Body>
                                Aute adipisicing exercitation mollit exercitation laborum excepteur velit ea labore sint quis tempor. Et eu cupidatat mollit nisi consectetur laboris ullamco incididunt ipsum duis. Fugiat deserunt excepteur laboris tempor ex culpa consectetur ea reprehenderit minim.
                                Voluptate amet sint laborum dolore Lorem irure labore duis laborum est. Ad tempor cupidatat est laborum voluptate aliqua anim nisi qui. Sit laborum id excepteur ad nisi aute esse. Exercitation ea aute enim est do eu incididunt ad tempor. Tempor irure voluptate amet labore duis proident elit ea pariatur minim in. Enim est minim proident id in laboris exercitation fugiat quis incididunt irure non aute.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Acc;