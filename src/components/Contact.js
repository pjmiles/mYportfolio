import '../styles/Contact.css'

const Contact = () => {
  return (
    <section className="form-section" id="contact">
      <h1 className="form-header-text">Contact me</h1>
      <form className="form-container">
        <div className="form-control">
          <label htmlFor="name" />
          <input
            type="text"
            name="name"
            placeholder="name"
            className="form-input"
          />
        </div>
        <div className="form-control">
          <label htmlFor="email" />
          <input
            type="email"
            name="email"
            placeholder="email"
            className="form-input"
          />
        </div>
        <div className="form-control">
          <label htmlFor="message" />
          <textarea
            type="text"
            name="message"
            placeholder="message"
            className="form-input message"
          />
        </div>
        <div className="form-submit">
          <button className="submit-btn">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
