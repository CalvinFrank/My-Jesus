"use client"
import { useRouter } from "next/navigation"

export default function Blog() {
  const router=useRouter()
  return (
    <div>
      <h1>About This Webesite</h1>
      <p>This app is made so that the kingdom of god can be expanded.   This app was inspired by the song My Jesus:</p>
      <a href="https://www.youtube.com/watch?v=SouXPjiMZD0">https://www.youtube.com/watch?v=SouXPjiMZD0</a>
      <h1>About The Creator</h1>
      <p>Calvin is a 9 year old who codes and loves God.  He also likes other things like football, friends, etc.  Learn more <button onClick={()=>{router.push("/blog/self")}}>here.</button></p>
    </div>
  )
}