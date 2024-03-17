"use client"
import styles from "./page.module.css";
import Auth from "@/components/Auth";

export default function Home() {
  
  return (
    <main className={styles.main}>

      
      <div className={styles.description}  style={{display : "flex",justifyContent : "center", alignItems : "center"}}>
        <h1 style={{fontSize : "8vh"}} className="container">
          Letsssssss GO !!!!
        </h1>
        
      </div>
      <Auth/>

    </main>
  );
}
