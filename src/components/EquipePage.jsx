import aboutImg from './assets/img/about.jpg'
import equipe1 from './assets/img/team-1.jpg'
import equipe2 from './assets/img/team-2.jpg'
import equipe3 from './assets/img/team-3.jpg'
import equipe4 from './assets/img/team-4.jpg'

export default function EquipePage(){

    return (
        <>
         <div class="page-header">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2>Attorneys</h2>
                        </div>
                        <div class="col-12">
                            <a href="">Home</a>
                            <a href="">Attorneys</a>
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
                                <h2>About Attorneys</h2>
                            </div>
                            <div class="about-text">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
                                </p>
                                <a class="btn" href="">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}