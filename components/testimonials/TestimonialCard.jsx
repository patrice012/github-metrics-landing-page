import { motion } from "framer-motion";

const itemsVariants = {
    initial: {
        opacity: 0.5,
        x: 50,
    },
    visible: {
        x: 0,
        opacity: 1,
    },
};

export const TestimonialCard = ({ text, user, role }) => {
    return (
        <motion.div
            variants={itemsVariants}
            initial="initial"
            animate="visible"
            className="bubble"
        >
            <div className="bubble--text">
                <p className="text--content">"{text}"</p>
            </div>
            <div className="bubble-user">
                <h3 className="colorful-text">{user}</h3>
                <p className="bubble-user-role">{role}</p>
            </div>
        </motion.div>
    );
};
