import React, { useState } from 'react' //rafc
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handlerInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handlerSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }

    }
    
    return (
        <form onSubmit={ handlerSubmit }>
            <input 
                type ='text'
                value = { inputValue }
                onChange = { handlerInputChange }

            />
        </form>
    );
} //empezar a ver video 8 de la seccion 6

AddCategory.propTypes = {
    setCategories:  PropTypes.func.isRequired
}
