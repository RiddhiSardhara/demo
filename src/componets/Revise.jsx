import React, { useState } from "react";

const Revise = () => {

    const [ input, setinput ] = useState()
    const handel = (e) => {
        setinput({...input, [e.target.name]: e.target.value})
    }
    const submit = () => {
        console.log(input);
    }

    return (

        <>
            <input type="text" name="fname" onChange={handel} />
            <br></br><br></br>
            <input type="text" name="email" onChange={handel} />
            <br></br><br></br>
            <input type="text" name="password" onChange={handel} />
            <button onClick={submit}>Submit</button>

        </>
    )
}
export default Revise