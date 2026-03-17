let variants = {
    initial: { opacity: 0, y: 100 },
    animate: {
        opacity: 1, y: 0,
        transition: { duration: 1.5, type: "spring", bounce: 0.3 }
    }
};

export { variants };