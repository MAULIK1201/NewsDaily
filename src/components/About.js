import React, { Component } from "react";

export default class About extends Component {
    render() {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="card-title text-center">About News Daily</h1>
                                <p className="card-text">
                                    Welcome to News Daily, your go-to source for the latest news
                                    from around the world. Our mission is to keep you informed and
                                    up-to-date with the most important events happening globally.
                                </p>
                                <p className="card-text">
                                    Our team of dedicated journalists and editors work tirelessly
                                    to bring you accurate and unbiased news. We cover a wide range
                                    of topics including business, entertainment, general news,
                                    science, sports, and technology.
                                </p>
                                <h2 className="card-title text-center">About Me</h2>
                                <p className="card-text">
                                    Hello! I'm Maulik Adhyaru, the founder of News Daily. I am currently pursuing a B.Tech in Computer Science. With a passion for technology and storytelling, I started News Daily to provide a reliable platform for news consumption. My goal is to ensure that you have access to high-quality news that you can trust.
                                </p>
                                <p className="card-text">
                                    Thank you for choosing News Daily as your news source. We
                                    appreciate your support and are committed to delivering the
                                    best news experience possible.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
