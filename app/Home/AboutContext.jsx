import style from "./_partials/_aboutContext.scss";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

const data = [
    {
        component: <FaGithub />,
        text: "Source code",
        url: "https://github.com/patrice012/github-metrics",
    },
    {
        component: <FaXTwitter />,
        text: "Twitter/X",
        url: "https://x.com/patricedev02",
    },
    {
        component: <FaGithub />,
        text: "Github",
        url: "https://github.com/patrice012/",
    },
    {
        component: <FaLinkedinIn />,
        text: "Linkedin",
        url: "https://www.linkedin.com/in/patrice-ok",
    },
];

const FeatureItem = ({ component, text, url }) => {
    return (
        <div className="feature">
            <Link href={url} target="_blank">
                {component}
                <span>{text}</span>
            </Link>
        </div>
    );
};

export const Features = () => {
    return (
        <section className="about--features">
            <div className="container">
                <h3 className="title">
                    <span className="heading">GitHub-Metrics</span> dives deep
                    into the GitHub API to bring you insightful metrics and
                    visualizations. We access individual commits to compute
                    accurate and granular statistics.
                </h3>
                <h4 className="heading connect">Let&apos;s connect</h4>
                <div className="features">
                    {data?.map((item, index) => {
                        return <FeatureItem key={index} {...item} />;
                    })}
                </div>
            </div>
        </section>
    );
};
