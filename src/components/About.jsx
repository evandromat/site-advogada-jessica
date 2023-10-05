import about from './assets/img/about.jpg'
export default function About(){
    return(
          <div class="about">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-5 col-md-6">
                            <div class="about-img">
                                <img src={about} alt="Image" />
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-6">
                            <div class="section-header">
                                <h2>Saiba mais sobre nós</h2>
                            </div>
                            <div class="about-text">
                                <p>
                                   Nossa equipe de trabalho é composta de proficionais especialistas e cada área do direito.
                                </p>
                                <p>
                                    Estamos sempre prontos a lhe atender.
                                </p>
                                <a class="btn" href="/sobre">Veja Mais</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}