import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FavContext } from '../../context/FavContext/FavContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const FavWidget = () => {

    const { cantidadEnFavoritos } = useContext(FavContext)

    return (
        <div>
            <Link to="/favoritos">
            <FontAwesomeIcon icon={faHeart} />
                <span>{cantidadEnFavoritos()}</span>
            </Link>
            
        </div>
    )
}

export default FavWidget