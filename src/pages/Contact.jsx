import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setError("All fields are required!");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Enter a valid email!");
      return;
    }

    setError("");
    alert("Message sent!");
  };

  return (
    <div className="page">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit} className="form">
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="email" placeholder="Email" onChange={handleChange} />
        <textarea name="message" placeholder="Message" onChange={handleChange} />

        {error && <p className="error">{error}</p>}

        <button type="submit">Send</button>
      </form>

      <div className="socials">
        <p>Instagram | LinkedIn | GitHub</p>
      </div>
    </div>
  );
}