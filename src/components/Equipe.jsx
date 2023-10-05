import t1 from './assets/img/jss.jpg'
import t2 from './assets/img/team-2.jpg'
import t3 from './assets/img/team-3.jpg'
import t4 from './assets/img/team-4.jpg'
export default function Equipe(){
    return(
        <div class="team">
                <div class="container">
                    <div class="section-header">
                        <h2>Conheça Nossos Advogados Especialistas</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src={t1}  alt="Team Image" />
                                </div>
                                <div class="team-text">
                                    <h2>Jessica Santos</h2>
                                    <p>Consultara Criminal</p>
                                    <div class="team-social">
                                        <a class="social-tw" href=""><i class="fab fa-twitter"></i></a>
                                        <a class="social-fb" href=""><i class="fab fa-facebook-f"></i></a>
                                        <a class="social-li" href=""><i class="fab fa-linkedin-in"></i></a>
                                        <a class="social-in" href=""><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src={t2} alt="Team Image" />
                                </div>
                                <div class="team-text">
                                    <h2>Dylan Adams</h2>
                                    <p>Consultor civil</p>
                                    <div class="team-social">
                                        <a class="social-tw" href=""><i class="fab fa-twitter"></i></a>
                                        <a class="social-fb" href=""><i class="fab fa-facebook-f"></i></a>
                                        <a class="social-li" href=""><i class="fab fa-linkedin-in"></i></a>
                                        <a class="social-in" href=""><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src={t3} alt="Team Image" />
                                </div>
                                <div class="team-text">
                                    <h2>Gloria Edwards</h2>
                                    <p>Consultaria Administrativo</p>
                                    <div class="team-social">
                                        <a class="social-tw" href=""><i class="fab fa-twitter"></i></a>
                                        <a class="social-fb" href=""><i class="fab fa-facebook-f"></i></a>
                                        <a class="social-li" href=""><i class="fab fa-linkedin-in"></i></a>
                                        <a class="social-in" href=""><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="team-item">
                                <div class="team-img">
                                    <img src={t4} alt="Team Image" />
                                </div>
                                <div class="team-text">
                                    <h2>Josh Dunn</h2>
                                    <p>Consultor Empresarial</p>
                                    <div class="team-social">
                                        <a class="social-tw" href=""><i class="fab fa-twitter"></i></a>
                                        <a class="social-fb" href=""><i class="fab fa-facebook-f"></i></a>
                                        <a class="social-li" href=""><i class="fab fa-linkedin-in"></i></a>
                                        <a class="social-in" href=""><i class="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}