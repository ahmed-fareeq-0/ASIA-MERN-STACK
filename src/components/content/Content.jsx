import React from 'react'
import './styleContent.scss'

const Content = () => {
  return (
    <div className='containerContent'>
      <div className='wrapper1'>
      <div className='wrapper'>
        <div className='left'></div>

        <div className='right'>
          <h1 className='title'>عالم من الألوان في <sapn className="titleActive">انتظارك!</sapn></h1>
          <p className='desc'>منذ تأسيس الشركة في 1984 <br/> ونحن نسعى لتقديم الأفضل الى زبائننا <br/> ونسعى للتطوير الدائم عن طريق مختبراتنا لمواكبة العالم </p>
          <a className='linkBtn' href='/'><span className='btn'>اتصل بنا</span></a>
          <button className='btn btnActive'>المزيد <i class="fa fa-long-arrow-down" aria-hidden="true"></i></button>
        
        </div>
      </div>
      </div>
    </div>
  )
}

export default Content
