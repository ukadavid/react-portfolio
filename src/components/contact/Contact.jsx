import React from "react";

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in Touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">ukadavid7@gmail.com</span>

                            <a href="mailto:ukadavid7@gmail.com" className="contact__button">Write me {" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>

                        </div>

                        <div className="contact__card">
                            <i className="bx bx contact__card-icon"></i>

                            <h3 className="contact__card-title">WhatsApp</h3>
                            <span className="contact__card-data">+234812273584</span>

                            <a href="https://wa.me/09136351625" className="contact__button">Write me {" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>

                        </div>

                        <div className="contact__card">
                            <i className="bx bx contact__card-icon"></i>

                            <h3 className="contact__card-title">Twitter ID</h3>
                            <span className="contact__card-data">@Ukadavid7</span>

                            <a href="https://twitter.com/messages/compose?recipient_id={3003739149}" className="contact__button">Write me {" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>
                </div>
            </div>

        </section>
    )
}

export default Contact;