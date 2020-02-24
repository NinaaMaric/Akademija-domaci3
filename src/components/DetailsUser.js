import React from 'react';

const DetailsUser = ({match , data}) => {
    let user = data.find(user => user.name === match.params.name);
    let detailsUser;
    
    if(user){
        detailsUser=(
        <div>
            <h4>{user.name}</h4>
            <h4>{user.lastName}</h4>
            <h4>{user.age}</h4>
        </div>
        );
    } else {
        detailsUser=<div>Please select user!</div>;
    }

    return ( 
        <div>
            {detailsUser}
        </div>
     );
}
 
export default DetailsUser;
