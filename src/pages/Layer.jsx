import {Container, Row, Col} from 'react-bootstrap';

const Layer = () => {
    return(
        <>
        <Container>
            <Row>
                <Col md={3}>
                <h3>Basic</h3>
                <button className='btn btn-primary' 
                data-bs-toggle='modal'
                data-bs-target='#one'>
                    Modal Open
                </button>

                <div className="modal" id='one'>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className='modal-title'>TITLE</h4>
                                <button className='btn-close'
                                data-bs-dismiss='modal'>
                                </button>
                            </div>

                            <div className="modal-body">
                            <h4>죽어도 안닫아</h4>
                            </div>

                            <div className="modal-footer">
                                <button className='btn btn-danger'
                                data-bs-dismiss='modal'>
                                    CLOSE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </Col>

                <Col md={3}>
                <h3>Add Animation</h3>
                <button
                className='btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#any'>Animation Modal</button>

                <div className="modal fade" id='any'>
                    <div className="modal-dialog">
                       <div className="modal-content">
                            <div className="modal-header">
                                <h4 className='modal-title'>TITLE</h4>
                                <button className='btn-close'
                                data-bs-dismiss='modal'>
                                </button>
                            </div>

                            <div className="modal-body">
                            <h4>죽어도 안닫아</h4>
                            </div>

                            <div className="modal-footer">
                                <button className='btn btn-danger'
                                data-bs-dismiss='modal'>
                                    CLOSE
                                </button>
                            </div>
                        </div> 
                    </div>
                </div>
                </Col>

                <Col md={3}>
                <h3>Full Screen</h3>
                <button
                className='btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#full'>Fullscreen Modal</button>

                <div className="modal fade" id='full'>
                    <div className="modal-dialog modal-fullscreen">
                       <div className="modal-content">
                            <div className="modal-header">
                                <h4 className='modal-title'>TITLE</h4>
                                <button className='btn-close'
                                data-bs-dismiss='modal'>
                                </button>
                            </div>

                            <div className="modal-body">
                            <h4>쥬글게</h4>
                            </div>

                            <div className="modal-footer">
                                <button className='btn btn-danger'
                                data-bs-dismiss='modal'>
                                    CLOSE
                                </button>
                            </div>
                        </div> 
                    </div>
                </div>
                </Col>

                <Col md={3}>
                <h3>Centered Modal</h3>
                <button
                className='btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#center'>Center Modal</button>

                <div className="modal fade" id='center'>
                    <div className="modal-dialog modal-dialog-centered">
                       <div className="modal-content">
                            <div className="modal-header">
                                <h4 className='modal-title'>TITLE</h4>
                                <button className='btn-close'
                                data-bs-dismiss='modal'>
                                </button>
                            </div>

                            <div className="modal-body">
                            <h4>죽어도 안닫아</h4>
                            </div>

                            <div className="modal-footer">
                                <button className='btn btn-danger'
                                data-bs-dismiss='modal'>
                                    CLOSE
                                </button>
                            </div>
                        </div> 
                    </div>
                </div>
                </Col>
            </Row>
            
            <Row className='mt-5'>
                <Col md={12}>
                <h3>Scroll Modal</h3>
                <button
                className='btn btn-primary'
                data-bs-toggle='modal'
                data-bs-target='#scroll'>Scroll Modal</button>

                <div className="modal fade" id='scroll'>
                    <div className="modal-dialog modal-dialog-scrollable">
                       <div className="modal-content">
                            <div className="modal-header">
                                <h4 className='modal-title'>TITLE</h4>
                                <button className='btn-close'
                                data-bs-dismiss='modal'>
                                </button>
                            </div>

                            <div className="modal-body">
                            <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis corporis natus, quaerat eaque itaque voluptatem, molestias, quos eligendi fuga nam placeat laboriosam quis maxime laudantium deleniti id quas. Rerum vero perspiciatis a voluptate explicabo perferendis rem, modi porro libero error, odio laudantium tenetur, pariatur dolorem. Accusantium labore magni aliquid excepturi harum nam aperiam quasi voluptatum officia laudantium, blanditiis earum reprehenderit consequatur voluptatibus amet distinctio, iste quia temporibus sapiente fuga, obcaecati tempora similique vitae. Repellat recusandae amet, soluta tenetur necessitatibus earum exercitationem delectus quidem dolore consectetur! Quod porro aliquid eum quas ullam est qui laborum, facere velit. Quo est fugit nisi ea nihil tempore numquam deserunt excepturi eius, sunt assumenda nostrum recusandae debitis! Accusantium at, sint rem numquam cupiditate repellat, consequatur ipsa in ex sequi qui alias nesciunt consequuntur animi! Dolorem, tenetur dolorum. Vitae veritatis debitis atque reprehenderit libero quod molestias vel excepturi assumenda iusto at quos, tempore aliquid temporibus nostrum. Nemo distinctio tenetur quas accusamus sed, ipsam in ad mollitia quasi, sunt tempora debitis ratione error, consequuntur sequi? Doloremque aspernatur voluptatibus veniam maiores nulla quod expedita cum repellendus ex harum, sequi corrupti qui suscipit nam non iste? Tempora voluptates earum beatae sit dolorum illum, esse porro doloremque minima excepturi inventore?</h4>
                            </div>

                            <div className="modal-footer">
                                <button className='btn btn-danger'
                                data-bs-dismiss='modal'>
                                    CLOSE
                                </button>
                            </div>
                        </div> 
                    </div>
                </div>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Layer;