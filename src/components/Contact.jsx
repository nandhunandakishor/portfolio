import React, { useRef } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_qnas4ho',     // Replace with your actual Service ID
        'template_jeeta0h',    // Replace with your actual Template ID
        form.current,
        'WZgZqlFxYeApclMvB'      // Replace with your actual Public Key (not Secret Key!)
      )
      .then(
        (result) => {
          alert("Message sent successfully! ✅");
          form.current.reset();
        },
        (error) => {
          alert("Something went wrong. ❌ Try again later.");
          console.error(error.text);
        }
      );
  };

  return (
    <div 
      id="contact"
      className="bg-gradient-to-br from-black to-gray-900 via-grey-500 text-white py-20 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-cyan-400 to-blue-500 animate-pulse drop-shadow-lg">
          Let's Connect 🌐
        </h2>

        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
          Whether you’ve got an idea to build something great, a question, or just want to say <strong className="text-white">hello</strong>,
          I’m always open to exciting conversations and collaborations!
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8 text-lg font-medium">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-blue-400 text-2xl" />
            <a href="mailto:nandhunandakishor@gmail.com" className="hover:text-green-400 transition duration-300">
              nandhunandakishor@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-red-400 text-2xl" />
            <span>Vadakara, Kerala, India</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-12 max-w-3xl mx-auto bg-white/5 backdrop-blur-md p-10 rounded-2xl border border-white/10 shadow-2xl">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-6">
              <label className="block text-left text-gray-300 mb-2">Name</label>
              <input name="user_name" type="text" placeholder="Your Name" required
                className="w-full px-4 py-3 bg-black/30 text-white rounded-lg outline-none focus:ring-2 focus:ring-green-400 transition-all" />
            </div>
            <div className="mb-6">
              <label className="block text-left text-gray-300 mb-2">Email</label>
              <input name="user_email" type="email" placeholder="Your Email" required
                className="w-full px-4 py-3 bg-black/30 text-white rounded-lg outline-none focus:ring-2 focus:ring-blue-400 transition-all" />
            </div>
            <div className="mb-6">
              <label className="block text-left text-gray-300 mb-2">Message</label>
              <textarea name="message" rows="4" placeholder="Your Message" required
                className="w-full px-4 py-3 bg-black/30 text-white rounded-lg outline-none focus:ring-2 focus:ring-yellow-400 transition-all"></textarea>
            </div>
            <button type="submit"
              className="w-full bg-gradient-to-r from-green-400 to-blue-500 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-green-400/40 active:scale-100">
              Send Message 🚀
            </button>
          </form>
        </div>

        {/* Social Media Icons */}
        <div className="mt-10 flex justify-center gap-8">
          <a href="https://www.linkedin.com/in/nandakishor-6b9916234" target="_blank" rel="noopener noreferrer"
            className="text-blue-400 text-4xl hover:scale-125 transition-transform duration-300">
            <FaLinkedin />
          </a>
          <a href="https://github.com/nandhunandakishor" target="_blank" rel="noopener noreferrer"
            className="text-gray-400 text-4xl hover:scale-125 transition-transform duration-300">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;




