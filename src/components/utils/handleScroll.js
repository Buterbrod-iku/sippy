export const handleClickScrollUp = (elementById) => {
    const element = document.getElementById(elementById);
    if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
    }
};