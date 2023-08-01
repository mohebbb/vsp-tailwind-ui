export default () => ({
    mobile_menu: false,
    toggle() {
        this.mobile_menu = ! this.mobile_menu;
    },
    close()
    {
        this.mobile_menu = false;
    }
})