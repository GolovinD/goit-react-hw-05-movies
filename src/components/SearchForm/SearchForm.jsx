import React, { useState } from "react";

import css from "./SearchForm.module.css"

function SearchForm({ onSubmit }) {

const [searchQuery, setSearchQuery] = useState([]);

function handleChange (event) {
//      console.log(event.currentTarget.value);
        setSearchQuery(event.currentTarget.value);
    }    

    function handleSubmit (event) {
        event.preventDefault();
        const searchQueryNorm = searchQuery.toLowerCase();
        if (searchQueryNorm.trim() === '') {
            alert('Введіть запит');
            return;  
        }
        onSubmit(searchQueryNorm)
        setSearchQuery('');
    }    

    return (
        <div>
            <form
            className={css.form}
            onSubmit={handleSubmit}>
                <input
                className={css.input}
                type="text"
                value={searchQuery}  
                onChange={handleChange}    
                // autocomplete="off"
                placeholder="Search movie"
                // autofocus
                />
            </form>
        </div>
    )  
}

export default SearchForm;