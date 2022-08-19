import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from '@chakra-ui/react'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Portofolio</title>
        <meta name="description" content="This is Andika Rizki Fadhila Portofolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
      </main>

      <footer className=''>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className=''>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
