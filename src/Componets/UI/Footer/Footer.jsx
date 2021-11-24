import './Footer.css'
import imawh from '../../../images/wh.png'
import imain from '../../../images/ins.png'
import imafc from '../../../images/fc.png'
import imatw from '../../../images/tw.png'



export const Footer=()=>{
    return(
        <>
            <div className="bu">
                <div className="buto">
                   <a href="https://web.whatsapp.com/"> <img src={imawh} alt="" className="wht"></img> </a>
                    <a href="https://www.instagram.com/"><img src={imain} alt="" className="inst"></img> </a>
                    <a href="https://www.facebook.com/"><img src={imafc} alt="" className="fac"></img></a>
                    <a href="https://twitter.com/"><img src={imatw} alt="" className="twi"></img> </a>
                    <p className="name">Anyie Daniela Condiza Quintero</p>
                </div>
            </div>
        </>
    );
}