import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section>
      <main className="contact__container">
        <div className="contact__card">
          <h2>NewsLetter</h2>
          <div>
            <input type="text" placeholder="your@email.com" />
            <button>Subcribe</button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Contact;
