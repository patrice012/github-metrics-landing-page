export const CoreFeatures = ({ imgUrl, text }) => {
    return (
        <div className="bubble">
            <div className="img--container">
                <img src={imgUrl} alt="metrics image" />
            </div>
            <div className="text--container">
                <p className="colorful-text">{text}</p>
            </div>
        </div>
    );
};
