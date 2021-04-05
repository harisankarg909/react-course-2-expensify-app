//Higher order component (HOC) - A component that renders another component

import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props)=>(
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) =>{
    return (props)=>(
        <div>
            {props.isAdmin &&<p>This is private info </p>}
            <WrappedComponent {...props}/>
        </div>
    )
};

const withAuthInfo = (WrappedComponent) =>{
    return (props)=>(
        <div>
            {props.isAuthenticated &&<p>This user is authenticated </p>}
            {!props.isAuthenticated &&<p>This user is  not authenticated !!! Please log in </p>}
            <WrappedComponent {...props}/>
        </div>
    )
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = withAuthInfo(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info='Nothing' />, document.getElementById('app'))

ReactDOM.render(<AuthInfo isAuthenticated={true} info='Nothing' />, document.getElementById('app'))