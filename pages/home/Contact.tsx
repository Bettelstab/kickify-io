import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contactSection} id="contact">
      <h2>Any questions? Contact Us!</h2>
      <form action="https://formsubmit.co/05eb87bb425564842589889b8fe2d24a" method="POST">
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message"></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
