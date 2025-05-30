import {Container, Row, Col} from 'react-bootstrap';

const Cards = () => {
    return(
        <>
        <Container>
            <Row>
                <Col sm={6}>
                <h1>Basic</h1>
                <div className="card">
                    <div className="card-body bg-danger text-white rounded">Basic Card</div>
                </div>
                </Col>

                <Col sm={6}>
                <h1 className='h3'>Header&Footer</h1>
                <div className="card">
                    <div className="card-header bg-info">Header</div>
                    <div className="card-body bg-success">Body</div>
                    <div className="card-footer bg-warning">Footer</div>
                </div>
                </Col>
                
                <Col sm={6}>
                <h3>TitleText & Links</h3>
                <div className="card bg-secondary text-white">
                    <div className="card-body">
                        <h4 className="card-title">Card Title</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet.</p>
                            <a href="#" className='card-link text-white'>Card link</a>
                            <a href="#" className='card-link text-white'>Card link</a>
                    </div>
                </div>
                </Col>
                
                <Col sm={6}>
                <h3>Card Image</h3>
                <div className="card">
                    <img src="../img/person.png" alt="" className='card-img-top'/>
                    <div className="card-body">
                        <h4 className='card-title'>Hi, My name is 000</h4>
                        <p className='card-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo, esse.</p>
                        <a href="#" className='btn btn-outline-primary'>pick me up</a>
                    </div>
                    <img src="../img/person2.png" alt="" className='card-img-bottom'/>
                </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Cards;