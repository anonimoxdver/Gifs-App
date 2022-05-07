import React, { useState } from 'react'
import { AddCategories } from './components/AddCategories'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    GifGrid
    const [categories, setCategories] = useState([ 'Regular Show'])

    //const handleAdd = () => {
       // setCategories([...categories,'Hora de Aventura'])
  //  }
  return (
    <div>
        <header className='header-main'>GifExpertApp</header>
        <AddCategories  setCategories={setCategories}/>
      
        
            <ul>
                {
                    categories.map(categories=>    
                        <GifGrid 
                            key={categories}
                            category={categories}
                        />
                    )
                }
            </ul>

    </div>
  )
}
