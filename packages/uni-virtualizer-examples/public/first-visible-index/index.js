import { render, html } from 'lit-html';
import { scroll } from 'lit-virtualizer/lib/scroll.js';

const example = (contacts) => html`
    <section style="height: 100%;">
        ${scroll({
            items: contacts,
            template: ({ mediumText }, i) => 
                html`<div data-i=${i} style="border-top: 3px solid blue; border-bottom: 3px dashed red; width: 100%;">${i}) ${mediumText}</div>`,
            // scrollTarget: window,
            useShadowDOM: true
        })}
    </section>
`;

(async function go() {
    const contacts = await(await fetch('../shared/contacts.json')).json();
    render(example(contacts), document.querySelector("#container"));
})();

window.getVisibleIndices = () => {
    const virtualized = document.querySelector("section");
    const children = virtualized.children;
    const translateY = el => el.style.transform.match(/translate\(.*,\D*(\d+)px\)/)[1];
    let first, last;
    // The first child will always be a helper element that should be skipped.
    for (let i = 1; i < children.length; i++) {
        const child = children[i];
        // Virtualized items are translated within the container. Get the translation value.
        const childY = translateY(child);
        // Some nodes are recycled for efficiency, and will have display: hidden
        // until they are used. Skip them.
        if (child.style.display === "hidden") {
            continue;
        }
        if (childY <= virtualized.scrollTop) {
            first = Number(child.dataset.i);
        }
        if (childY < virtualized.scrollTop + virtualized.clientHeight) {
            last = Number(child.dataset.i);
        }
    }
    return { first, last };
}