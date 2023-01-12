import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className-={styles.contactSection}>
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <input type="submit" value="Send Message" />
      </form>
    </div>
  );
}
