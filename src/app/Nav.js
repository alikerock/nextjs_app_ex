"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + "topics", {
      cache: "no-store", // 캐시 비활성화
    })
      .then((res) => res.json())
      .then((data) => setTopics(data));
  }, []);

  return (
    <nav>
      <ol>
        {topics.map((topic) => (
          <li key={topic.id}>
            <Link href={`/read/${topic.id}`}>{topic.title}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
