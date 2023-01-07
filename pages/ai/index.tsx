
export default function AI() {
  return (
    <>
      <div id="navigation-bar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div id="hero">
        <div id="hero-content">
          <h1>Welcome to My Saas App</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a href="#" id="cta">
            Get Started Now
          </a>
        </div>
      </div>
      <div id="features-section">
        <h2>Our Features</h2>
        <div className="feature-box">
          <h3>Feature 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="feature-box">
          <h3>Feature 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="feature-box">
          <h3>Feature 3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div id="pricing-section">
        <h2>Our Pricing</h2>
        <div className="price-box">
          <h3>Basic Plan</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="price">$9.99/month</div>
          <a href="#" className="cta">
            Sign Up
          </a>
        </div>
        <div className="price-box">
          <h3>Premium Plan</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="price">$19.99/month</div>
          <a href="#" className="cta">
            Sign Up
          </a>
        </div>
        <div className="price-box">
          <h3>Ultimate Plan</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="price">$29.99/month</div>
          <a href="#" className="cta">
            Sign Up
          </a>
        </div>
      </div>
      <div id="contact-section">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <input type="submit" value="Send Message" />
        </form>
      </div>
    </>
  );
}
