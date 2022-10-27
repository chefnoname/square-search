import React from 'react';
import { useState } from 'react';

const Contact = () => {
  const [formData, updateFormData] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitFail, setSubmitFail] = useState(false);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const mail = new FormData();

    for (const [name, value] of Object.entries(formData)) {
      mail.append(name, value);
    }

    sendMail(mail);
  };

  const sendMail = (mail) => {
    fetch('/send', {
      method: 'post',
      body: mail,
    })
      .then((response) => response.status)
      .then((status) => {
        console.log(status);
        if (status === 200) {
          setSubmitSuccess(true);
        } else {
          setSubmitFail(true);
        }
      })
      .catch((err) => console.log('err', err));
  };

  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <form
          id="contactForm"
          // data-sb-form-api-token="API_TOKEN"
          onSubmit={onSubmit}
        >
          <div className="row align-items-stretch mb-5">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Your Name *"
                  // data-sb-validations="required"
                  required
                  name="name"
                  onChange={handleChange}
                />
                <div
                  className="invalid-feedback"
                  data-sb-feedback="name:required"
                >
                  A name is required.
                </div>
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="Your Email *"
                  // data-sb-validations="required,email"
                  required
                  name="email"
                  onChange={handleChange}
                />
                <div
                  className="invalid-feedback"
                  data-sb-feedback="email:required"
                >
                  An email is required.
                </div>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="email:email"
                >
                  Email is not valid.
                </div>
              </div>
              <div className="form-group mb-md-0">
                <input
                  className="form-control"
                  id="phone"
                  type="tel"
                  placeholder="Your Phone *"
                  // data-sb-validations="required"
                  required
                  name="phone"
                  onChange={handleChange}
                />
                <div
                  className="invalid-feedback"
                  data-sb-feedback="phone:required"
                >
                  A phone number is required.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group form-group-textarea mb-md-0">
                <input
                  type="textarea"
                  style={{ height: '100%' }}
                  className="form-control"
                  id="message"
                  placeholder="Your Message *"
                  // data-sb-validations="required"
                  required
                  name="message"
                  onChange={handleChange}
                />
                <div
                  className="invalid-feedback"
                  data-sb-feedback="message:required"
                >
                  A message is required.
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Submit success message--> */}
          {submitSuccess && (
            <div className="text-center text-white mb-3">
              <div className="fw-bolder">
                Thank you, we'll be in touch soon!
              </div>
            </div>
          )}
          {/* <!-- Submit error message--> */}
          {submitFail && (
            <div className="text-center text-danger mb-3">
              Error sending message!
            </div>
          )}
          {/* <!-- Submit Button--> */}
          {!submitSuccess && (
            <div className="text-center">
              <button
                className="btn btn-primary btn-xl text-uppercase"
                id="submitButton"
                type="submit"
              >
                Send Message
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
