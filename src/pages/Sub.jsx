import React, {useState} from 'react'
import data from '../components/Data';
import {Modal} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { addItem  } from './store';
import { useDispatch } from 'react-redux/es/exports';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);


export default function Sub() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [number, setNumber] = useState(0);
  const onIncrease = ()=> {setNumber(number+1)}  
  const onDecrease = ()=> {return number>1 ? setNumber(number=> number-1):false}

  let dispatch = useDispatch()

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='closeBtn' closeButton></Modal.Header> 
        <div className="detail_box">
        <div className='detail_img'>
      <Swiper
      spaceBetween={10}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      navigation
      pagination={{ clickable: true }}
      >
      <SwiperSlide><img src="/images/detail_01.jpg" width="100%"/></SwiperSlide>
      <SwiperSlide><img src="/images/detail_02.jpg" width="100%"/></SwiperSlide>
      <SwiperSlide><img src="/images/detail_03.jpg" width="100%"/></SwiperSlide>
      <SwiperSlide><img src="/images/detail_04.jpg" width="100%"/></SwiperSlide>
      <SwiperSlide><img src="/images/detail_05.jpg" width="100%"/></SwiperSlide>
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

<div className='sub_item_wrap'>
        <div className='item_box'>
            {
             data.map((value, i)=> {
              if(value.id.includes('sub')){
                return (
                    <div className='clo-md-3'>
                    <img src={value.image} width='100%'/>
                    <img src={value.hover} width='100%' onClick={handleShow} className='img_hover'/>
                    <h5>{value.title}</h5>
                    <p>{value.price}원</p>
                     <div className="cartIcon" onClick={()=>{
                      dispatch(addItem({id:value.id, image:value.image , title:value.title, price:value.price, count:1}))
                    }}>
                      <FontAwesomeIcon icon={faShoppingCart}/>
                    </div>
                    </div>
                ) 
              }
             })
            }
        </div>
        </div>


    </div>
  )
}
