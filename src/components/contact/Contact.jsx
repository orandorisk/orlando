// import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiTwitterLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
//  react emailjs
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_quq0j4h', 'template_972nq2a', form.current, 'user_1xF7Z0EiUeUYjzbUgpkPb')
        e.target.reset()
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>danjentaifib@gmail.com</h5>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=danjentaifib@gmail.com" target="_blank" rel='noreferrer'>Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <RiTwitterLine className='contact__option-icon' />
                        <h4>Direct Messeger Twitter</h4>
                        <h5>Orlando</h5>
                        <a href="https://twitter.com/messages/compose?recipient_id=724993848292700160&text=Hallo%20Orlando" target="_blank" rel="noreferrer" >Send a Message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>083154968207</h5>
                        <a href="https://api.whatsapp.com/send?phone=6283154968207" target="_blank" rel='noreferrer'>Send a Message</a>
                    </article>
                </div>
                {/* END OF CONTACT PERSON */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="text" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact