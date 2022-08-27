import React from 'react'
import './styleContent.scss'



const Content = () => {
  return (
    <div className='containerContent'>
      <div className='wrapper1'>
      <div className='wrapperContent'>
        <div className='left'></div>

        <div className='rightContent'>
          <h1 className='title'>عالم من الألوان في <span className="titleActive">انتظارك!</span></h1>
          <p className='desc'>منذ تأسيس الشركة في 1984 <br/> ونحن نسعى لتقديم الأفضل الى زبائننا <br/> ونسعى للتطوير الدائم عن طريق مختبراتنا لمواكبة العالم </p>

          <a className='linkBtn btn' href='#contact'>اتصل بنا</a>

          <a href='#products'>
          <button className='btn btnActive'>المزيد <i className="fa fa-long-arrow-down" ></i></button>
          </a>
        </div>
        
      </div>
      </div>
    </div>
  )
}

export default Content
