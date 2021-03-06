import React, {useEffect, useState} from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import { 
  FaInstagram,
  FaLinkedinIn

} from 'react-icons/fa';
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedDate] = useState(null);
  const [blackHeader, setBlackHeder] = useState(false);
  useEffect(()=>{
    const loadAll = async () => {
      // pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      // pegando o featured
      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedDate(chosenInfo);
      
    }

    loadAll();
  }, []);

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeder(true);
      } else{
        setBlackHeder(false)
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);
  
  return (
    <div className="page">
      <Header black={blackHeader} />

      {featuredData && 
      <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items} url={item} />
        ))}
      </section>
      <footer class="footer">
        <div class="container-footer">
            <div class="contatos">
              <div className='link'>
              <a href="https://www.instagram.com/rubensribeiro95/" target="_blank"><div class='iconcontatos'><FaInstagram style={{fontSize: 25}} /></div></a>
              <a href="www.linkedin.com/in/rubens-ribeiro1995" target="_blank"> <div class='iconcontatos'><FaLinkedinIn style={{fontSize: 25}} /></div></a>
              </div>              
            </div>
            <div class="direitosReserv">                
                <h5>
                    &copy; 2022 NETFLIX-CLONE TODOS OS DIREITOS PRESERVADOS<br/>
                    Site recriado por Rubens Ribeiro
                </h5>
            </div>
        </div>
    </footer>
    {movieList.length <= 0 &&
      <div className='loading'>
        <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando" />
      </div>
    }
    </div>
  );
}