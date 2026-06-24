import { useState } from "react";
 
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
 
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (!form.name || !form.email || !form.message) {
      setError("All fields are required.");
      return;
    }
    if (!form.email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
 
    setError("");
    setSent(true);
  };
 
  return (
    <div className="page contact-page">
      <div className="section-header">
        <h2>Contact Me</h2>
        <p>Have a question or want to work together? Reach out below.</p>
      </div>
 
      {sent ? (
        <div className="success-msg">
          <span>🎉</span>
          <p>Message sent! I'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <label>
            Name
            <input name="name" placeholder="Your name" onChange={handleChange} value={form.name} />
          </label>
          <label>
            Email
            <input name="email" placeholder="your@email.com" onChange={handleChange} value={form.email} />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="What's on your mind?" rows={5} onChange={handleChange} value={form.message} />
          </label>
 
          {error && <p className="error">{error}</p>}
          <button type="submit">Send Message</button>
        </form>
      )}
 
      <div className="socials">
        <p>Find me on</p>
        <div className="social-links">
          <a href="https://www.instagram.com/laurenhjacobs608" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.linkedin.com/in/laurenhjacobs608" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/laurenHjacobs608" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  );
}
