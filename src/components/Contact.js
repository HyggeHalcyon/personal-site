import React, { useRef, useState } from 'react';
import emailjs, { send } from '@emailjs/browser';
import { Container, Row, Col } from 'react-bootstrap';

import indexIco from '../assets/apple-command-light.png';
import letter from '../assets/letter.gif';
import lettersent from '../assets/letter-sent-2.gif';

const Contact = () => {
    const form = useRef()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [gif, setGif] = useState(letter)

    const validateForm = () => {
        setSuccess('')
        setGif(letter)
        const nameRegex = /^[A-Za-z\s]+$/ // Allows only letters and spaces in the name
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,10}$/ // Validates email format

        const nameInput = form.current.querySelector('input[name="user_name"]')
        const emailInput = form.current.querySelector('input[name="user_email"]')
        const messageInput = form.current.querySelector('textarea[name="message"]')

        if(nameInput.value.trim() == '' || emailInput.value.trim() == '' || messageInput.value.trim() == ''){
            setError('Please fill in all fields.')
            return false
        }
        if (!emailInput.value.match(emailRegex)) {
            setError('Please enter a valid email address.')
            return false
        }
        if (!nameInput.value.match(nameRegex)) {
            setError('Name must contain only letters and cannot be empty.')
            return false
        }
        if (messageInput.value.length >= 512) {
            setError('Message must be less than 512 characters.')
            return false
        }

        return true
    };

    const sendEmail = (event) => {
        event.preventDefault();

        if (validateForm()) {
            emailjs.sendForm(
                'service_94qhpnl',
                'template_zi037l9',
                form.current,
                'NgzysErUJxYR7CV3p'
            ).then(() => {
                    setSuccess('Email sent successfully!');
                    setGif(lettersent)
                    setError('');
                }).catch((error) => {
                    setError('Error sending email. Please try again later.');
                });
        }
    };

    return (
        <Container>

            <Container>
                <h1 className='text-shadow'><img src={indexIco} className="index-logo" /> Contact Me</h1>
                <p> Feel free to send me a hej! (hire me pls) </p>
            </Container>

            <Container>
                <hr className='mt-5 spec-hr' />
                <Row className="justify-content-md-center">
                    <img src={gif} className='contact-form-gif' alt="loading..." />
                    <Col md="auto">
                        <div className="contact-form">
                            <form ref={form} onSubmit={sendEmail}>
                                <label>Name</label>
                                <input type="text" name="user_name" />
                                <label>Email</label>
                                <input type="text" name="user_email" />
                                <label>Message</label>
                                <textarea name="message" />
                                {error && <p className="error">{error}</p>}
                                {success && <p className="success">{success}</p>}
                                <input type="submit" value="Send" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>

        </Container>
    );
};

export default Contact;