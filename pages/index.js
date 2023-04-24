import Head from 'next/head'
import { Hero } from '@component/components/hero'
import { Intro } from '@component/components/intro'
import { Accordion } from '@component/components/accordion';

// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@component/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Cat's Meow Resort" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        <Hero />
				<Intro />
				<Accordion />
      </main>
    </>
  )
}
