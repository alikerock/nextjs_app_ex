"use client";
import { useRouter,useParams } from 'next/navigation'
import { useEffect, useState } from 'react';

// 모든 가능한 id 값을 반환하는 generateStaticParams 함수
export async function generateStaticParams() {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}topics`);
  const topics = await resp.json();
 
  return topics.map((topic) => ({
    id: topic.id.toString(),
  }));
}

export default function Update(props) {
  const params = useParams();
  const id = params.id;
  //client 컴포넌트에서 데이터 조회

  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);

  useEffect(()=>{
    fetch(process.env.NEXT_PUBLIC_API_URL+'topics/'+id)
    .then(res=>{
       return res.json();//json->object
    })
    .then(result=>{
      setTitle(result.title);
      setBody(result.body);
    });
  },[id])

  /*
  //서버형 컴포넌트, 데이터 조회
  const response = await fetch(`process.env.NEXT_PUBLIC_API_URL+'topics/${props.params.id}`);
  const topic = await response.json(); //json->object
  */

  const router = useRouter();
  const onSubmit = (e)=>{
    e.preventDefault(); 
    const options = {
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({title, body}) //object->json
    }
    fetch(process.env.NEXT_PUBLIC_API_URL+'topics/'+id, options)
      .then(res=>res.json()) //결과를 객체로 변환
      .then(result=>{
        console.log(result);
        router.push(`/read/${result.id}`);
        router.refresh();
      })
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input 
            type="text" 
            name="title" 
            value={title} 
            onChange={(e)=>{
              setTitle(e.target.value);
            }} 
            placeholder="title"
          />
        </div>
        <div>
          <textarea 
            name="body" 
            placeholder="content" 
            value={body} 
            onChange={(e)=>{
              setBody(e.target.value);
            }} 
          ></textarea>
        </div>
        <button type="submit">전송</button>
      </form>
      <hr/>
    </div>
  );
}
