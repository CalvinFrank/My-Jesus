"use client"
import { useRouter } from "next/navigation"
import styles from "./header.module.css"

export default function Header() {
  const router = useRouter()
  return (
    <header className={styles.header}>
      <p onClick={()=>{router.push("/")}}>Home</p>
      <p>Blog</p>
      <p>Getting Started</p>
      <p>Believes</p>
      <p>Saved</p>
    </header>
  )
}