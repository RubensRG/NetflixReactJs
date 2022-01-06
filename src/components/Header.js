import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png"></img>
                </a>
            </div>
            <div className="container">
            <nav>
            <a href="#titulo">Início</a>
                <a href="#originais da netflix">Séries</a>
                <a href="#em alta">Filmes</a>
                <a href="#documentarios">Bombando</a>
                <a href="#documentarios">Minha lista</a>
                <a href="#documentarios">Idioma e legendas</a>
            </nav>
            </div>
            <div className="header--search">
                <a href="/">
                    <img src="https://www.studyinternational.com/wp-content/themes/ul-theme/search.png" alt="Usuário"></img>
                </a>
            </div> 
            <div class="header--infantil">
                <a href="/">
                    Infantil
                </a>
            </div> 
            <div className="header--bell">
                <a href="/">
                    <img src="https://i.imgur.com/sbjuXhP.png" alt="Usuário"></img>
                </a>
            </div>  
            <div className="header--user">
                <a href="/">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png" alt="Usuário"></img>
                </a>
            </div>
            <div className="header--arrow">
                <a href="/">
                    <img src="https://demitribusquets.com/wp-content/uploads/2019/01/white-down-arrow-png-7.png" alt="Usuário"></img>
                </a>
            </div>
            
        </header>
    )
}