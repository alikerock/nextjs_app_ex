// app/read/[id]/page.js


// 모든 가능한 id 값을 반환하는 generateStaticParams 함수
export async function generateStaticParams() {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}topics`);
  const topics = await resp.json();
 
  return topics.map((topic) => ({
    id: topic.id.toString(),
  }));
}


export default async function Read({ params }) {
  // 개별 topic 데이터를 가져옴
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${params.id}`);
  const topic = await resp.json();


  return (
    <>
      <h2>{topic.title}</h2>
      <p>{topic.body}</p>
    </>
  );
}
