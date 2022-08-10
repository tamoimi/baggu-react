
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Navbar, Container, Nav,} from 'react-bootstrap';
import {Routes, Route, Link, useNavigate,} from 
'react-router-dom';
import Main from './pages/Main';
import Sub from './pages/Sub';
import Cart from './pages/Cart';
import Login from './pages/Login';



function App() {

  const navigate = useNavigate()
  return (
    <div>
      
    <Navbar className='nav_bar'fixed="top">
        <Container>
          <Navbar.Brand className='logo' onClick={()=>{navigate('/')}}><img src='/images/logo.png' alt='logo' width='120px'/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/sub')}}>Bag</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/login')}}>Login</Nav.Link>
          </Nav>
        </Container>
    </Navbar>

    <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/sub' element={<Sub />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/detail/:id' element={<Login />}/>
    </Routes>

    <footer className='footer_wrap'>
      <div className='footer'>
      <div className='f_box01'><img src='/images/logo.png' alt='logo_img' width="140px"/></div>
      <div className='f_box02'>
          <Link to='#'>회사 소개</Link>
          <Link to='#'>이용 약관</Link>
          <Link to='#'>개인정보처리방침</Link>
          <Link to='#'>이용 안내</Link>
      </div>
      <div className='f_box03'>
          <Link to='#'>공지사항</Link>
          <Link to='#'>REVIEW</Link>
          <Link to='#'>EVENT</Link>
          <Link to='#'>ABOUT US</Link>
      </div>
      <div className='f_box04'>
          <p>CONTACT : 1588-8564</p>
          <span>평일 : 09:00 - 18:00 (점심시간 12:00 - 13:00)</span>{'\n'}
          <span>고객센터 운영시간에 순차적으로 답변드리겠습니다.</span>{'\n'}
          <span>토요일, 일요일, 공휴일 휴무</span>{'\n'}
          <span>통화량이 많을때는 문의 게시판으로 문의주세요.</span>
      </div>
      <div className='f_box05'>
          <Link to='#'><p className='p_box'>문의 게시판</p></Link>
          <Link to='#'><p className='p_box'>자주 묻는 질문</p></Link>
      </div>
      </div>
    </footer>


      


    </div>
  );
}

export default App;
