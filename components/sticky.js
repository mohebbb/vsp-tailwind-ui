export default () => ({
    hand_sticky(el, styles) {
        styles = styles.split(/\s+/);
        var newEl = document.createElement("div");
        newEl.classList.add("myObserver");
        var ref = el;
        insertBefore(newEl, ref);
        function insertBefore(el, referenceNode) {
            referenceNode.parentNode.insertBefore(el, referenceNode);
        }
        
        var observer = new IntersectionObserver(
            function (entries) {
              if (entries[0].intersectionRatio === 0) {
                styles.forEach(style => {
                    el.classList.add(style);
                });
                //newEl.classList.add("sticky-observer");
              } else if (entries[0].intersectionRatio === 1) {
                // el.classList.remove(styles);
                styles.forEach(style => {
                    el.classList.remove(style);
                });
                //newEl.classList.remove("sticky-observer");
              }
            },
            { threshold: [0, 1] }
        );
        
        observer.observe(document.querySelector(".myObserver"));
    }
})