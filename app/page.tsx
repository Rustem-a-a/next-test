import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from "next/link";
import React from "react";

const inter = Inter({ subsets: ['latin'] })
export default function Home({searchParams}:{searchParams:{title:string,data:string}}) {
    console.log('searchParameters:' +searchParams.title + searchParams.data)
  return (
    <main className={styles.main}>
      <h1>Home page</h1>
        <Link href="/users">Users Link</Link>
    </main>
  )
}
