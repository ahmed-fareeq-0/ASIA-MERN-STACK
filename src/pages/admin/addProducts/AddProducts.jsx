import './styleAddproducts.scss'

//added new
import React, { useEffect, useState } from 'react';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from '@firebase/storage';
import axios from 'axios';
import jwt from 'jwt-decode';

import { addProductURI } from '../../../lib/utility';
import app from '../../../lib/firebase';
/////////////////////////

const AddProducts = () => {
/////////////////////////
  const [ product, setProduct ] = useState({
    title:'',
    desc:''
  });

  const [ file, setFile ] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    const newProduct = { ...product };
    newProduct[e.target.name] = e.target.value;
    setProduct(newProduct)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    
    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
            default:
        }
      }, 
      (error) => {
        // Handle unsuccessful uploads
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const data = {
            title: product.title,
            desc: product.desc,
            image: downloadURL
          };

          const config = {
            headers: {
              Authorization: localStorage.getItem("token")
            }
          }
        
          axios.post( addProductURI, data, config ).then( (res) => {
            if(res.data === "added"){
                window.location.assign('/')
            } else {
              alert(res.data)
            }
          })
        });
      }
    );
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt(token);
      console.log(user);
      if (!user) {
        localStorage.removeItem("token");
        window.location.assign("/Login");
      } else {
        console.log(user);
      }
    } else {
      window.location.assign("/Login");
    }
  }, []);
///////////////////
  return (
    <div className='containerAddProducts'>
    <h1 className='titleAddproducts'>?????????? ????????</h1>
      <div className='wrapperAddproducts'>

        <form className='formAddproducts' >
              <input type="file" accept="image/png, image/jpg, image/gif, image/jpeg" name='image' onChange={ (e)=> setFile(e.target.files[0]) } required/>

              <input type='text' name='title' placeholder='?????? ????????????' value={ product.title } onChange={ handleChange } required />

              <textarea name='desc' placeholder="??????????" value={ product.desc } onChange={ handleChange } required ></textarea>
              <button onClick={ handleSubmit }>??????????</button>
        </form>

      </div>
    </div>
  );
}

export default AddProducts;


