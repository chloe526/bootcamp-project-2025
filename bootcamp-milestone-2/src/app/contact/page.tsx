import styles from './../page.module.css'

  export default function Contact() {
        return (
          <div>
            <h1 className={styles.pageLogo}>- Contact -</h1>
            <p>This lists the best way to contact me.</p>

            <p style={{ textAlign: 'center' }}>Email: low_chloe@icloud.com</p>

            <form id="contact-form" className={styles.contactForm}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" placeholder="Name" required />
              <br />

              <label htmlFor="email">Email:</label>
              <input type="text" id="email" name="email" placeholder="Email" required />
              <br />

              <label htmlFor="comments">Comments:</label>
              <textarea id="comments" name="comments" placeholder="Comments" required></textarea>
              <br />

              <p style={{ textAlign: 'center' }}>
                <input type="submit" value="Submit" />
              </p>
            </form>
      </div>
    )
  }
