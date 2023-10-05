
import Wrapper from '../components/Wrapper'
import TopBar from '../components/TopBar'
import NavBar from '../components/NavBar'
import NewsLatter from '../components/NewsLatter'
import Footer from '../components/Footer'
import ContactPage from '../components/ContactPage'
import { useEffect } from 'react'

export default function Contact() {
    useEffect(() => {
        const position = window.scrollY;
        console.log(position)
        if (position > 90) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        }
        if (position < 90) {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
    }, []);

    return (
        <Wrapper>
            <TopBar />
            <NavBar active={7} />
            <ContactPage />
            <NewsLatter />
            <Footer />
        </Wrapper>

    )
}