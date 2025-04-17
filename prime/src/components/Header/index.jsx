import { Link } from 'react-router-dom';

import './style.css'


function HeaderApp(){
    return(
        <header>
            <Link className='logo' to="/">Prime</Link>
            <Link className='favoritos' to="/favorito">Meu Favoritos</Link>
        </header>
    )
}

export default HeaderApp;