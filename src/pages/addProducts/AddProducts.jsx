import React from 'react';
import './styleAddproducts.scss'


const AddProducts = () => {

  return (
    <div className='containerAddProducts'>
    <h1 className='titleAddproducts'>اضافة منتج</h1>
      <div className='wrapper'>

        <form className='form' >
              <input type="file"  accept="image/png, image/jpg, image/gif, image/jpeg" required/>
              <input type='text'  placeholder='أسم المنتج' required />
              <textarea  placeholder="الوصف" required></textarea>
              <button>اضافة</button>
        </form>

      </div>
    </div>
  );
}

export default AddProducts;


