// app/update/[id]/UpdatePage.server.js (서버 컴포넌트)
import Page from './page';

export async function generateStaticParams() {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}topics`);
  const topics = await resp.json();
 
  return topics.map((topic) => ({
    id: topic.id.toString(),
  }));
}

export default async function UpdatePage({ params }) {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${params.id}`);
  const topic = await resp.json();

  return <Page initialTitle={topic.title} initialBody={topic.body} id={params.id} />;
}
