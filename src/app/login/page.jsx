"use client"

import { signIn, useSession } from 'next-auth/react'
import styles from './loginPage.module.css'
import { useRouter } from 'next/navigation';



export default function LoginPage() {
  const router=useRouter()
  const{status,data}=useSession();
 if(status === 'loading'){
  return (
    <div className={styles.loading}>Loading</div>
  )
 }
 if(status === "authenticated"){
  return router.push("/")
    
 }
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialButton}
            onClick={()=>signIn("github")}
            >Signin with Github</div>
            <div className={styles.socialButton}>Signin with Google</div>
            <div className={styles.socialButton}>Signin with Facebook</div>
        </div>
    </div>
  )
}

