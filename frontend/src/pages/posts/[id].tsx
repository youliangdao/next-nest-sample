import React from "react";

import styles from "@/src/styles/Post.module.css";
import { getAllPosts, getPostById } from "@/src/utils/api";
import { PostType } from "@/src/utils/types";

export default function Post({ post }: { post: PostType }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.author}>投稿者: {post.author}</p>
      <p className={styles.content}>{post.content}</p>
      <p className={styles.createdAt}>createdAt: {post.createdAt}</p>
    </div>
  );
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = await getPostById(id);
  return {
    props: {
      post,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  const paths = posts.map((post: PostType) => ({
    params: { id: post.id },
  }));
  return {
    paths,
    fallback: false,
  };
}
