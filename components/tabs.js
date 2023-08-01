export default () => ({
    active_tab: false,
    select_tab(tab) {
        this.active_tab = tab;
        return true;
    },
    is_active(tab)
    {
        return this.active_tab == tab;
        return true;
    }
})