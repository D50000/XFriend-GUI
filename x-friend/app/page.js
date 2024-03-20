// pages/index.js

import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Crypto Landing Page</title>
        <meta name="description" content="Welcome to my crypto landing page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to My Crypto Landing Page</h1>
        <p>This is a simple landing page created using Next.js.</p>
      </main>

      <footer>
        <p>&copy; 2024 My Crypto Company</p>
      </footer>
    </div>
  );
}
