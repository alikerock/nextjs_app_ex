// app/update/[id]/Update.js (클라이언트 컴포넌트)
"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Update({ initialTitle, initialBody, id }) {
  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, body }),
    };
    fetch(`${process.env.NEXT_PUBLIC_API_URL}topics/${id}`, options)
      .then((res) => res.json())
      .then((result) => {
        router.push(`/read/${result.id}`);
        router.refresh();
      });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title"
          />
        </div>
        <div>
          <textarea
            name="body"
            placeholder="content"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">전송</button>
      </form>
      <hr />
    </div>
  );
}
