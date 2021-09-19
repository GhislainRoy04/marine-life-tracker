'use strict'

import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './MainView.css';

export const MainView = ({children}) => {
    <div>

        <Header/>

        {children}

        <Footer/>
    </div>
}

export default (MainView)