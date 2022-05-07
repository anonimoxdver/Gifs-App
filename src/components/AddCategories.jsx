import React, { useState } from 'react'

export const AddCategories = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
     
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 1) {
             setCategories(cats=> [ inputValue,...cats ])
             setInputValue('')
        }
      
    }
  return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder='Añade un gif'
                value={inputValue}
                onChange={handleInputChange }
            />
        </form>
  )
}
