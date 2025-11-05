"use client";

import React, { useState } from "react";
import "./Contact.css";
import { contactOptions } from "@/data/sources";
import { toast } from "sonner";

const Contact: React.FC = () => {
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const handleContactClick = (title: string, value: string) => {
    if (title === "Email") {
      window.open(`mailto:${value}`, "_blank");
    } else if (title === "Phone Number") {
      window.location.href = `tel:${value}`;
    } else if (title === "Address") {
      // Open Google Maps for Lagos, Nigeria
      window.open("https://www.google.com/maps/place/Lagos,+Nigeria", "_blank");
    }
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (e: React.FormEvent<HTMLFormElement>): boolean => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const errors: { [key: string]: string } = {};

    const firstname = formData.get("firstname") as string;
    const lastname = formData.get("lastname") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Validate first name
    if (firstname.trim().length < 2) {
      errors.firstname = "First name must be at least 2 characters";
    }

    // Validate last name
    if (lastname.trim().length < 2) {
      errors.lastname = "Last name must be at least 2 characters";
    }

    // Validate email
    if (!validateEmail(email)) {
      errors.email = "Please enter a valid email address";
    }

    // Validate message
    const wordCount = message.trim().split(/\s+/).length;
    if (wordCount < 3) {
      errors.message = "Message must contain at least 3 words";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      // Show more descriptive error message
      const firstError = Object.values(errors)[0];
      toast.error(firstError, {
        style: {
          background: "#ef4444",
          border: "1px solid #dc2626",
          color: "#ffffff",
        },
      });
      return false;
    }

    // If validation passes, submit the form
    e.currentTarget.submit();
    toast.success("Message sent successfully!");
    return true;
  };

  return (
    <section id="contact" data-aos="fade-zoom-in">
      <div className="wrapper">
        <div className="contact-options">
          {contactOptions.map((option, index) => (
            <div
              className="flex-center option"
              data-aos="fade-right"
              key={index}
              onClick={() => handleContactClick(option.title, option.value)}
              style={{ cursor: "pointer" }}
            >
              <div className="flex-center icon-wrapper">{option.icon}</div>
              <h4 className="muted">{option.title}</h4>
              <h3 className="value">{option.value}</h3>
            </div>
          ))}
        </div>
        <div className="contact-form" data-aos="fade-left">
          <div className="top">
            <h1 className="title">
              <span className="gradient-text">Let's Collaborate!</span>
            </h1>
            <p className="muted">
              Always open to new opportunities and collaborations, I invite you
              to connect with me for any inquiries or project discussions.
            </p>
          </div>
          <form
            action="https://formspree.io/f/xyzgwlky"
            method="POST"
            onSubmit={validateForm}
          >
            <div className="middle">
              <div className="flex row">
                <div style={{ width: "100%" }}>
                  <input
                    type="text"
                    placeholder="First name"
                    name="firstname"
                    className="control"
                    required
                  />
                  {formErrors.firstname && (
                    <p
                      style={{
                        color: "#ef4444",
                        fontSize: "12px",
                        marginTop: "4px",
                      }}
                    >
                      {formErrors.firstname}
                    </p>
                  )}
                </div>
                <div style={{ width: "100%" }}>
                  <input
                    type="text"
                    placeholder="Last name"
                    name="lastname"
                    className="control"
                    required
                  />
                  {formErrors.lastname && (
                    <p
                      style={{
                        color: "#ef4444",
                        fontSize: "12px",
                        marginTop: "4px",
                      }}
                    >
                      {formErrors.lastname}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex row">
                <div style={{ width: "100%" }}>
                  <input
                    type="email"
                    placeholder="Email address"
                    name="email"
                    className="control"
                    required
                  />
                  {formErrors.email && (
                    <p
                      style={{
                        color: "#ef4444",
                        fontSize: "12px",
                        marginTop: "4px",
                      }}
                    >
                      {formErrors.email}
                    </p>
                  )}
                </div>
                <input
                  type="tel"
                  placeholder="Phone number"
                  name="phone"
                  className="control"
                />
              </div>
              <div style={{ width: "100%" }}>
                <textarea
                  name="message"
                  cols={30}
                  rows={10}
                  placeholder="Message"
                  className="control"
                  required
                ></textarea>
                {formErrors.message && (
                  <p
                    style={{
                      color: "#ef4444",
                      fontSize: "12px",
                      marginTop: "4px",
                    }}
                  >
                    {formErrors.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex-center bottom">
              <button type="submit" className="btn primary">
                Send Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
