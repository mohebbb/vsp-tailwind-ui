export default () => ({
    accordion_active: 0,
    collapseHandler(accordion) {
        this.accordion_active = accordion;
    },
    isActive(accordion)
    {
        return this.accordion_active == accordion;
    },
})