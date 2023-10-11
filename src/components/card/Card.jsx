import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function Card({key,item}) {
  return (
    <div className={styles.container} key={key}>
        
              <div className={styles.imageContainer}>
                {item.img && <Image src="/p1.jpeg" alt='image' fill />}  
              </div>
              <div className={styles.textContainer} key={key}>
                    <div className={styles.detail}>
                        <span className={styles.date}>{item.createdAt.substring(0,10)}-{" "}</span>
                        <span className={styles.category}>{item.catSlug}</span>
                        </div> 
                        <Link className={styles.link} href={`/posts/${item.slug}`}><h1>{item.title} </h1>  </Link>  
                        
                        <p className={styles.desc}>{item.desc.substring(0,60)} 
                        
                           </p>
                         <Link className={styles.link} href={`/posts/${item.slug}`}>Read More </Link>      
              </div>
         
    </div>
  )
}
