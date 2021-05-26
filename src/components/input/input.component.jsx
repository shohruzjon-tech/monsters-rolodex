import './search-box.styles.css';
import React from 'react'

export  const SearchBox=({placeholder, handleChange})=>(
<input
    className="search"
    type="search" 
    placeholder={placeholder}
    onChange={handleChange} 
/>
)

export default SearchBox

