import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import DetailsUser from "./DetailsUser";


const users= [
    {
        name: "Marija",
        lastName: "Bujisic",
        age: 23
    },
    {
        name: "Nina",
        lastName: "Maric",
        age: 25
    },
    {
        name: "Vasilije",
        lastName: "Knezevic",
        age: 23
    },
    {
        name: "Alen",
        lastName: "Dedic",
        age: 23
    }
];

const User = ({match}) => {

    const linkUser = users.map( user => (
        <li key={user.name}>
            <Link to={`${match.url}/${user.name}`}> {user.name}</Link>
        </li>
    ));
    return ( 
        <div>
            <h1>User</h1>
            <ul>{linkUser}</ul>
        
        <Route path={`${match.path}/:name`} 
            render={( props ) => 
                <DetailsUser data={users} {...props} />} />
        </div>
     );
}
 
export default User;