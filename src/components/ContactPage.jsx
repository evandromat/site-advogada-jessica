import { Link } from "react-router-dom";

export default function ContactPage(){

    const handleSubmit =(e)=>{
        e.preventDefault()
    }
    return(
        <>
            <div class="page-header">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2>Contate-nos</h2>
                        </div>
                        <div class="col-12">
                            <Link to="/">Home</Link>
                            <Link to="/contato">Contate-nos</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="contact">
                <div class="container">
                    <div class="section-header">
                        <h2>Contate-nos</h2>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="contact-info">
                                <div class="contact-item">
                                    <i class="fa fa-map-marker-alt"></i>
                                    <div class="contact-text">
                                        <h2>Local</h2>
                                        <p>Av. Nazaré 1253, Belém, Pa</p>
                                    </div>
                                </div>
                                <div class="contact-item">
                                    <i class="fa fa-phone-alt"></i>
                                    <div class="contact-text">
                                        <h2>Telefone</h2>
                                        <p>(91) 9 8073-4528</p>
                                    </div>
                                </div>
                                <div class="contact-item">
                                    <i class="fa fa-envelope"></i>
                                    <div class="contact-text">
                                        <h2>Email</h2>
                                        <p>jesicasantos.p@hotmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="contact-form">
                                <form>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Seu Nome" required="required" />
                                    </div>
                                    <div class="form-group">
                                        <input type="email" class="form-control" placeholder="Seu Email" required="required" />
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Assunto" required="required" />
                                    </div>
                                    <div class="form-group">
                                        <textarea class="form-control" placeholder="Mensagem" required="required" ></textarea>
                                    </div>
                                    <div>
                                        <button class="btn" type="submit" onClick={(e)=>handleSubmit(e)}>Enviar Mensagem</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}