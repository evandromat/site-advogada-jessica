
import Wrapper from '../components/Wrapper'
import TopBar from '../components/TopBar'
import NavBar from '../components/NavBar'
import Feature from '../components/Feature'
import NewsLatter from '../components/NewsLatter'
import Footer from '../components/Footer'
import AboutPage from '../components/AboutPage'
import Equipe from '../components/Equipe'
import { useEffect } from 'react'

export default function About() {
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
            <NavBar active={2} />
            <AboutPage />
            <Feature />
            <Equipe />
            <NewsLatter />
            <Footer />
        </Wrapper>

    )
}