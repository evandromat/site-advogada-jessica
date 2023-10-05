import { Link } from "react-router-dom";

export default function ServicesPage() {

    return (
        <>
            <div class="page-header">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2>Áreas de atuação</h2>
                        </div>
                        <div class="col-12">
                            <Link to="/">Home</Link>
                            <Link to="/areas-atuacao">Atuação</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="service">
                <div class="container">
                    <div class="section-header">
                        <h2>Nossas Áreas de Atuação</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item">
                                <div class="service-icon">
                                    <i class="fa fa-landmark"></i>
                                </div>
                                <h3>Direito Civil</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                                </p>
                                <a class="btn" href="">Veja Mais</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item">
                                <div class="service-icon">
                                    <i class="fa fa-users"></i>
                                </div>
                                <h3>Direito da Família</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                                </p>
                                <a class="btn" href="">Veja Mais</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item">
                                <div class="service-icon">
                                    <i class="fa fa-hand-holding-usd"></i>
                                </div>
                                <h3>Direito do Trabalhador</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                                </p>
                                <a class="btn" href="">Veja Mais</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item">
                                <div class="service-icon">
                                    <i class="fa fa-graduation-cap"></i>
                                </div>
                                <h3>Direito Educacional</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                                </p>
                                <a class="btn" href="">Veja Mais</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item">
                                <div class="service-icon">
                                    <i class="fa fa-gavel"></i>
                                </div>
                                <h3>Direito Criminal</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                                </p>
                                <a class="btn" href="">Veja Mais</a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-item">
                                <div class="service-icon">
                                    <i class="fa fa-globe"></i>
                                </div>
                                <h3>Direito Cibernético</h3>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non
                                </p>
                                <a class="btn" href="">Veja Mais</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}