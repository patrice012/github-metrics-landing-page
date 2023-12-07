"use client";

const Indicator = ({ index = 0, start = 0, handleClick = f => f }) => {
    return (
        <svg
            onClick={() => handleClick(index)}
            className={index == start ? "active" : ""}
            width=".1em"
            height=".1em"
            viewBox="0 0 30 19" //0 0 90 14
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="10" cy="10" r="10" />
        </svg>
    );
};

export const SliderLoadingIndicator = ({ data = {}, start = 0, handleClick }) => {
    return (
        <div className="start">
            {data?.map((_, index) => (
                <Indicator
                    handleClick={handleClick}
                    start={start}
                    index={index}
                    key={index}
                />
            ))}
        </div>
    );
};
