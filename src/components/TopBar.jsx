import { Link } from 'react-router-dom'
import logo from '../components/assets/img/jslogo2.png'
export default function TopBar(){
    return <div class="top-bar">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="logo">
                                <Link to='/'>
                                    <img src={logo} alt="Logo" />
                                </Link>
                            </div>
                        </div>
                        <div class="col-lg-9">
                            <div class="top-bar-right">
                                <div class="text">
                                    <h2>8:00 - 18:00</h2>
                                    <p>aberto de SEG -SEX</p>
                                </div>
                                <div class="text">
                                    <h2>(91) 9 8073-4528</h2>
                                    <p>Ligue para uma consultoria grátis</p>
                                </div>
                                <div class="social">
                                    <a href=""><i class="fab fa-twitter"></i></a>
                                    <a href=""><i class="fab fa-facebook-f"></i></a>
                                    <a href=""><i class="fab fa-linkedin-in"></i></a>
                                    <a href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}