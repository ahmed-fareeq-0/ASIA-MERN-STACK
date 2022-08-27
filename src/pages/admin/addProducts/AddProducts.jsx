import './styleAddproducts.scss'


const AddProducts = () => {

  return (
    <div className='containerAddProducts'>
    <h1 className='titleAddproducts'>اضافة منتج</h1>
      <div className='wrapperAddproducts'>

        <form className='formAddproducts' >
              <input type="file" accept="image/png, image/jpg, image/gif, image/jpeg" name='image' required/>

              <input type='text' name='title' placeholder='أسم المنتج' required />

              <textarea name='desc' placeholder="الوصف" required ></textarea>
              <button>اضافة</button>
        </form>

      </div>
    </div>
  );
}

export default AddProducts;


