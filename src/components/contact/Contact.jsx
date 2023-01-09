import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7eexjzg', 'template_tzuchki', form.current, '4vFk9zAFZK6jYwAbD')
      e.target.reset()
  };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in Touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">ukadavid7@gmail.com</span>

                            <a href="mailto:ukadavid7@gmail.com" className="contact__button">Write me {" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>

                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>

                            <h3 className="contact__card-title">WhatsApp</h3>
                            <span className="contact__card-data">+234812273584</span>

                            <a href="https://wa.me/09136351625" className="contact__button">Write me {" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>

                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-twitter contact__card-icon"></i>
                            
                            <h3 className="contact__card-title">Twitter ID</h3>
                            <span className="contact__card-data">@Ukadavid7</span>

                            <a href="https://twitter.com/messages/compose?recipient_id={3003739149}" className="contact__button">Write me {" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>

                    <form ref={form} onSubmit={sendEmail} action="#" className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name="name" className="contact__form-input" placeholder="Type your name" />

                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input type="email" name="email" className="contact__form-input" placeholder="Type your email" />
                            
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project Summary</label>
                            <textarea name="project" cols="5" rows="10" className="contact__form-input " placeholder="Write your project summary"></textarea>
                        </div>

                        <button className="button button--flex">
                Send Message <i class="uil uil-envelope-add"></i>
            </button>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default Contact;