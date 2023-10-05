import { Link } from 'react-router-dom'
import aboutImg from './assets/img/about.jpg'
export default function AboutPage() {

    return (
        <>
            <div class="page-header">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2>Sobre Nós</h2>
                        </div>
                        <div class="col-12">
                            <Link to="/">Home</Link>
                            <Link to="/sobre">Sobre Nós</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="about">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-5 col-md-6">
                            <div class="about-img">
                                <img src={aboutImg} alt="Image" />
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-6">
                            <div class="section-header">
                                <h2>Saiba mais sobre nós</h2>
                            </div>
                            <div class="about-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
                                </p>
                                <a class="btn" href="">Veja Mais</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="timeline">
                <div class="container">
                    <div class="section-header">
                        <h2>Saiba mais sobre nossa jornada</h2>
                    </div>
                    <div class="timeline-start">
                        <div class="timeline-container left">
                            <div class="timeline-content">
                                <h2><span>2020</span>Lorem ipsum dolor sit amet</h2>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                                </p>
                            </div>
                        </div>
                        <div class="timeline-container right">
                            <div class="timeline-content">
                                <h2><span>2019</span>Lorem ipsum dolor sit amet</h2>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                                </p>
                            </div>
                        </div>
                        <div class="timeline-container left">
                            <div class="timeline-content">
                                <h2><span>2018</span>Lorem ipsum dolor sit amet</h2>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                                </p>
                            </div>
                        </div>
                        <div class="timeline-container right">
                            <div class="timeline-content">
                                <h2><span>2017</span>Lorem ipsum dolor sit amet</h2>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                                </p>
                            </div>
                        </div>
                        <div class="timeline-container left">
                            <div class="timeline-content">
                                <h2><span>2016</span>Lorem ipsum dolor sit amet</h2>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                                </p>
                            </div>
                        </div>
                        <div class="timeline-container right">
                            <div class="timeline-content">
                                <h2><span>2015</span>Lorem ipsum dolor sit amet</h2>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non. Ut blandit semper pretium.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}