import "./footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="newsletter">
          <h2>Be the first to know</h2>
          <p>Sign up for updates from metta muse.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your e-mail..." />
            <button style={{marginLeft:'2%'}}>Subscribe</button>
          </div>
        </div>

        <div className="links-section">
          <h3>metta muse</h3>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className="links-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="contact-section">
          <h3>Contact Us</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h3>Currency</h3>
          <p>🇺🇸 USD</p>
          <p className="currency-note">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>

        <div className="bottom-section">
          <div className="social">
            <h3>Follow Us</h3>
            <div className="social-icons">
              {/* <a href="#">
                <img src="/icons/instagram.svg" alt="Instagram" />
              </a>
              <a href="#">
                <img src="/icons/linkedin.svg" alt="LinkedIn" />
              </a> */}
            </div>
          </div>
          <div className="payments">
            <h3>metta muse accepts</h3>
            <div className="payment-icons">
              {/* <img src="/icons/gpay.svg" alt="GPay" />
              <img src="/icons/mastercard.svg" alt="Mastercard" />
              <img src="/icons/paypal.svg" alt="PayPal" />
              <img src="/icons/amex.svg" alt="Amex" />
              <img src="/icons/applepay.svg" alt="Apple Pay" />
              <img src="/icons/odopay.svg" alt="O'DPay" /> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
