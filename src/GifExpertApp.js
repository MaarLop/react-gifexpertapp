import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch']);

    // const handlerAdd = () =>{
    //     setCategories( [...categories, 'HunterXHunter'] );
    // }

    return (
        <>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories = { setCategories }></AddCategory>
            <hr/>
            {/* <button onClick={ handlerAdd }>Agregar</button> */}
            <ol>
                {
                categories.map( x => 
                <GifGrid 
                    key={ x }
                    category={ x }
                />
                )
            }
            </ol>
        </>
  )
}
