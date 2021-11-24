import './Header.css'
import imgHeader from '../../../images/headerone.jpg'

export const Header=()=>{
    return(
        <>
            <div className="headerr">
                <div className="headerone">
                    <img src={imgHeader} alt="" className="imgHea"/>
                    <nav className="Menu">
                       <ul className="Menutwo">
                           <a className="butt" value="Home">Home</a>
                           <a className="butt" value="Products">Products </a>
                           <a className="butt" value="About" >About</a>
                           <a className="butt"  value="Contac ">Contac</a> 
                       </ul> 
                    </nav> 
                </div>
                
            </div>
        </>
    );

}