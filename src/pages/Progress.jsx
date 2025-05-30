import {Container, Row, Col} from 'react-bootstrap';

const  Progress = () => {
    return(
        <>
        <Container>
            <Row>
                <Col md={6}>
                <h1>Basic</h1>
                <div className="progress">
                <div className="progress-bar" style={{width:"70%"}}>70%</div>
                </div>
                </Col>
                
                <Col md={6}>
                <h1>Striped</h1>
                <div className="progress">
                <div className="progress-bar bg-danger progress-bar-striped" style={{width:"70%"}}>70%</div>
                </div>
                </Col>
                
                <Col md={6}>
                <h1>Animated</h1>
                <div className="progress">
                <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated" 
                style={{width:"70%"}}>70%</div>
                </div>
                </Col>
                
                <Col md={6}>
                <h1>Multiple</h1>
                <div className="progress">
                <div className="progress-bar bg-success" 
                style={{width:"40%"}}>40%</div>
                <div className="progress-bar bg-light text-dark" 
                style={{width:"10%"}}>10%</div>
                <div className="progress-bar bg-dark" 
                style={{width:"20%"}}>20%</div>
                <div className="progress-bar bg-secondary" 
                style={{width:"30%"}}>30%</div>
                </div>
                </Col>
            </Row>
            <hr></hr>
            <Row>
                <Col md={3}>
                <h1>Basic</h1>
                <div className="spinner-border"></div>
                </Col>
                
                <Col md={3}>
                <h1>Color</h1>
                <div class="spinner-border text-muted"></div>
                <div class="spinner-border text-primary"></div>
                <div class="spinner-border text-success"></div>
                <div class="spinner-border text-info"></div>
                <div class="spinner-border text-warning"></div>
                <div class="spinner-border text-danger"></div>
                <div class="spinner-border text-secondary"></div>
                <div class="spinner-border text-dark"></div>
                <div class="spinner-border text-light"></div>
                </Col>
                
                <Col md={3}>
                <h1>Growing</h1>
                <div className="spinner-grow text-muted bg-danger"></div>
                 <div className="spinner-grow text-muted spinner-grow-sm bg-warning"></div>
                </Col>
                
                <Col md={3}>
                <h1>Spinner Button</h1>
                <button className='btn btn-success mb-1'>
                    <span className='spinner-border spinner-border-sm'></span>btn
                </button><br/>
                <button className='btn btn-danger'>
                    <span className='spinner-border spinner-border-sm'></span>피젯스피너
                </button>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Progress;