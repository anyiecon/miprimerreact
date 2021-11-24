import './Card.css'
import imagFord from '../../../images/ford-raptor.jpg'

export const Card = () =>{
    return(
        <>
          <div className="card">
            <div className="card2">
              <h1 className="title">Ford Raptor 2018</h1>
              <img className="imagf" src={imagFord} alt="" />
              <p className="price">$72,000.00</p>
              <button className="button1">Mas información</button>
            </div>
          </div>
        </>
    );
}
