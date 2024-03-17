
// "use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";
export default function Auth() {
  const { data: session } = useSession()
  console.log(session);

  if(session) {
    return <>
        <div className="" style={{display : "flex", alignItems : "center",height : "20vh" , borderRadius : "50%"}}>
        <h1>Welcome {session.user.name}</h1>
        <Image src={session.user.image} height={100} width={100} style={{ borderRadius : "50%" ,margin : "5vh"}} alt="Image unavailable"></Image>
        </div>
        <h2>Currently signed in as {session.user.email}</h2>
      <label style={{height : "4vh", padding : "2vh", margin : "2vh",fontSize : "3vh"}} htmlFor="sout">Sign Out from Github</label>
      <button onClick={() => signOut()} style={{height : "5vh", margin : "3vh",fontSize : "2vh"}}>Sign out</button>
    </>
    
    
  }
  return <>
    <h1>You are not currently signed in</h1>
    <label style={{height : "4vh", padding : "2vh", margin : "2vh" ,fontSize : "3vh"}} htmlFor="sin">Sign In using Github</label>
    <button id="sin" onClick={() => signIn("github")} style={{height : "5vh", margin : "3vh",fontSize : "2vh"}}>Sign in</button>
  </>
}