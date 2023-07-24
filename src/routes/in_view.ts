import type { ActionReturn } from "svelte/action";

export default function inView(node: Element, params: IntersectionObserverInit = {}): ActionReturn {
    const handleIntersect: IntersectionObserverCallback = e => {
        const v = e[0].isIntersecting ? "focusin" : "focusout";
        node.dispatchEvent(new CustomEvent(v));
    };
    const observer = new IntersectionObserver(handleIntersect, params);
    observer.observe(node);

    return {
        destroy() {
            if (observer) observer.disconnect();
        }
    };
}
