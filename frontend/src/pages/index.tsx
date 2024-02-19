import { Inter } from "next/font/google";
import Head from "next/head";
import styles from "@/src/styles/Home.module.css";
import { getAllPosts } from "../utils/api";
import { PostType } from "../utils/types";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ posts }: { posts: PostType[] }) {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <h1>NestJS Blog</h1>
        <ul className={styles.postList}>
          {posts.map((post) => (
            <li key={post.id} className={styles.post}>
              <h2 className={styles.title}>{post.title}</h2>
              <p className={styles.author}>投稿者: {post.author}</p>
              <p className={styles.content}>{post.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts: PostType[] = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
