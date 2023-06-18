'use client'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from "next/link";
import React from "react";
import {useSearchParams} from "next/navigation";

export default function Home({searchParams}:{searchParams:{title:string,data:string}}) {
    const searchParamsFromHook = useSearchParams()
    console.log('searchParamsFromHook: '+ searchParamsFromHook.get('a'))////first way to get all params
    console.log('searchParamsFromHook: '+ searchParamsFromHook.get('a'))//second way to get specific params
    console.log('searchParameters:' +JSON.stringify(searchParams))//first way to get params
  return (
    <main className={styles.main}>
      <h1>Home page</h1>
        <Link href="/users">Users Link</Link>
        <Link href="/about">About Link</Link>
    </main>
  )
}
