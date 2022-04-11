import React from 'react';
import memoize from 'memoize-one';
import classNames from 'classnames';
import style from './Footer.css';

const getClassNames = memoize((props = {}) => {
    const classNames = [style.wrapper];
    return classNames;
});

export class Footer extends React.PureComponent {

    constructor(props){
        super(props);
    }

    render() {
        

        return (
            <footer className={classNames(getClassNames(this.props))}>

            </footer>
        );
    }

}


export default Footer;
