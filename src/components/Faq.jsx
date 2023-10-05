import faq from './assets/img/faqs.jpg'
export default function Faq(){
    return(
        <div class="faqs">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="faqs-img">
                                <img src={faq} alt="Image" />
                            </div>
                        </div>
                        <div class="col-md-7">
                            <div class="section-header">
                                <h2>Ter uma dúvida?</h2>
                            </div>
                            <div id="accordion">
                                <div class="card">
                                    <div class="card-header">
                                        <a class="card-link collapsed" data-toggle="collapse" href="#collapseOne" aria-expanded="true">
                                            <span>1</span> Direito Penal/Criminal?
                                        </a>
                                    </div>
                                    <div id="collapseOne" class="collapse show" data-parent="#accordion">
                                        <div class="card-body">
                                            O direito penal ou direito criminal é a disciplina de direito público que regula o exercício do poder punitivo do Estado, tendo por pressuposto de ação delitos e como consequência as penas.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        <a class="card-link" data-toggle="collapse" href="#collapseTwo">
                                            <span>2</span> Direito do Trabalho?
                                        </a>
                                    </div>
                                    <div id="collapseTwo" class="collapse" data-parent="#accordion">
                                        <div class="card-body">
                                            Direito do trabalho é o ramo jurídico que estuda as relações de trabalho. Esse direito é composto de conjuntos de normas, princípios e outras fontes jurídicas que regem as relações de trabalho, regulamentando a condição jurídica dos trabalhadores.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        <a class="card-link" data-toggle="collapse" href="#collapseThree">
                                            <span>3</span> Direito tributário?
                                        </a>
                                    </div>
                                    <div id="collapseThree" class="collapse" data-parent="#accordion">
                                        <div class="card-body">
                                            O direito tributário é um ramo do direito que objetiva o estudo das leis e normas que regulam as relações entre o Estado e os contribuintes, no que diz respeito à cobrança de taxas, impostos, contribuições de melhoria, contribuições especiais e empréstimos compulsório
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        <a class="card-link" data-toggle="collapse" href="#collapseFour">
                                            <span>4</span>Direito Ambiental?
                                        </a>
                                    </div>
                                    <div id="collapseFour" class="collapse" data-parent="#accordion">
                                        <div class="card-body">
                                            Direito ambiental é um ramo do direito, constituindo um conjunto de normas jurídicas e princípios jurídicos voltados à proteção da qualidade do meio ambiente.
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header">
                                        <a class="card-link" data-toggle="collapse" href="#collapseFive">
                                            <span>5</span> Direito Empresarial?
                                        </a>
                                    </div>
                                    <div id="collapseFive" class="collapse" data-parent="#accordion">
                                        <div class="card-body">
                                           O Direito Empresarial tem como objetivo cuidar o exercício da atividade econômica organizada de fornecimento de bens e serviços, a chamada empresa. Seu objeto de estudo é resolver os conflitos de interesses envolvendo empresários ou relacionados às empresas que eles exploram.
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <a class="btn" href="">Veja Mais</a>
                        </div>
                    </div>
                </div>
            </div>
    )
}