import React, { useState, useEffect } from 'react';



function Buttons() {

    const [ count, setCount ] = useState(0)
    const [ loaded, setLoader ] = useState(false)


    return(
        <button className="btn btn-info" onClick = { () => setCount( count + 1 )} >
            {count}
        </button>
    );
}

export default Buttons;