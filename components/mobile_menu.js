export default () => ({
    mobile_menu: false,
    open: false,
 
    toggle() {
        this.open = ! this.open;
        this.mobile_menu = ! this.mobile_menu;
    },
    close()
    {
        this.open = false;
        this.mobile_menu = false;
    }
})