"use client"; // for post

import { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../page.module.css";

export default function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
        }), 
      });

      setSuccess(true);
      form.reset();
    } catch (err) {
      setError("Failed to send message");
    }
  }

  return (
    <div className={styles.contactContainer}>
      <h1 className={styles.contactTitle}>Contact</h1>
      <p className={styles.contactSubtitle}>
        These are the best ways to contact me.
      </p>

      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <input
          className={styles.contactInput}
          name="name"
          placeholder="Name"
          required
        />

        <input
          className={styles.contactInput}
          name="email"
          placeholder="Email"
          required
        />

        <textarea
          className={styles.contactTextarea}
          name="message"
          placeholder="Message"
          required
        />

        <button className={styles.contactButton} type="submit">
          Send
        </button>

        {success && (
          <p className={styles.successMessage}>
            Message sent successfully!
          </p>
        )}
        {error && <p className={styles.errorMessage}>{error}</p>}
      </form>
    </div>
  )
}
