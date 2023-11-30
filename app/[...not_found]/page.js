"use client"
import { useRouter } from "next/navigation"


export default function E404() {
  const router=useRouter()
  return (
    <div>
      <h1>🤓😯PS... Looks like your not where your supposed to be!🤷‍♀️</h1>
      <button onClick={()=>{router.push("/")}}>Click here to go home.</button>
    </div>
  )
}