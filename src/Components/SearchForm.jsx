import React, { useContext } from 'react'
import {BiSearch} from 'react-icons/bi'
import {AiFillCloseCircle} from 'react-icons/ai'
import ThemeContext from '../Context/ThemeContext'
import AppTheme from '../Colors'

const SearchForm = ({setIsSearchOpen=f=>f}) => {
  const theme= useContext(ThemeContext)[0]
  const currentTheme = AppTheme[theme]
  return (
    <div className="popup__searchBox" style={{background: currentTheme.searchBar.background}}>
        <div className="search__close"><AiFillCloseCircle onClick={e=>setIsSearchOpen(false)} /></div>
        <form className="popup__search__form">
            <input type="text" name="search" placeholder="What do you want to learn?" className="navbar__search navbar__search__popup" />
            <BiSearch className='navbar__searchIcon navbar__searchIcon__popup' />
        </form>
        <div className="search__results">Search Results...</div>
    </div>
  )
}

export default SearchForm