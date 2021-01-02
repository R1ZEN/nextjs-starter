import React from 'react';
import Head from 'next/head';
import { Title } from 'src/components/Title/Title';

export default function Home() {
  return (
    <div>
      <Head>
        <Title>Create Next App</Title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>Desktop</main>
    </div>
  );
}
