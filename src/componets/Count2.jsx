import React, { useState } from 'react'

const Count2 = () => {

    const [data,setdata] = useState(0)
  return (
    <>
    <div>{data}</div>
    <button onClick={() => setdata(data + 1)} style={{width:'5rem'}}>+</button>
    </>
  )
}

export default Count2