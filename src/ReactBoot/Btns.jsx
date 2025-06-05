import {Container, Row, Col, Button, ButtonGroup} from 'react-bootstrap';

const Btns = () => {
    return(
        <>
        <Container>
            <Row>
                <h3>Button color code</h3>
                <Col sm={6} className='mt-3'>
                <Button variant='primary mb-3'>primary</Button><br/>
                <Button variant='secondary mb-3'>secondary</Button><br/>
                <Button variant='success mb-3'>success</Button><br/>
                <Button variant='warning mb-3'>warning</Button><br/>
                <Button variant='danger mb-3'>danger</Button><br/>
                <Button variant='info mb-3'>info</Button><br/>
                <Button variant='light mb-3'>light</Button><br/>
                <Button variant='dark mb-3'>dark</Button><br/>
                <Button variant='link mb-3'>link</Button><br/>
                </Col>

                <Col sm={6}>
                <Button variant='outline-primary mb-3'>primary</Button><br/>
                <Button variant='outline-secondary mb-3'>secondary</Button><br/>
                <Button variant='outline-success mb-3'>success</Button><br/>
                <Button variant='outline-warning mb-3'>warning</Button><br/>
                <Button variant='outline-danger mb-3'>danger</Button><br/>
                <Button variant='outline-info mb-3'>info</Button><br/>
                <Button variant='outline-light text-dark mb-3'>light</Button><br/>
                <Button variant='outline-dark mb-3'>dark</Button><br/>
                </Col>

<hr className='my-4'/>

                <Col sm={4}>
                    <h3 className='mb-3'>Button Group</h3>
                    <ButtonGroup>
                        <Button variant='outline-primary' size='sm'>size='sm'</Button>
                        <Button variant='outline-success'>보통</Button>
                        <Button variant='outline-danger' size='lg'>size='lg'</Button>
                    </ButtonGroup>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Btns;