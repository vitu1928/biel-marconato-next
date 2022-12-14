import { motion } from "framer-motion";

const Transitions = ({ children }) => {
    return (
        <motion.main
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={{
                hidden: { opacity: 0, x: -200, y: 0 },
                enter: { opacity: 1, x: 0, y: 0 },
                exit: { opacity: 0, x: 0, y: -100 },
            }}
            transition={{ type: 'linear' }}
            onExitComplete={() => window.scrollTo(0, 0)}
        >
            {children}
        </motion.main>
    );
};
export default Transitions;