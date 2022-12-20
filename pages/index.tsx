import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'
import NavBar from '../common-components/navbar'
import Footer from '../common-components/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={styles.home_wrapper}>
      <div className={styles.bannerImage}>
        <NavBar />
        <div className={styles.content}>
            <h1>Create your own profile</h1>
        </div>
        <Footer />
      </div>
   
    </div>
    </>
  )
}
