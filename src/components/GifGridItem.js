import React from 'react';
//import PropType from 'prop-types';

export const GifGridItem = ( prop ) => {

    return (
        <div className='card animate__animated animate__fadeIn'>
           <img src = { prop.url } alt = { prop.title }/>
           <p> { prop.title }</p>
        </div>
    )
}

// GifGridItem.propType = {
//     img: PropType.object.isRequired
// }
