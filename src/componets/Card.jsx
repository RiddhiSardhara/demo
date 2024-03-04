import React, {useRef , useState } from 'react'
import img from './img/demo.webp'



const Card = () => {

    let name = useRef()
    let age = useRef()

const [data, setdata] = useState([
    {
        id:1,
        name:"garvit",
        age:21,
        img : img
    },
    {
        id:2,
        name:"user",
        age:22

    },
    {
        id:3,
        name:"demo",
        age:23
    }
])
let submit =() => {
    let user ={
        id : 5,
        name: name.current.value,
        age: age.current.value
    }
    setdata([...data,user])
}

let deletData =(index) =>{
    setdata(data.filter((id,i) => i !==index))
}
    return (

        <>
            {
                data.map((val, ind) => {
                    return (
                        <React.Fragment key ={ind}>

                            <div className='col-md-3' style={{ marginTop: "100px" }}>
                                <div class="card">
                                    <img src={val.img} class="card-img-top" alt="..." />
                                    <div class="card-body">

                                        <h5 class="card-title">{val.name}</h5>
                                        <p class="card-text">{val.age}</p>
                                        <a href="#" class="btn btn-primary" onClick={submit}>Add To Cart</a>
                                        <a href="#" class="btn btn-primary" onClick={()=>deletData(ind)}> Delete</a>
                                    </div>
                                </div>
                            </div>


                        </React.Fragment>
                    )
                })
            }
        </>
    )



}
export default Card