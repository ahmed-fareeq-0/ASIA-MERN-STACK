import './Products.scss'

import React from 'react'
import axios from 'axios'

import { deleteProductURI } from '../../lib/utility'

function AdminProduct({ products }) {
    const navgation = () => window.location.assign("/addProducts");

    const navgate = (itemId) => {
        window.location.assign(`/updateProducts/${itemId}`)
    }

    const config = {
        headers: {
          Authorization: localStorage.getItem("token")
        }
    }
    
    const handelDelete = async(itemId) =>{
        axios.delete(`${deleteProductURI}/${itemId}`, config).then((res) => {
          if(res.data === 'deleted'){
            window.location.reload()
          } else {
            console.log(res)
          }
        })
    }

    return (
      
    <div className='ContainerShowProducts' id='products'>
          <h1 className='titleProducts'>المنتجات</h1>
      
        <div className='wrapperShowProducts'>
              {products.map((item) => (
                  <div className='wrapperProduct' key={item._id} > 
                    <div className='ProductShow'>
                    <img className='imgProduct' src={item.image} alt='' />
                          <div className='productInfo'>
                              <h3 className='titleProduct'>{item.title}</h3>
                              <div className='descProduct'>{item.desc}</div>
                          </div> 
                    </div>
                    <div className='adminBtns'>
                        <button className='edit' onClick={() => navgate(item._id)}>تعديل</button>
                        <button className='del' onClick={() => handelDelete(item._id)}>حذف</button>
                    </div>
                  </div> 
              ))}
        </div>

        <div className='addProductToHome'>
          <button className='add' onClick={navgation}>منتج جديد</button>
        </div>
    </div>
    )
}

export default AdminProduct