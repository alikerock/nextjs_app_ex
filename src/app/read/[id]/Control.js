"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

const Control = ()=>{
  const params = useParams();
  const id = params.id;

  const deleteTopic  = ()=>{
    const option = {method:'DELETE'};
    fetch('http://localhost:9999/topics'+id,option)
    .then(res=>{
       return res.json();//json->object
    })
    .then(result=>{     
    });
  }

  return(
    <ul>
      <li><Link href="/create">Create</Link></li>
      {id && <>
        <li><Link href={`/update/${id}`}>Update</Link></li>
        <li><button onClick={deleteTopic}>delete</button></li>
      </>}     
    </ul> 
  )
}
export default Control;