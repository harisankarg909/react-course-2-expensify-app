import React from 'react';

const Header = (props)=>(
    <div>
        <h1>{props.title}</h1>
        <h2>{props.subTitle}</h2>
    </div>
);
Header.defaultProps = {
    title: 'Some default !'
}

export default Header;