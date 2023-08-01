export default () => ({
    more_btn: false,
    more_text_open() {
        this.more_btn = true
    },
    more_text_close()
    {
        return this.more_btn == false
    }
})