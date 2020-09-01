import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
    return (
        <div className='header'>
            <img
            className='header__icon'
            src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt=""
            />

            <div className='header__center'>
                <input typ="text" />
                <SearchIcon/>
            </div>

            <div className='header__right'>
                <p>
                    become a host
                </p>
                <ExpandMoreIcon/>
                <LanguageIcon/>
                <Avatar />
            </div>

        </div>


    )
}
export default Header
