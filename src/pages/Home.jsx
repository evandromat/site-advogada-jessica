import Wrapper from '../components/Wrapper'
import TopBar from '../components/TopBar'
import NavBar from '../components/NavBar'
import Carousel from '../components/Carousel'
import Feature from '../components/Feature'
import About from '../components/About'
import Services from '../components/Services'
import TopFeatures from '../components/TopFeatures'
import Equipe from '../components/Equipe'
import Faq from '../components/Faq'
import Testimonial from '../components/Testimunial'
import Blog from '../components/blog'
import NewsLatter from '../components/NewsLatter'
import Footer from '../components/Footer'
import { useEffect } from 'react'
export default function Home() {
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
            <NavBar active={1} />
            <Carousel />
            <Feature />
            <About />
            <Services />
            <TopFeatures />
            <Equipe />
            <Faq />
            <Testimonial />
            <Blog />
            <NewsLatter />
            <Footer />
        </Wrapper>
    )
}