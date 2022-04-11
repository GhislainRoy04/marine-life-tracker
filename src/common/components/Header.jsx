import React from 'react';
import memoize from 'memoize-one';
import classNames from 'classnames';
import style from './Header.css';

const getClassNames = memoize((props = {}) => {
    const classNames = [style.wrapper];
    return classNames;
});

export class Header extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <header className={classNames(getClassNames(this.props))} >
               <h1>Marine Life Tracker</h1>
            </header>
        );
    }
}


export default Header;
