import React, { useEffect, useState } from 'react';
import { useLoaderData } from "react-router-dom";


const Github = () => {
    const data = useLoaderData()
    // const [data, setData] = useState([""])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/withsammi')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    return (
        <div className='bg-amber-600 flex items-center justify-around
'>
            <p>github repos : {data.public_repos}</p>
            <p>github followers : {data.followers}</p>
            <img src={data.avatar_url}  alt="github profile" width={300}/>
        </div>
    );
}

export default Github;

export  const gitInfoloader = async () =>{
    const response = await fetch('https://api.github.com/users/withsammi')
    return response.json()
}
