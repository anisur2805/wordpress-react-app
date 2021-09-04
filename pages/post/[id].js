import Footer from '../../components/Footer';
import axios from 'axios';
import parse from 'html-react-parser';
import { getAuthor, getFeaturedImage } from '../../lib/utils';
import { POSTS_API_URL } from '../../lib/constants';
import Head from 'next/head';
import styles from '../../styles/Post.module.css';
export default function Post({ title, featuredImg, author, content, date }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center flex-1 mx-5 md:px-20 py-10 max-w-5xl m-auto">
        <h1 className="text-2xl md:text-6xl font-bold mt-5 mb-5 text-center">{title}</h1>
        <div>
          <img src={featuredImg} />
        </div>
        <p className="text-sm mt-5">Written by {author}</p>
        <p className="text-sm font-semibold mb-5">Published on {new Date(date).toDateString()}</p>
        <div className={styles.post}>{parse(content)}</div>
      </main>
      <Footer />
    </div>
  );
}