import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginPage from './Authentication/LoginPage';
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import TvShow from './Pages/TvShow'
import Newpopular from './Pages/Newpopular'
import MovieItem from './Components/MovieItem';
import HeaderPage from './Components/HeaderPage';
import TvShows from './Components/TvShows';
import Header from './Components/Header';
import Account from './Pages/Account';
import Breadcrumbs from "./Components/Breadcrumbs";
import Rating from './Components/Details';



function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage /> } />
        <Route path="/home" element={<Home />} />
         {/* <Route path="/Movies" element={<Movies />} />
        <Route path="/TvShow" element={<TvShow />} />
          <Route path="/Newpopular" element={<Newpopular/>} />  */}
         <Route path="/" element={<MovieItem />} />
        <Route path="/movie/:title" element={<HeaderPage />} />
        <Route path="/MovieItem/:title" element={<MovieItem />} />
        <Route path="/" element={<Header />} />
        <Route path="/Account" element={<Account />} />



       
        <Route path='/movies' element={
          <>
          <Header/>
          <Breadcrumbs title="MOVIES"/>
          <Movies/>
          </> 
        }
        />


         <Route path='/tvshow' element={
          <>
          <Header/>
          <Breadcrumbs title="TVSHOWS"/>
          <TvShow/>
          </> 
        }
        />

        <Route path='/Newpopular' element={
          <>
          <Header/>
          <Breadcrumbs title="NEW POPULAR"/>
          <Newpopular/>
          </> 
        }
        />
     
     
        <Route path='/rating/id:' element={
          <>
          <Header/>
          
          <Rating/>
          </> 
        }
        />




    </Routes>
   </BrowserRouter>
  );
}


export default App;