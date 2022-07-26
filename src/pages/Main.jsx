import React, {useState} from 'react';
import {Tabs, Tab, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import data from '../components/Data';
import { addItem } from './store';
import { useDispatch } from 'react-redux/es/exports';
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination, Navigation]);

export default function Main(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [number, setNumber] = useState(0);
  const onIncrease = ()=> {setNumber(number+1)}  
  const onDecrease = ()=> {return number>1 ? setNumber(number=> number-1):false}
  

  // const price = 15000
  // const totalPrice = price*number

  let dispatch = useDispatch()

  return (
        <div>
            <div className='visual_main'>
            <img src='/images/main_visual_01.png' alt='main_visual' width='100%'/>
            <p className='slogan'>바꾸는{'\n'}세상을{'\n'}바꾼다!</p>
            </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='closeBtn' closeButton></Modal.Header> 
        <div className="detail_box">
        <div className='detail_img'>
      <Swiper
      spaceBetween={10}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      pagination={{ clickable: true }}
      navigation
    >
      <SwiperSlide><img src="/images/detail_01.jpg" alt='detail_slide_01' width="100%"/></SwiperSlide>
      <SwiperSlide><img src="/images/detail_02.jpg" alt='detail_slide_02' width="100%"/></SwiperSlide>
      <SwiperSlide><img src="/images/detail_03.jpg" alt='detail_slide_03' width="100%"/></SwiperSlide>
      <SwiperSlide><img src="/images/detail_04.jpg" alt='detail_slide_04' width="100%"/></SwiperSlide>
      <SwiperSlide><img src="/images/detail_05.jpg" alt='detail_slide_05' width="100%"/></SwiperSlide>
      </Swiper>

       </div>
        <div className="detail_info">
         <div class="detail_box_01">
                <h4>바쿠 스탠다드 파머스 마켓</h4>
                <div class="price_box">
                <p class="price">15,000 KRW</p>
                
                <div class="count">
                <button class="mius" onClick={onDecrease}>-</button><p class="number">{number}</p><button class="plus"  onClick={onIncrease}>+</button>
                </div>
            </div>
            <div className="total">합계 : {number*15000}원 </div>
            </div>
            <div className="detailBtn">
            <button>구매하기</button>
            <button>장바구니 담기</button>
            </div>
         
        </div>
        </div>
      </Modal>

    <Tabs variant="pills" defaultActiveKey="0" id='tabs'>
      
      <Tab eventKey="0" title="New arrivals">
        
       <div className='item_wrap'>
        <div className='item_box'>
            {
             // eslint-disable-next-line array-callback-return
             data.map((value, i)=>{
              if(value.id.includes('new')){
                return (
                    <div className='clo-md-3'>
                    <img src={value.image} alt="new" width='100%'/>
                    <img src={value.hover} alt="new_hover" onClick={handleShow} width='100%' className='img_hover' />
                    <h5>{value.title}</h5>
                    <p>{value.price}원</p>
                    <div className="cartIcon" onClick={()=>{
                      dispatch(addItem({id:value.id, image:value.image , title:value.title, price:value.price, count:1}))
                    }}>
                      <FontAwesomeIcon icon={faShoppingCart} onClick={function() {alert('장바구니에 추가되었습니다.')}}/>
                    </div>
                    </div>
                ) 
              }
             })
            }
            
        </div>
        </div>
      </Tab>
      
      
      <Tab eventKey="1" title="Best item">
        <div className='item_wrap'>
         <div className='item_box'>
            {
             // eslint-disable-next-line array-callback-return
             data.map((value, i)=> {
              if(value.id.includes('best')){
                 return (
                    <div className='clo-md-3'>
                    <img src={value.image} alt="best" width='100%' />
                    <img src={value.hover} alt="best_hover" onClick={handleShow} width='100%' className='img_hover' />
                    <h5>{value.title}</h5>
                    <p>{value.price}원</p>
                    <div className="cartIcon" onClick={()=>{
                      dispatch(addItem({id:value.id, image:value.image , title:value.title, price:value.price, count:1}))
                    }}>
                      <FontAwesomeIcon icon={faShoppingCart} onClick={function() {alert('장바구니에 추가되었습니다.')}}/>
                    </div>
                    </div>
                )
              }
             })
            }
        </div>
        </div>
      </Tab>
    </Tabs>

    <div className='promotion'>
      <div className='pro_img'>
          <img src="/images/promotion_07.jpg" alt="promotion" width="100%"/>
      </div>
      <div className="txt_box">
      <p className='txt'>바꾸 마스크와 함께{'\n'}새로운 봄을 맞이 하세요!</p>
      {'\n'}
      <span className='more'>자세히 보기</span>
      </div>
      <div className='pro_img'>
          <img src="/images/promotion_01.jpg" alt="promotion" width="100%" />
      </div>
    </div>

    <div className='story_box'>
      {
        // eslint-disable-next-line array-callback-return
        data.map((value, i)=> {
          if(value.id.includes('story')){
            return (
            <div className='clo-md-3'>
              <img src={value.image} className='story_img' alt='story_img' width='100%'/>
              <div className='story_hover'></div>
              <p>{value.title}</p>
            </div>
          )
          }
        })
      }
    </div>
    </div>
  )
}

