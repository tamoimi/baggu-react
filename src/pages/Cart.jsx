import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { addCount, minusCount, deleteCount } from './store'


export default function Cart() {

  const state = useSelector((state)=>{return state})
  const dispatch = useDispatch()

  const sum = 0

  return (
    <div>

       <Table className='cartBox'>
      <thead>
        <tr>
          <th>#</th>
          <th>상품이미지</th>
          <th>상품명</th>
          <th>상품가격</th>
          <th>상품갯수</th>
          <th>상품추가</th>
          <th>총 가격</th>
        </tr>
      </thead>
      <tbody>
          {
            state.cart.map((value,i)=>{
              
              return(
                <>
                <tr key={i}>
                  <td>{state.cart[i].id}</td>
                  <td><img src={'./images/standard_0'+ (i+1)+'.jpg'} width='100px'/></td>
                  <td>{state.cart[i].title}</td>
                  <td>{state.cart[i].price}원</td>
                  <td>{state.cart[i].count}</td>
                  <td>
                    <button onClick={()=>{
                      dispatch(minusCount(state.cart[i].id))
                    }}>-</button>

                    <button onClick={()=>{
                      dispatch(addCount(state.cart[i].id))
                    }}>+</button>
                    {/* <button onClick={()=>{
                      dispatch(deleteCount(state.cart[i].id))
                    }}>삭제</button> */}

                  </td>
                  <td>{state.cart[i].price*state.cart[i].count}원</td>
                  {sum} = {`${sum}+${state.cart[i].price*state.cart[i].count}`}
                  
                </tr> 
                 </>
              )
            })
          }
      </tbody>
      </Table>
      <p className='total'>합계:{sum}</p>

    </div>
  )
}
