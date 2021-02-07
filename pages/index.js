import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Family Tree | Home</title>
        <meta name='keywords' content='Family and friend list' />
      </Head>
      <div>
        <h1 className={styles.title}>Hello from Next..</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          reiciendis fugit illum repellat iusto vitae ipsam nam at voluptatem,
          optio quia odio laudantium voluptatibus! Optio cumque eaque commodi
          praesentium sed.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          obcaecati aperiam perspiciatis dignissimos error, numquam modi eveniet
          saepe ducimus laborum, nostrum illo? Autem quaerat, incidunt iusto a
          perspiciatis illo est.
        </p>
        <Link href='/members'>
          <a className={styles.btn}>See Members List</a>
        </Link>
      </div>
    </>
  );
}
