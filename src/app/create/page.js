"use client";
export default function Create() {
  const onSubmit = (e)=>{
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    const options = {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({title, body}) //object->json
    }
    fetch('http://localhost:9999/topics', options)
      .then(res=>res.json()) //결과를 객체로 변환
      .then(result=>{
        console.log(result);
      })
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input type="text" name="title" placeholder="title"/>
        </div>
        <div>
          <textarea name="body" placeholder="content"></textarea>
        </div>
        <button type="submit">전송</button>
      </form>
      <hr/>
    </div>
  );
}
