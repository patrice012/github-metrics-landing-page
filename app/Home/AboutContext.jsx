import style from './_partials/_aboutContext.scss'
import Image from 'next/image';

const data = [
    {
        url: "/about/ph_code.png",
        text: "Context Manager",
    },
    {
        url: "/about/ph_code.png",
        text: "Research Assistant",
    },
    {
        url: "/about/ph_code.png",
        text: "Code Interpreter",
    },
    {
        url: "/about/ph_code.png",
        text: "Research Assistant",
    },
];

const FeatureItem = ({ url, text }) => {
    return (
        <div className="feature">
            <img src={url}/>
            <span>{text}</span>
        </div>
    );
};

export const Features = () => {
    return (
        <section className="about--features">
            <div className="container">
                <h3 className="title">
                    We are Kalami Studio, pioneering a revolutionary approach to
                    AI interaction through cutting-edge tools and innovation.
                </h3>
                <div className="features">
                    {data?.map((item, index) => {
                        return <FeatureItem key={index} {...item} />;
                    })}
                </div>
            </div>
        </section>
    );
};
