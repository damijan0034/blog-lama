"use client"

import React, { useContext } from 'react'
import styles from './themeToggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'

export default function ThemeToggle() {
  const {theme,toggle}=useContext(ThemeContext)
  
 
  return (
    <div className={styles.container}
    onClick={toggle}
    >
        <Image src="/moon.png" width={14} height={14} />
        <div className={styles.ball}
        style={theme === "dark" ? {left:1,background:"black"} : {right:1,background:"white"}}
        ></div>
        <Image src="/sun.png" width={14} height={14} />
    </div>
  )
}
