import { Link } from 'react-router-dom'
import car1 from '../components/assets/img/carousel-10.jpg'
import car2 from '../components/assets/img/carousel-2.jpg'
import car3 from '../components/assets/img/carousel-3.jpg'
export default function Carousel(){
    return (
         <>
        <div id="carousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel" data-slide-to="1"></li>
                    <li data-target="#carousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={car1} alt="Carousel Image" />
                        <div className="carousel-caption">
                            <h1 className="animated fadeInLeft">Lutamos por seus direitos</h1>
                            <p className="animated fadeInRight">Profissionais dedicados</p>
                            <Link className="btn animated fadeInUp" to="/contato">Peça um orçamento grátis</Link>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={car2} alt="Carousel Image" />
                        <div className="carousel-caption">
                            <h1 className="animated fadeInLeft">Nós nos preparamos para lutar por você</h1>
                            <p className="animated fadeInRight">Profissionais dedicados</p>
                            <a className="btn animated fadeInUp" href="#">Peça um orçamento grátis</a>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src={car3} alt="Carousel Image" />
                        <div className="carousel-caption">
                            <h1 className="animated fadeInLeft">Lutamos por seus direito</h1>
                            <p className="animated fadeInRight">Profissionais dedicados</p>
                            <a className="btn animated fadeInUp" href="#">Peça um orçamento grátis</a>
                        </div>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <a href="#" className="back-to-top"><i></i></a>
           </>
    )
}