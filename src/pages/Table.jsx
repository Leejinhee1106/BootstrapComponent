import { Container, Row, Col, Table } from 'react-bootstrap';

const TableRef = () => {
    return(
        <>
        <Container>
            <Row>
                <Col md={3} className='border'>
                    <h1 className='my-3'>Basic</h1>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Today</th>
                                <th>Tomorrow</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>목요일</td>
                                <td>금요일!!!!</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>

                <Col md={3} className='border'>
                    <h1 className='my-3'>Striped</h1>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Today</th>
                                <th>Tomorrow</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>목요일</td>
                                <td>금요일!!!!</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>

                <Col md={3} className='border'>
                    <h1 className='my-3'>Bordered</h1>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Today</th>
                                <th>Tomorrow</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>목요일</td>
                                <td>금요일!!!!</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>

                <Col md={3} className='border'>
                    <h1 className='my-3'>Hover</h1>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th>Today</th>
                                <th>Tomorrow</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>목요일</td>
                                <td>금요일!!!!</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>

            <Row>
                <Col md={3} className='border'>
                    <h1 className='my-3'>Dark</h1>
                    <table className='table table-dark'>
                        <thead>
                            <tr>
                                <th>Today</th>
                                <th>Tomorrow</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>목요일</td>
                                <td>금요일!!!!</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
                <Col md={3} className='border'>
                    <h1 className='my-3'>Dark Striped</h1>
                    <table className='table table-dark table-striped'>
                        <thead>
                            <tr>
                                <th>Today</th>
                                <th>Tomorrow</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>목요일</td>
                                <td>금요일!!!!</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
                <Col md={3} className='border'>
                    <h1 className='my-3'>Hoverabal Dark</h1>
                    <table className='table table-dark table-hover'>
                        <thead>
                            <tr>
                                <th>Today</th>
                                <th>Tomorrow</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>목요일</td>
                                <td>금요일!!!!</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
                <Col md={3} className='border'>
                    <h1 className='my-3'>Borderless</h1>
                    <table className='table table-dark table-borderless'>
                        <thead>
                            <tr>
                                <th>Today</th>
                                <th>Tomorrow</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>목요일</td>
                                <td>금요일!!!!</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <h1 className='my-3'>그 외 class</h1>
                    <p className='text-secondary'>
                        - table-primary : <br/>
                        - table-success : <br/>
                        - table-danger : <br/>
                        - table-info : <br/>
                        - table-warning : <br/>
                        - table-active : <br/>
                        - table-secondary : <br/>
                        - table-light : <br/>
                        - table-dark :
                    </p>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default TableRef;