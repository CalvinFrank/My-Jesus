"use client"
import { useRouter } from "next/navigation"
import styles from "./header.module.css"

export default function Header() {
  const router = useRouter()
  return (
    <header className={styles.header}>
      <p onClick={()=>{router.push("/")}}>Home</p>
      <p onClick={()=>{router.push("/blog")}}>Blog</p>
      <p onClick={()=>{router.push("/getting_started")}}>Getting Started</p>
      <p onClick={()=>{router.push("/believes")}}>Believes</p>
      <p onClick={()=>{router.push("/live_for_God")}}>Saved</p>
    </header>
  )
}