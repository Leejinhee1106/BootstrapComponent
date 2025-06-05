import {Container, Row, Col, Table} from 'react-bootstrap';

const Tb = () => {
    return(
        <>
        <Container>
            <Row>
                <Col>
                    <Table striped bordered hover variant='danger' responsive>
                        <caption style={{display:"none"}}>여행을 떠나요</caption>
                        {/* 
                        <colgroup>
                        <col style={{width:"20%"}}/>
                        <col style={{width:"20%"}}/>
                        <col style={{width:"40%"}}/>
                        <col style={{width:"20%"}}/>
                        </colgroup>
                         */}

                        <thead>
                            <tr>
                                <th>#</th>
                                <th>가</th>
                                <th>나</th>
                                <th>다</th>
                                <th>라</th>
                                <th>마</th>
                                <th>바</th>
                                <th>사</th>
                                <th>아</th>
                                <th>자</th>
                                <th>차</th>
                                <th>카</th>
                                <th>타</th>
                                <th>파</th>
                                <th>히</th>
                                <th>가</th>
                                <th>나</th>
                                <th>다</th>
                                <th>라</th>
                                <th>마</th>
                                <th>바</th>
                                <th>사</th>
                                <th>아</th>
                                <th>자</th>
                                <th>차</th>
                                <th>카</th>
                                <th>타</th>
                                <th>파</th>
                                <th>하</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>존</td>
                                <td>코너</td>
                                <td>사라코노</td>
                                <td>1</td>
                                <td>존</td>
                                <td>코너</td>
                                <td>사라코노</td>
                                <td>1</td>
                                <td>존</td>
                                <td>코너</td>
                                <td>사라코노</td>
                                <td>1</td>
                                <td>존</td>
                                <td>코너</td>
                                <td>1</td>
                                <td>존</td>
                                <td>코너</td>
                                <td>사라코노</td>
                                <td>1</td>
                                <td>존</td>
                                <td>코너</td>
                                <td>사라코노</td>
                                <td>1</td>
                                <td>존</td>
                                <td>코너</td>
                                <td>사라코노</td>
                                <td>1</td>
                                <td>존</td>
                            </tr>
                        </tbody>
                        
                        <tfoot>
                            <tr>
                                <th>가</th>
                                <th>나</th>
                                <th>다</th>
                                <th>라</th>
                                <th>마</th>
                                <th>바</th>
                                <th>사</th>
                                <th>아</th>
                                <th>자</th>
                                <th>차</th>
                                <th>카</th>
                                <th>타</th>
                                <th>파</th>
                                <th>히</th>
                                <th>#</th>
                                <th>가</th>
                                <th>나</th>
                                <th>다</th>
                                <th>라</th>
                                <th>마</th>
                                <th>바</th>
                                <th>사</th>
                                <th>아</th>
                                <th>자</th>
                                <th>차</th>
                                <th>카</th>
                                <th>타</th>
                                <th>파</th>
                                <th>히</th>
                            </tr>
                        </tfoot>
                    </Table>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default Tb;