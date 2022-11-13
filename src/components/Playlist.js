import React from "react";
import "./card.css";

const Playlist = () => {
    return (
        <section id="card">
            <br />
            <br />
            <div className="container-card">
                <div className="contacts">
                    <div className="contact-card">
                        <iframe
                            src="https://www.youtube.com/embed/gSzCvp8sh7g"
                            title="YouTube video player"
                            width={350}
                            height={200}
                            frameborder="0"
                            allowfullscreen
                        ></iframe>
                        <br />
                        <a href="https://www.youtube.com/embed/gSzCvp8sh7g">
                        Investing Masterclass by Vijay Kedia
                        </a>
                    </div>

                    <div className="contact-card">
                        <iframe
                            src="https://www.youtube.com/embed/oSGld-eY7BM"
                            title="YouTube video player"
                            width={350}
                            height={200}
                            frameborder="1px solid black"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                        <br />
                        <a href="https://www.youtube.com/embed/oSGld-eY7BM">
                            Become a Master of Finance with Harvard Professor Mihir Desai
                        </a>
                    </div>

                    <div className="contact-card">
                        <iframe
                            src="https://www.youtube.com/embed/tHxwyWnNu0c"
                            title="YouTube video player"
                            frameborder="0"
                            width={350}
                            height={200}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                        <br />
                        <a href="https://www.youtube.com/embed/tHxwyWnNu0c">
                            How to Start Investing in your 20s | CA Rachana Ranade
                        </a>
                    </div>
                </div>
            </div>
            <br />
        </section>
    );
};

export default Playlist;
