"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./blogComment.module.css";

export default function CommentForm({ slug }: { slug: string }) {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!user || !comment) return;

    await fetch(`/api/blog/${slug}/comment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user,
        comment,
        time: new Date(),
      }),
    });

    setUser("");
    setComment("");
    router.refresh(); 
  }

  return (
    
    <form className={styles.commentForm} onSubmit={handleSubmit}>
      <h3 className={styles.commentFormTitle}>Add a comment</h3>
      
      <input
        className={styles.commentInput}
        placeholder="Name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <textarea
        className={styles.commentTextarea}
        placeholder="Write a comment…"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button className={styles.commentButton} type="submit">
        Post
      </button>
    </form>
  );
}
