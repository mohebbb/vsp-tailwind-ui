export default () => ({
    open: false,
    show() {
        this.open = true
    },
    hidden() {
        setTimeout(() => {
            this.open = false
        }, 300);
    },
    hidden_fast() {
        this.open = false
    }
})