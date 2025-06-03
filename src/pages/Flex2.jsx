import {Container, Row, Col} from "react-bootstrap";

const Flex2 = () => {
    return(
        <>
        <Container fluid>
            <Row>
                <Col md={4}>
                    <h3>Align-items-start</h3>
                    <div className="d-flex align-items-start bg-light" style={{height:"150px"}}>
                        <div className="p-2 border">학원이 Fun Fun 해서</div>
                        <div className="p-2 border">Apple도 안하고</div>
                        <div className="p-2 border">내가 Sorry</div>
                    </div>
                </Col>
                <Col md={4}>
                    <h3>Align-items-center</h3>
                    <div className="d-flex align-items-center bg-light" style={{height:"150px"}}>
                        <div className="p-2 border">학원이 Fun Fun 해서</div>
                        <div className="p-2 border">Apple도 안하고</div>
                        <div className="p-2 border">내가 Sorry</div>
                    </div>
                </Col>
                <Col md={4}>
                    <h3>Align-items-end</h3>
                    <div className="d-flex align-items-end bg-light" style={{height:"150px"}}>
                        <div className="p-2 border">학원이 Fun Fun 해서</div>
                        <div className="p-2 border">Apple도 안하고</div>
                        <div className="p-2 border">내가 Sorry</div>
                    </div>
                </Col>
            </Row>

            <hr className="my-5"/>

            <Row className="justify-content-center">
                <Col md={4}>
                    <h3>Align-items-baseline</h3>
                    <code>baseline은 start랑 똑같은 기능</code>
                    <div className="d-flex align-items-baseline bg-light" style={{height:"150px"}}>
                        <div className="p-2 border">학원이 Fun Fun 해서</div>
                        <div className="p-2 border">Apple도 안하고</div>
                        <div className="p-2 border">내가 Sorry</div>
                    </div>
                </Col>
                <Col md={4}>
                    <h3>Align-items-stretch</h3>
                    <div className="d-flex align-items-stretch bg-light" style={{height:"150px"}}>
                        <div className="p-2 border">학원이 Fun Fun 해서</div>
                        <div className="p-2 border">Apple도 안하고</div>
                        <div className="p-2 border">내가 Sorry</div>
                    </div>
                </Col>
                <Col md={4}>
                    <h3>Align-self-baseline</h3>
                    <code>baseline은 start랑 똑같은 기능</code>
                    <div className="d-flex bg-light" style={{height:"150px"}}>
                        <div className="p-2 border align-self-baseline ">학원이 Fun Fun 해서</div>
                        <div className="p-2 border">Apple도 안하고</div>
                        <div className="p-2 border">내가 Sorry</div>
                    </div>
                </Col>
            </Row>

            <hr className="my-5"/>

            <Row>
                <Col md={4}>
                    <h3>Align-self-start</h3>
                    <div className="d-flex bg-light" style={{height:"150px"}}>
                        <div className="p-2 border">학원이 Fun Fun 해서</div>
                        <div className="p-2 border">Apple도 안하고</div>
                        <div className="p-2 border align-self-start">내가 Sorry</div>
                    </div>
                </Col>
                <Col md={4}>
                    <h3>Align-self-center</h3>
                    <div className="d-flex bg-light" style={{height:"150px"}}>
                        <div className="p-2 border  align-self-center">학원이 Fun Fun 해서</div>
                        <div className="p-2 border">Apple도 안하고</div>
                        <div className="p-2 border">내가 Sorry</div>
                    </div>
                </Col>
                <Col md={4}>
                    <h3>Align-self-end</h3>
                    <div className="d-flex bg-light" style={{height:"150px"}}>
                        <div className="p-2 border">학원이 Fun Fun 해서</div>
                        <div className="p-2 border align-self-end">Apple도 안하고</div>
                        <div className="p-2 border">내가 Sorry</div>
                    </div>
                </Col>
            </Row>

            <hr className="my-5"/>

            <Row>
                <Col md={12}>
                    <h3>Align-self-stretch</h3>
                    <div className="d-flex bg-light" style={{height:"150px"}}>
                        <div className="p-2 border align-self-stretch">학원이 Fun Fun 해서</div>
                        <div className="p-2 border">Apple도 안하고</div>
                        <div className="p-2 border">내가 Sorry</div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col md={4}>
                    <h3></h3>
                </Col>
                <Col md={4}>
                    <h3></h3>
                </Col>
                <Col md={4}>
                    <h3></h3>
                </Col>
            </Row>

            <hr className="my-5"/>
            
            <Row>
                <Col md={4}>
                    <h3>Auto Margins</h3>
                    <p>
                        - ms-auto : 항목을 오른쪽으로 밀기 (배열 첫번째에 넣기)<br/>
                        - me-auto : 항목을 왼쪽으로 밀기 (배열 마지막에 넣기)<br/>
                    </p>
                    <div className="d-flex bg-secondary mb-3">
                        <div className="p-2 ms-auto bg-info">One</div>
                        <div className="p-2 bg-warning">Two</div>
                        <div className="p-2 bg-primary">Three</div>
                    </div>

                     <div className="d-flex bg-secondary mb-3">
                        <div className="p-2 bg-info">One</div>
                        <div className="p-2 bg-warning">Two</div>
                        <div className="p-2 me-auto bg-primary">Three</div>
                    </div>
                </Col>

                <Col md={4}>
                    <h3>Flex-wrap</h3>
                    <p><code>.flex-wrap: 내림차순</code></p>
                    <div class="d-flex flex-wrap bg-light">
                        <div class="p-2 border">Flex item 1</div>
                        <div class="p-2 border">Flex item 2</div>
                        <div class="p-2 border">Flex item 3</div>
                        <div class="p-2 border">Flex item 4</div>
                        <div class="p-2 border">Flex item 5</div>
                        <div class="p-2 border">Flex item 6</div>
                        <div class="p-2 border">Flex item 7</div>
                        <div class="p-2 border">Flex item 8</div>
                        <div class="p-2 border">Flex item 9</div>
                        <div class="p-2 border">Flex item 10</div>
                        <div class="p-2 border">Flex item 11</div>
                        <div class="p-2 border">Flex item 12</div>
                        <div class="p-2 border">Flex item 13 </div>
                        <div class="p-2 border">Flex item 14</div>
                        <div class="p-2 border">Flex item 15</div>
                        <div class="p-2 border">Flex item 16</div>
                        <div class="p-2 border">Flex item 17</div>
                        <div class="p-2 border">Flex item 18</div>
                        <div class="p-2 border">Flex item 19</div>
                        <div class="p-2 border">Flex item 20</div>
                        <div class="p-2 border">Flex item 21</div>
                        <div class="p-2 border">Flex item 22</div>
                        <div class="p-2 border">Flex item 23</div>
                        <div class="p-2 border">Flex item 24</div>
                        <div class="p-2 border">Flex item 25</div>
                    </div>
                    <br></br>
                </Col>

                <Col md={4}>
                    <h3>Flex-wrap-reverse</h3>
                    <p><code>.flex-wrap-reverse: 오름차순</code></p>
                    <div class="d-flex flex-wrap-reverse bg-light">
                      <div class="p-2 border">Flex item 1</div>
                      <div class="p-2 border">Flex item 2</div>
                      <div class="p-2 border">Flex item 3</div>
                      <div class="p-2 border">Flex item 4</div>
                      <div class="p-2 border">Flex item 5</div>
                      <div class="p-2 border">Flex item 6</div>
                      <div class="p-2 border">Flex item 7</div>
                      <div class="p-2 border">Flex item 8</div>
                      <div class="p-2 border">Flex item 9</div>
                      <div class="p-2 border">Flex item 10</div>
                      <div class="p-2 border">Flex item 11</div>
                      <div class="p-2 border">Flex item 12</div>
                      <div class="p-2 border">Flex item 13 </div>
                      <div class="p-2 border">Flex item 14</div>
                      <div class="p-2 border">Flex item 15</div>
                      <div class="p-2 border">Flex item 16</div>
                      <div class="p-2 border">Flex item 17</div>
                      <div class="p-2 border">Flex item 18</div>
                      <div class="p-2 border">Flex item 19</div>
                      <div class="p-2 border">Flex item 20</div>
                      <div class="p-2 border">Flex item 21</div>
                      <div class="p-2 border">Flex item 22</div>
                      <div class="p-2 border">Flex item 23</div>
                      <div class="p-2 border">Flex item 24</div>
                      <div class="p-2 border">Flex item 25</div>
                    </div>
                    <br></br>
                </Col>
            </Row>

            <hr className="my-5"/>

            <Row>
                <Col md={12}>
                    <h3>Nowarp</h3>
                    <p><code>.flex-nowrap: 감싸기 x</code></p>
                    <div class="d-flex flex-nowrap bg-light">
                      <div class="p-2 border">Flex item 1</div>
                      <div class="p-2 border">Flex item 2</div>
                      <div class="p-2 border">Flex item 3</div>
                      <div class="p-2 border">Flex item 4</div>
                      <div class="p-2 border">Flex item 5</div>
                      <div class="p-2 border">Flex item 6</div>
                      <div class="p-2 border">Flex item 7</div>
                      <div class="p-2 border">Flex item 8</div>
                      <div class="p-2 border">Flex item 9</div>
                      <div class="p-2 border">Flex item 10</div>
                      <div class="p-2 border">Flex item 11</div>
                      <div class="p-2 border">Flex item 12</div>
                      <div class="p-2 border">Flex item 13 </div>
                      <div class="p-2 border">Flex item 14</div>
                      <div class="p-2 border">Flex item 15</div>
                      <div class="p-2 border">Flex item 16</div>
                      <div class="p-2 border">Flex item 17</div>
                      <div class="p-2 border">Flex item 18</div>
                      <div class="p-2 border">Flex item 19</div>
                      <div class="p-2 border">Flex item 20</div>
                      <div class="p-2 border">Flex item 21</div>
                      <div class="p-2 border">Flex item 22</div>
                      <div class="p-2 border">Flex item 23</div>
                      <div class="p-2 border">Flex item 24</div>
                      <div class="p-2 border">Flex item 25</div>
                      <div class="p-2 border">Flex item 26</div>
                      <div class="p-2 border">Flex item 27</div>
                      <div class="p-2 border">Flex item 28</div>
                      <div class="p-2 border">Flex item 29</div>
                      <div class="p-2 border">Flex item 30</div>
                      <div class="p-2 border">Flex item 31</div>
                      <div class="p-2 border">Flex item 32</div>
                      <div class="p-2 border">Flex item 33</div>
                      <div class="p-2 border">Flex item 34</div>
                      <div class="p-2 border">Flex item 35</div>
                    </div>
                    <br></br>
                </Col>
            </Row>

            <hr className="my-5"/>

            <Row>
                <Col md={4}>
                    <h3>Align-content-start</h3>
                    <div class="d-flex flex-wrap align-content-start bg-light" style={{height:"300px"}}>
                        <div class="p-2 border">Flex item 1</div>
                        <div class="p-2 border">Flex item 2</div>
                        <div class="p-2 border">Flex item 3</div>
                        <div class="p-2 border">Flex item 4</div>
                        <div class="p-2 border">Flex item 5</div>
                        <div class="p-2 border">Flex item 6</div>
                        <div class="p-2 border">Flex item 7</div>
                        <div class="p-2 border">Flex item 8</div>
                        <div class="p-2 border">Flex item 9</div>
                        <div class="p-2 border">Flex item 10</div>
                        <div class="p-2 border">Flex item 11</div>
                        <div class="p-2 border">Flex item 12</div>
                        <div class="p-2 border">Flex item 13 </div>
                        <div class="p-2 border">Flex item 14</div>
                        <div class="p-2 border">Flex item 15</div>
                        <div class="p-2 border">Flex item 16</div>
                        <div class="p-2 border">Flex item 17</div>
                        <div class="p-2 border">Flex item 18</div>
                        <div class="p-2 border">Flex item 19</div>
                        <div class="p-2 border">Flex item 20</div>
                        <div class="p-2 border">Flex item 21</div>
                        <div class="p-2 border">Flex item 22</div>
                        <div class="p-2 border">Flex item 23</div>
                        <div class="p-2 border">Flex item 24</div>
                        <div class="p-2 border">Flex item 25</div>
                    </div>
                    <br></br>
                </Col>
                <Col md={4}>
                    <h3>Align-content-center</h3>
                    <div class="d-flex flex-wrap align-content-center bg-light" style={{height:"300px"}}>
                        <div class="p-2 border">Flex item 1</div>
                        <div class="p-2 border">Flex item 2</div>
                        <div class="p-2 border">Flex item 3</div>
                        <div class="p-2 border">Flex item 4</div>
                        <div class="p-2 border">Flex item 5</div>
                        <div class="p-2 border">Flex item 6</div>
                        <div class="p-2 border">Flex item 7</div>
                        <div class="p-2 border">Flex item 8</div>
                        <div class="p-2 border">Flex item 9</div>
                        <div class="p-2 border">Flex item 10</div>
                        <div class="p-2 border">Flex item 11</div>
                        <div class="p-2 border">Flex item 12</div>
                        <div class="p-2 border">Flex item 13 </div>
                        <div class="p-2 border">Flex item 14</div>
                        <div class="p-2 border">Flex item 15</div>
                        <div class="p-2 border">Flex item 16</div>
                        <div class="p-2 border">Flex item 17</div>
                        <div class="p-2 border">Flex item 18</div>
                        <div class="p-2 border">Flex item 19</div>
                        <div class="p-2 border">Flex item 20</div>
                        <div class="p-2 border">Flex item 21</div>
                        <div class="p-2 border">Flex item 22</div>
                        <div class="p-2 border">Flex item 23</div>
                        <div class="p-2 border">Flex item 24</div>
                        <div class="p-2 border">Flex item 25</div>
                    </div>
                    <br></br>
                </Col>
                <Col md={4}>
                    <h3>Align-content-end</h3>
                    <div class="d-flex flex-wrap align-content-end bg-light" style={{height:"300px"}}>
                        <div class="p-2 border">Flex item 1</div>
                        <div class="p-2 border">Flex item 2</div>
                        <div class="p-2 border">Flex item 3</div>
                        <div class="p-2 border">Flex item 4</div>
                        <div class="p-2 border">Flex item 5</div>
                        <div class="p-2 border">Flex item 6</div>
                        <div class="p-2 border">Flex item 7</div>
                        <div class="p-2 border">Flex item 8</div>
                        <div class="p-2 border">Flex item 9</div>
                        <div class="p-2 border">Flex item 10</div>
                        <div class="p-2 border">Flex item 11</div>
                        <div class="p-2 border">Flex item 12</div>
                        <div class="p-2 border">Flex item 13 </div>
                        <div class="p-2 border">Flex item 14</div>
                        <div class="p-2 border">Flex item 15</div>
                        <div class="p-2 border">Flex item 16</div>
                        <div class="p-2 border">Flex item 17</div>
                        <div class="p-2 border">Flex item 18</div>
                        <div class="p-2 border">Flex item 19</div>
                        <div class="p-2 border">Flex item 20</div>
                        <div class="p-2 border">Flex item 21</div>
                        <div class="p-2 border">Flex item 22</div>
                        <div class="p-2 border">Flex item 23</div>
                        <div class="p-2 border">Flex item 24</div>
                        <div class="p-2 border">Flex item 25</div>
                    </div>
                    <br></br>
                </Col>
            </Row>

            <hr className="my-5"/>

            <Row className="justify-content-center">
                <Col md={4}>
                    <h3>Align-content-around</h3>
                    <div class="d-flex flex-wrap align-content-around bg-light" style={{height:"300px"}}>
                        <div class="p-2 border">Flex item 1</div>
                        <div class="p-2 border">Flex item 2</div>
                        <div class="p-2 border">Flex item 3</div>
                        <div class="p-2 border">Flex item 4</div>
                        <div class="p-2 border">Flex item 5</div>
                        <div class="p-2 border">Flex item 6</div>
                        <div class="p-2 border">Flex item 7</div>
                        <div class="p-2 border">Flex item 8</div>
                        <div class="p-2 border">Flex item 9</div>
                        <div class="p-2 border">Flex item 10</div>
                        <div class="p-2 border">Flex item 11</div>
                        <div class="p-2 border">Flex item 12</div>
                        <div class="p-2 border">Flex item 13 </div>
                        <div class="p-2 border">Flex item 14</div>
                        <div class="p-2 border">Flex item 15</div>
                        <div class="p-2 border">Flex item 16</div>
                        <div class="p-2 border">Flex item 17</div>
                        <div class="p-2 border">Flex item 18</div>
                        <div class="p-2 border">Flex item 19</div>
                        <div class="p-2 border">Flex item 20</div>
                        <div class="p-2 border">Flex item 21</div>
                        <div class="p-2 border">Flex item 22</div>
                        <div class="p-2 border">Flex item 23</div>
                        <div class="p-2 border">Flex item 24</div>
                        <div class="p-2 border">Flex item 25</div>
                    </div>
                    <br></br>
                </Col>
                <Col md={4}>
                    <h3>Align-content-stretch</h3>
                    <div class="d-flex flex-wrap align-content-stretch bg-light" style={{height:"300px"}}>
                        <div class="p-2 border">Flex item 1</div>
                        <div class="p-2 border">Flex item 2</div>
                        <div class="p-2 border">Flex item 3</div>
                        <div class="p-2 border">Flex item 4</div>
                        <div class="p-2 border">Flex item 5</div>
                        <div class="p-2 border">Flex item 6</div>
                        <div class="p-2 border">Flex item 7</div>
                        <div class="p-2 border">Flex item 8</div>
                        <div class="p-2 border">Flex item 9</div>
                        <div class="p-2 border">Flex item 10</div>
                        <div class="p-2 border">Flex item 11</div>
                        <div class="p-2 border">Flex item 12</div>
                        <div class="p-2 border">Flex item 13 </div>
                        <div class="p-2 border">Flex item 14</div>
                        <div class="p-2 border">Flex item 15</div>
                        <div class="p-2 border">Flex item 16</div>
                        <div class="p-2 border">Flex item 17</div>
                        <div class="p-2 border">Flex item 18</div>
                        <div class="p-2 border">Flex item 19</div>
                        <div class="p-2 border">Flex item 20</div>
                        <div class="p-2 border">Flex item 21</div>
                        <div class="p-2 border">Flex item 22</div>
                        <div class="p-2 border">Flex item 23</div>
                        <div class="p-2 border">Flex item 24</div>
                        <div class="p-2 border">Flex item 25</div>
                    </div>
                    <br></br>
                </Col>
            </Row>

        </Container>
        </>
    );
}

export default Flex2;