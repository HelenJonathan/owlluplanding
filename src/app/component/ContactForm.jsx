"use client"
import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., API call to process the form
    console.log('Form Data Submitted:', formData);
  };

  return (
    <section className="my-5 flex items-center">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h3 className="page-title text-3xl font-semibold">Ask us any questions</h3>
        </div>

        <div className="flex justify-center">
          <form onSubmit={handleSubmit} id="contact-form" className="w-full m-10 space-y-6">
            {/* Name and Email fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form_group">
                <input
                  id="form-name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form_control block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                />
              </div>
              <div className="form_group">
                <input
                  id="form-email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form_control block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
                />
              </div>
            </div>

            {/* Subject field */}
            <div className="form_group">
              <input
                id="form-subject"
                name="subject"
                type="text"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="form_control block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              />
            </div>

            {/* Message textarea */}
            <div className="form_group">
              <textarea
                id="form-message"
                name="message"
                rows="5"
                placeholder="Messages"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="form_control block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
              ></textarea>
            </div>

            {/* Submit button */}
            <div className="text-center mt-3">
              <button
                type="submit"
                className="bttn-default bttn-lg border border-[#6858db] text-[#6858db]  px-8 py-3 rounded-lg hover:bg-[#6858db] transition-all duration-300"
              >
                Contact with us
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}


