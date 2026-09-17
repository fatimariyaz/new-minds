function Contact() {
  return (
    <div className="page">

      <section className="contact-hero">
        <p className="small-heading">GET IN TOUCH</p>

        <h1>
          We'd love to
          <span> hear from you!</span>
        </h1>

        <p>
          Have a question, idea or want to learn more about
          NewMinds? Send us a message.
        </p>
      </section>

      <section className="contact-section">

        <div className="contact-info">

          <div className="contact-card">
            <div className="contact-icon">👩‍🏫</div>
            <h2>Humera Bukht</h2>
            <p>
              Founder & Educator
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <h2>Email</h2>
            <p>
              humerabukht@gmail.com
            </p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📱</div>
            <h2>Contact</h2>
            <p>
              0502779758
            </p>
          </div>

        </div>

        <div className="contact-form">

          <h2>Send us a message</h2>

          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
          />

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
          />

          <label>Message</label>
          <textarea
            rows="6"
            placeholder="Write your message..."
          ></textarea>

          <button>Send Message →</button>

        </div>

      </section>

    </div>
  );
}

export default Contact;