"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

const Control = ()=>{
  const params = useParams();
  const id = params.id;
  const router = useRouter();
  console.log(id);

  const deleteTopic  = ()=>{
    const option = {method:'DELETE'};
    fetch(process.env.NEXT_PUBLIC_API_URL+'topics/'+id,option)
    .then(res=>{
       return res.json();//json->object
    })
    .then(result=>{     
      router.push('/');
      router.refresh();
    });
  }

  return(
    <ul>
      <li><Link href="/create">Create</Link></li>
      {id && <>
        <li><Link href={`/update/${id}`}>Update</Link></li>
        <li><button onClick={deleteTopic} >delete</button></li>
      </>}     
    </ul> 
  )
}
export default Control;