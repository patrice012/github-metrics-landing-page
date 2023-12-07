"use client";
import { useState, useEffect, useReducer } from "react";
import { Heading } from "../SectionHeading/Heading";
import { SliderLoadingIndicator } from "../SliderIndicator/Indicator";
import { data } from "./data";
import { CoreFeatures } from "./CoreFeatures";
import style from "./_features.scss";

const ACTION = {
    NEXT: "NEXT",
    PREVIOUS: "PREVIOUS",
    MOVE_TO: "MOVE_TO",
};

const reducer = (state, action) => {
    switch (action.type) {
        case ACTION.NEXT:
            return (state + 1) % data.length;
        case ACTION.PREVIOUS:
            return (prev - 1 + data.length) % data.length;
        case ACTION.MOVE_TO:
            return action.value;
    }
};

export const ItemsFeatures = () => {
    const [visibleCards, setVisibleCards] = useState([]);
    const [state, dispatch] = useReducer(reducer, 0);


    // update visible card index
    const updateVisibleCards = () => {
        const newVisibleCards = [];
        for (let i = state; i < state + 2; i++) {
            // allow to show cards in circular way
            const card = data[i % data.length];
            newVisibleCards.push(card);
        }
        setVisibleCards(newVisibleCards);
    };

    useEffect(() => {
        updateVisibleCards();
    }, [state]);

    const nextSlide = () => {
        dispatch({ type: ACTION.NEXT });
    };

    const prevSlide = () => {
        dispatch({ type: ACTION.PREVIOUS });
    };
    
    // auto slider
    const interval = 5000;
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, interval);
        return () => clearInterval(timer);
    }, [state]);

    // manual slider
    const handleClick = (index) => {
        dispatch({ type: ACTION.MOVE_TO, value: index });
    };

    return (
        <section className="testimonial">
            <div className="testimonial--heading container">
                <Heading
                    tag="Core Features"
                    label="Don't take our words for it"
                />
                <p className="text">
                    A et in fames ornare dictum sed in amet sit. Blandit
                    malesuada velit augue lorem. Hendrerit leo auctor arcu
                    libero dictum. Nibh sed ornare.
                </p>
            </div>
            <div className="testimonial--block container">
                <div className="testimonial--body">
                    {visibleCards?.map((item, index) => (
                        <CoreFeatures key={index} {...item} />
                    ))}
                </div>
            </div>
            {visibleCards && (
                <div className="navigation container">
                    <SliderLoadingIndicator
                        data={data}
                        start={state}
                        handleClick={handleClick}
                    />
                </div>
            )}
        </section>
    );
};
