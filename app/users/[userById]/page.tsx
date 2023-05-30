import React from 'react';
import {fchmod} from "fs";
type Props = {
    params:{
        userById:string
    }
}
const MyComponent = ({params}:Props) => {

    return (
        <div>
            {params.userById}
        </div>
    );
};

export default MyComponent;


