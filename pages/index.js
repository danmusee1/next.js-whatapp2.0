import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../components/Sidebar'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Whatsapp 3.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Sidebar/>
    
    

     
    </div>
  )
}
