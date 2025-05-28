import {Container, Row, Col} from "react-bootstrap";

const Typo = () => {
    return(
        <>
        <Container>
            <Row>
                <Col lg={3} className="border">
                <h1>abbr(약어)</h1>
                <p>약어 마우스를 올리면 물음표가 있는 커서모양을 지정</p>
                <section>the <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</section>
                </Col>
                <Col lg={3} className="border">
                <h1>blockquote</h1>
                <p>인용문종류: 짧은이용(quo)/ 긴인용(blockquote)</p>
                <blockquote className="blcokquote">
                    <p>존시나가 현재는 악연인 스토리라인...</p>
                    <footer className="blockquote-footer">From WWE</footer>
                </blockquote>
                </Col>
                <Col lg={3} className="border">
                <h1>그 외</h1>
                <p>
                    .lead : 글씨들 사이에서 크기변화를 주어 돋보이게<br/>
                    .text-start : 왼쪽 배치 <br/>
                    .text-break : 글이 너무 길면 알아서 끊어서 다음 줄로 오게함 <br/>
                    .text-center : 가운데 배치<br/>
                    .text-decoration-none : a태그에서 밑줄 생기는 거 방지<br/>
                    .text-end : 오른쪽 배치
                </p>
                </Col>
                <Col lg={3} className="border">
                <h1>그 외</h1>
                <p> 
                    .text-nowrap : 감싸지 않음<br/>
                    .text-lowercase : 소문자<br/>
                    .text-uppercase : 대문자<br/>
                    .text-capitalize : 앞글자만 대문자<br/>
                    .initialism : 좀 더 폰트를 작게<br/>
                    .list-unstyle : 목록에 여백을 제거하는데 단 클래스 바로 아래부분만<br/>
                    .list-inline : ul, ol 이런 태그에 li를 block이 아니라 inline으로
                </p>
                </Col>
            </Row>
            <Row>
                <Col lg={3} className="border">
                <h1 className="mt-5 mb-3">
                    TypoGraphy
                </h1>
                <div className="d-flex">
                <p className="h1">h1</p>
                <p className="h2">h2</p>
                <p className="h3">h3</p>
                <p className="h4">h4</p>
                <p className="h5">h5</p>
                <p className="h6">h6</p>
                </div>
                </Col>

                <Col lg={3} className="border">
                <h1 className="mt-5 mb-3">
                    h시리즈보다 좀 더 큰 글씨를 사용할때는 .display
                </h1>
                <div className="">
                    <h1 className="display-1">Display 1</h1> {/* 72px정도 글씨 */}
                    <h1 className="display-2">Display 2</h1>
                    <h1 className="display-3">Display 3</h1>
                    <h1 className="display-4">Display 4</h1>
                    <h1 className="display-5">Display 5</h1>
                    <h1 className="display-6">Display 6</h1>
                </div>
                </Col>

                <Col lg={3} className="border">
                <h1 className="mt-5 mb-3">키보드</h1>
                <p>키보드태그 <kbd>ctrl + p</kbd></p>
                </Col>

                <Col lg={3} className="border">
                <h1 className="mt-5 mb-3">정의리스트</h1>
                <dl>
                    <dt>COFFEE</dt>
                    <dd>Americano</dd>
                </dl>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default Typo;