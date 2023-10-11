import React from 'react'
import styles from './blogPage.module.css'
import CardList from '@/components/cardList/CardList'

export default function BlogPage({searchParams}) {
  const page=parseInt(searchParams.page) || 1;
  const {cat}=searchParams;
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{cat} blogs </h1>
        <div className={styles.content}>
            <CardList page={page} cat={cat} />
        </div>
    </div>
  )
}
