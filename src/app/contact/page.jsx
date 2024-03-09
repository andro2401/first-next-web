"use client";
import React, {useEffect, useState} from 'react';
import Image from "next/image";

const Contact = () => {
    const clickHandler = (e) => {
        e.preventDefault();

    }
    return (
        <div className="contact-page">
            <div className="image-container">
                <Image src="/contact.png" alt="this is a image for the contact page" fill className="img" />
            </div>
            <div className="form-container">
                <form action="" className="form">
                    <input
                        type="text"
                        name="name"
                        className="form-input"
                        placeholder="Name and Surname"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="Email"
                        required
                    />
                    <input
                        type="text"
                        name="phone"
                        className="form-input"
                        placeholder="Phone number (Optional)"
                    />
                    <textarea name="message" cols="5" rows="5" placeholder="Message"></textarea>
                    <button
                        className="btn btn-primary"
                    >Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
