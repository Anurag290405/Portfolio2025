import React, { useState } from 'react';
import { Github, Linkedin, Instagram, Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    emailjs.init("taG89RjfeIFrEBceE"); // Initialize inside the function

    try {
      const response = await emailjs.send(
        'service_0xmrdis',
        'template_38mbizl',
        formData
      );

      console.log('SUCCESS!', response.status, response.text);
      alert('Your message has been sent successfully!');
      
      // Clear form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('FAILED...', error);
      alert('Failed to send the message, please try again.');
    }
  };

  const socialLinks = [
    { icon: Linkedin, url: 'https://www.linkedin.com/in/anurag-agrawal-4735b4262', color: '#ff4d05' },
    { icon: Github, url: 'https://github.com/Anurag290405', color: '#ff4d05' },
    { icon: Mail, url: 'mailto:anurag04business@gmail.com', color: '#ff4d05' },
    { icon: Instagram, url: 'https://www.instagram.com/anurag_60521', color: '#ff4d05' }
  ];

  return (
    <section id="contact" className="w-full bg-[#1a1f2c] text-white py-20 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold mb-8">LET'S CONNECT</h2>

            <p className="text-gray-400">
              Say hello at{' '}
              <a href="mailto:anurag04business@gmail.com" className="text-[#ff4d05] no-underline hover:text-[#ff4d05]">
                anurag04business@gmail.com
              </a>
            </p>

            <p className="text-gray-400">
              For more info, here's my{' '}
              <a href="/AnuragResume.pdf" download className="text-[#ff4d05] no-underline hover:text-[#ff4d05]">
                resume
              </a>
            </p>

            <div className="flex gap-4 mt-6">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-200">
                  <social.icon size={24} color={social.color} />
                </a>
              ))}
            </div>

            <div className="text-sm text-gray-500 mt-12">© {new Date().getFullYear()} Anurag</div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-[#1A1A1A] p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-[#2A2A2A] rounded-lg border border-gray-800 p-3 focus:outline-none focus:border-[#ff4d05] transition-colors" required />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-[#2A2A2A] rounded-lg border border-gray-800 p-3 focus:outline-none focus:border-[#ff4d05] transition-colors" required />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Phone No.</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-[#2A2A2A] rounded-lg border border-gray-800 p-3 focus:outline-none focus:border-[#ff4d05] transition-colors" required />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={6} className="w-full bg-[#2A2A2A] rounded-lg border border-gray-800 p-3 focus:outline-none focus:border-[#ff4d05] transition-colors resize-none" required />
              </div>

              <button type="submit" className="w-full bg-[#ff4d05] text-white font-semibold py-3 px-6 rounded-full hover:bg-opacity-90 transition-colors duration-300 flex items-center justify-center gap-2">
                <Send size={20} />
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
