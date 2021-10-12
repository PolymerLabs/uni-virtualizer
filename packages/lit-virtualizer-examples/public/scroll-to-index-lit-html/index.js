import { render, html } from 'lit';
import { virtualize, virtualizerRef } from '@lit-labs/virtualizer/virtualize.js';

import { runBenchmarkIfRequested } from '../../lib/benchmark.js';

const example = (contacts, scrollPosition = null) => html`
    ${virtualize({
        scroller: true,
        items: contacts,
        renderItem: ({ longText, index }) => html`<p>${index}) ${longText}</p>`,
        scrollPosition: scrollPosition
    })}
`;

let contacts, virtualizer;

(async function go() {
    contacts = await(await fetch('../shared/contacts.json')).json();
    const container = document.getElementById('container');
    render(example(contacts), container);
    runBenchmarkIfRequested(container);
})();

window.scrollElementIntoView = ({index, block, behavior}) => {
    if (!virtualizer) {
        virtualizer = document.getElementById('container')[virtualizerRef];
    }
    virtualizer.scrollElementIntoView({index, block, behavior});
}