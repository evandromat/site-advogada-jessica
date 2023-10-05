import OwlCarousel from 'react-owl-carousel';


import test1 from './assets/img/testimonial-1.jpg'
import test2 from './assets/img/testimonial-2.jpg'
import test3 from './assets/img/testimonial-3.jpg'
import test4 from './assets/img/testimonial-4.jpg'


export default function Testimonial() {
    const OwlPrps = {
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    }
    return (
        <div class="testimonial">
            <div class="container">
                <div class="section-header">
                    <h2>Revisão do cliente</h2>
                </div>

                <div className='testimonials-carousel'>
                    <OwlCarousel {...OwlPrps}>
                        <div class="testimonial-item">
                            <i class="fa fa-quote-right"></i>
                            <div class="row align-items-center">
                                <div class="col-3">
                                    <img src={test1} alt="" />
                                </div>
                                <div class="col-9">
                                    <h2>Nome do Cliente</h2>
                                    <p>Profissão</p>
                                </div>
                                <div class="col-12">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan lacus eget velit
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item">
                            <i class="fa fa-quote-right"></i>
                            <div class="row align-items-center">
                                <div class="col-3">
                                    <img src={test2} alt="" />
                                </div>
                                <div class="col-9">
                                    <h2>Nome do Cliente</h2>
                                    <p>Profissão</p>
                                </div>
                                <div class="col-12">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan lacus eget velit
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item">
                            <i class="fa fa-quote-right"></i>
                            <div class="row align-items-center">
                                <div class="col-3">
                                    <img src={test3} alt="" />
                                </div>
                                <div class="col-9">
                                    <h2>Nome do Cliente</h2>
                                    <p>Profissão</p>
                                </div>
                                <div class="col-12">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan lacus eget velit
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item">
                            <i class="fa fa-quote-right"></i>
                            <div class="row align-items-center">
                                <div class="col-3">
                                    <img src={test4} alt="" />
                                </div>
                                <div class="col-9">
                                    <h2>Nome do Cliente</h2>
                                    <p>Profissão</p>
                                </div>
                                <div class="col-12">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan lacus eget velit
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item">
                            <i class="fa fa-quote-right"></i>
                            <div class="row align-items-center">
                                <div class="col-3">
                                    <img src={test1} alt="" />
                                </div>
                                <div class="col-9">
                                    <h2>Nome do Cliente</h2>
                                    <p>Profissão</p>
                                </div>
                                <div class="col-12">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan lacus eget velit
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item">
                            <i class="fa fa-quote-right"></i>
                            <div class="row align-items-center">
                                <div class="col-3">
                                    <img src={test2} alt="" />
                                </div>
                                <div class="col-9">
                                    <h2>Nome do Cliente</h2>
                                    <p>Profissão</p>
                                </div>
                                <div class="col-12">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan lacus eget velit
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-item">
                            <i class="fa fa-quote-right"></i>
                            <div class="row align-items-center">
                                <div class="col-3">
                                    <img src={test3} alt="" />
                                </div>
                                <div class="col-9">
                                    <h2>Nome do Cliente</h2>
                                    <p>Profissão</p>
                                </div>
                                <div class="col-12">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam accumsan lacus eget velit
                                    </p>
                                </div>
                            </div>
                        </div>

                    </OwlCarousel>
                </div>
            </div>
        </div>

    )
}