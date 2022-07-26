
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
          <Navbar.Brand className='logo' onClick={()=>{navigate('/')}}><img src='/images/logo.png' width='120px'/></Navbar.Brand>
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
      <div className='f_box01'><img src='/images/logo.png' width="140px"/></div>
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
      </div>
    </footer>


      


    </div>
  );
}

export default App;
