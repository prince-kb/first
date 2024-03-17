"use client"
import styles from "./page.module.css";
import Auth from "@/components/Auth";

export default function Home() {
  
  return (
    <main className={styles.main}>

      
      <div className={styles.description}>
        <p className="container">
          Letsssssss GO !!!!
        </p>
        
      </div>
      <Auth/>

    </main>
  );
}
