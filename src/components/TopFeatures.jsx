
import feature from './assets/img/feature.jpg'
export default function TopFeatures(){
    return (
        <div class="feature">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7">
                            <div class="section-header">
                                <h2>Porque escolher-nos</h2>
                            </div>
                            <div class="row align-items-center feature-item">
                                <div class="col-5">
                                    <div class="feature-icon">
                                        <i class="fa fa-gavel"></i>
                                    </div>
                                </div>
                                <div class="col-7">
                                    <h3>Melhores práticas jurídicas</h3>
                                    <p>
                                        A prática jurídica é o conjunto de atividades jurídicas necessárias para atuar com eficiência na advocacia perante Tribunais, órgãos ...
                                    </p>
                                </div>
                            </div>
                            <div class="row align-items-center feature-item">
                                <div class="col-5">
                                    <div class="feature-icon">
                                        <i class="fa fa-balance-scale"></i>
                                    </div>
                                </div>
                                <div class="col-7">
                                    <h3>Eficiência e Confiança</h3>
                                    <p>
                                        Sempre entramos para ganhar!
                                    </p>
                                </div>
                            </div>
                            <div class="row align-items-center feature-item">
                                <div class="col-5">
                                    <div class="feature-icon">
                                        <i class="far fa-smile"></i>
                                    </div>
                                </div>
                                <div class="col-7">
                                    <h3>Resultados que você merece</h3>
                                    <p>
                                        Nossa meta é ver o cliente satisfeito.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="feature-img">
                                <img src={feature}alt="Feature" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}