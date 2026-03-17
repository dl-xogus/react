let variants = {
    initial: { opacity: 0, x: 200 },
    animate: {
        opacity: 1, x: 0,
        transition: { duration: 1.5, type: "spring", bounce: 0.6 }
    }
};

export { variants };