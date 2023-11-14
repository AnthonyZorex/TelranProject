import React from 'react'
import { Icon} from "./../Icon";


function Footer() {


  return (
    <div className='footer'>
        <div className='footer_container'>
            <div className='footer_container__item1'>
                <h2>Contact</h2>
                <h1>+49 999 999 99 99</h1>
                <div className='footer_container_iconBlock' >
                <div>
                <Icon iconName='instagram' width='50' height='50'/>
                <h6>instagram</h6>
                </div>
               <div>
               <Icon iconName='whatsapp' width='50' height='50' />
                 <h6>WhatsApp</h6>
               </div>
                </div>
            </div>
            <div className='footer_container__item2'>
                <h2>Address</h2>
                <a>Linkstraße 2, 8 OG, 10785,<br></br> Berlin, Deutschland</a>
              <h6>Working Hours:</h6>
              <h5>24 hours a day</h5>
            </div>
            <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1214.2070920797296!2d13.37447070483592!3d52.507843082779544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sde!4v1698947494258!5m2!1sru!2sde" 
            /* width={widthMap} height={heightMap} */ allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            </div>
        </div>
       
    </div>
  )
}

export default Footer