import React from 'react'
import Header from '../Components/Header'
import MovieCarousel from '../Components/MovieCarousel'
import MovieItem from '../Components/MovieItem'
import TvShows from '../Components/TvShows'
import Theater from '../Components/Theater'
import Footer from '../Components/Footer'
const Home = () => {
    return (
        <div>
            <Header />
            <MovieCarousel />
            <MovieItem />
            <TvShows />
            <Theater />
            <Footer/>

        </div>
    )
}

export default Home