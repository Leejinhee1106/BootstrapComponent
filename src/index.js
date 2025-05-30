import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; //라우터선언
import 'bootstrap/dist/css/bootstrap.min.css'; //부트스트랩 cdn 선언
//페이지 부르기
import Header from './include/Header';
import Home from './pages/Home';
import Cont from './pages/Cont';
import Typo from './pages/Typo';
import Color from './pages/Color';
import Table from './pages/Table';
import Img from './pages/Img';
import Jumbo from './pages/Jumbo';
import Alerts from './pages/Alerts';
import Btn from './pages/Btn';
import Badges from './pages/Badges';
import Progress from './pages/Progress';
import Cards from './pages/Cards';
import Layer from './pages/Layer';
import ToastM from './pages/ToastM';



export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}> {/* 헤더 */}
          <Route index element={<Home/>}></Route>{/* 바디 */}
          <Route path="container" element={<Cont/>}></Route>{/* 서브페이지 */}
          <Route path="typo" element={<Typo/>}></Route>
          <Route path="color" element={<Color/>}></Route>
          <Route path="table" element={<Table/>}></Route>
          <Route path="img" element={<Img/>}></Route>
          <Route path="jumbo" element={<Jumbo/>}></Route>
          <Route path="alerts" element={<Alerts/>}></Route>
          <Route path="button" element={<Btn/>}></Route> 
          <Route path="badges" element={<Badges/>}></Route>
          <Route path="Progress" element={<Progress/>}></Route>
          <Route path="Cards" element={<Cards/>}></Route>
          <Route path="Layer" element={<Layer/>}></Route>
          <Route path="ToastM" element={<ToastM/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>);
/*위에 이 문법은 react 18ver부터*/