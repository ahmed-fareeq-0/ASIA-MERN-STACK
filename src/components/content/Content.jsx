import React from 'react'
import './styleContent.scss'


const Content = () => {
  return (
    <div className='containerContent' id='content'>
      <div className='informationContent'>
          <h1 className='title-information-Content'>عالم من الألوان في <span className="titleActive">إنتظارك!</span></h1>
          <p className='desc-information-Content'>منذ تأسيس الشركة في 1984 <br/> ونحن نسعى لتقديم الأفضل الى زبائننا <br/> ونسعى للتطوير الدائم عن طريق مختبراتنا لمواكبة العالم </p>

          <a href='#contact' className='linkBtn btn'>اتصل بنا</a>

          <a href='#products'>
          <button className='btn btnActive' >المزيد <i className="fa fa-long-arrow-down" ></i></button>
          </a>
      </div>
    </div>
  )
}

export default Content
