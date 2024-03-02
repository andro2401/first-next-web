import Image from "next/image";

const Home = () => {
    return (
        <div className="hero-wrapper">
        <div className="text-container">
            <h1>Creative thought agency.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem fugit libero necessitatibus recusandae
                rem veritatis?</p>
            <div className="button-wrapper">
                <button className="btn btn-primary">Learn more</button>
                <button className="btn btn-secondary">Contact</button>
            </div>
            <div className="brands">
                <Image src="/brands.png"
                       alt="brands image"
                       fill
                       className="brands-img"
                />
            </div>
        </div>
        <div className="image-container">
            <Image src="/hero.gif"
                   alt="this is a hero gif of a light bulb"
                    fill
                   className="hero-img"
            />
        </div>
    </div>
    );
};

export default Home;
