//"use client";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Control from "./read/[id]/Control";
//import { useEffect,useState } from "react";

/*
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
*/

export const metadata = {
  title: "Web tutorials",
  description: "Generated by Green",
};



export default async function RootLayout({ children }) {
  /*
  client 컴포넌트에서 데이터 조회
  const [topics, setTopics] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:9999/topics')
    .then(res=>{
       return res.json();//json->object
    })
    .then(result=>{
      setTopics(result);
    });
  },[])
  */
 
 //서버형 컴포넌트에서 데이터 조회
  const response = await fetch('http://localhost:9999/topics');
  const topics = await response.json(); //json->object

  return (
    <html lang="en">
      
      {/* <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body> */}
      <body>
        <h1>
          <Image src="/home_google_icon.png" alt="home icon" width={48} height={48}></Image>
          <Link href="/">WEB</Link>
        </h1>
        <nav>
          <ol>
            {
              topics.map(topic=> <li key={topic.id}><Link href={`/read/${topic.id}`}>{topic.title}</Link></li> )
            }
            {/* <li><Link href="/read/1">html</Link></li>
            <li><Link href="/read/2">css</Link></li>
            <li><Link href="/read/3">javascript</Link></li> */}
          </ol>
        </nav>
        {children}
        <Control/>       
      </body>
    </html>
  );
}
