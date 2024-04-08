import React from 'react';
import Image from "next/image";

export const metadata = {
    title: 'About page',
    description: 'About page description',
}
const About = () => {
    return (
        <div className="about-wrapper">
            <div className="text-wrap">
                <span>About Agency</span>
                <h1>We create digital ideas that are bigger, bolder, braver and better</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aperiam assumenda autem consectetur corporis deserunt dicta dolor dolorem dolores doloribus ducimus eos error esse est eveniet facilis fuga illo inventore ipsa magni maxime nam neque odio, quae quas qui quod quos repellendus reprehenderit rerum velit veniam voluptas voluptatem. Nam, sit.</p>
                <div className="feature">
                    <div className="box">
                        <h3>10 K +</h3>
                        <p>Years of experience</p>
                    </div>
                    <div className="box">
                        <h3>234 K+</h3>
                        <p>People reached</p>
                    </div>
                    <div className="box">
                        <h3>5 K+</h3>
                        <p>Services and plugins</p>
                    </div>
                </div>
            </div>
            <div className="img-wrap">
                <Image src="/contact.png"
                       alt="about image"
                       fill
                       className="img"
                />
            </div>
        </div>
    );
};

export default About;
