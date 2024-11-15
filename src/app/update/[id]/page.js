export async function generateStaticParams() {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API_URL}topics`);
  const topics = await resp.json();

  return topics.map((topic) => ({
    id: topic.id.toString(),
  }));
}

import Update from './Update';

export default function Page({ params }) {
  return <Update id={params.id} />;
}
