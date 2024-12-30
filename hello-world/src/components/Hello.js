import React from "react";

const Hello = () => {
    // return (
    //     <div>
    //         <h1>
    //             Hello Venkata Jwala...Jsx
    //         </h1>
    //     </div>
    // )
    return React.createElement('div',null,
        React.createElement('h1',null,'Hello Venkata Jwala')
    )
}

export default Hello