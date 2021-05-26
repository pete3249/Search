import React, { useState } from 'react';

const SearchBar = () => {
    const [term, setTerm] = useState('')

    return (
        <div>
            <form>
                <label htmlFor="search">Search </label>
                <input 
                    type="text" 
                    value={term} 
                    onChange={(e) => setTerm(e.target.value)} 
                />
            </form>
        </div>
    )
}

export default SearchBar;