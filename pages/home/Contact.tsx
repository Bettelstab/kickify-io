import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contactSection}>
      <h2>Any questions? Contact Us!</h2>
      <form action="https://formsubmit.co/cd34e70cb6c9ee805b03a054fa879ae0" method="POST">
        <input type="text" placeholder="Email" required />
        <textarea placeholder="Message"></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
