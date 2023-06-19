import React, { useContext } from 'react';
import {BookContext} from '../contexts/BookContext.js';

const Navbar = () => {
    const bookContext = useContext(BookContext);
    console.log(bookContext);
    // const { books } = useContext(BookContext);
    return (
        <div className='navbar'>
            <h1>Ninja Reading Lists</h1>
            <p>Currently you have { bookContext.books.length} books to get through...</p>
        </div>
    );
}

export default Navbar;