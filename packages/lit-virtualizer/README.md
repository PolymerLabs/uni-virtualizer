# @lit-labs/virtualizer

`@lit-labs/virtualizer` provides virtual scrolling for [LitElement](https://lit-element.polymer-project.org) and [lit-html](https://lit-html.polymer-project.org).

This package provides two main exports:

* `<lit-virtualizer>`: a Lit element that takes an array of data items and an item template and renders items on the fly as the user scrolls, keeping only enough items in the DOM to fill the viewport.

* `scroll`: a Lit directive that turns its parent element into a virtually scrolling container. This is useful primarily if you're using `lit-html` without `LitElement` and want to keep your imports to a minimum.

You can find [documentation](#documentation) below, or view live [examples](https://polymerlabs.github.io/uni-virtualizer/).

⚠️ `@lit-labs/virtualizer` is in prerelease. All changes may be breaking until 1.0.

## Getting Started

Get this package:

```
npm i @lit-labs/virtualizer
```

The package is shipped using [ES modules](https://developers.google.com/web/fundamentals/primers/modules). It also uses [bare specifiers](https://github.com/WICG/import-maps#bare-specifiers) to refer to other node modules such as lit-html. Shipping the package this way affords you control as a developer over your bundle delivery. For example, you could do code splitting. You will, however, have to *resolve* these module names when bundling your code.

As an example, here's how you can do module resolution with [rollup](https://rollupjs.org).

*index.html*
```html
...
<script type="module" src="build/main.js">
...
```

*src/main.js*
```js
import { LitVirtualizer } from '@lit-labs/virtualizer';

// use <lit-virtualizer> element or LitVirtualizer class
```

Install rollup and the rollup-plugin-node-resolve plugin.
```
npm i rollup rollup-plugin-node-resolve
```

*rollup.config.js*
```js
import resolve from 'rollup-plugin-node-resolve';

export default [
  {
    input: 'src/main.js',
    output: {
      dir: 'build',
      format: 'esm'
    },
    plugins: [
      resolve(),
    ]        
  }
];
```

Roll it up.
```
npx rollup --config
```

Rollup will output build/main.js, with properly resolved module names.

Other small chunks will also be present. `@lit-labs/virtualizer` utilizes [dynamic imports](https://developers.google.com/web/updates/2017/11/dynamic-import) in a few places to avoid loading code unnecessarily. This allows rollup to split the code and emit several chunks.

## Documentation

### `scroll` directive

`scroll` is a Lit directive that turns its parent element into a virtual scrolling area. It requires a `renderItem` function for rendering virtual children, and an array of items to render.

Say we are building an index page for a blog, and need a list of link to all blog posts. The blog has thousands of posts, so we want the list to have virtual scrolling. Here's our index.html...
```html
<body>
  <h1>All posts</h1>
  <div id="post-list"></div>

  <script type="module" src="index.js"></script>
</body>
```

...and here's how we can use the `scroll` directive to render the list of post links.
```js
import scroll from 'lit-virtualizer'
import { html, render } from 'lit-html'

// Post metadata that we want to virtually scroll.
const posts = [
  {title: "10 essential products", link: "./post-1", date: "June 20 2019"},
  {title: "How to tie a tie", link: "./post-2", date: "June 21 2019"},
  ...
];

// Building our post link template.
// renderPostLink is a function that takes an item (our metadata)
// and uses the `html` tag to build DOM structure with it.
const renderPostLink = post => html`
  <div>
    <h2><a href="${post.link}">${post.title}</a></h2>
    <p>${post.date}</p>
  </div>
`;

// Pass the post metadata and the render to the scroll directive...
const templateResult = html`${
  scroll({
    items: posts,
    renderItem: renderPostLink
  })
}`

// ... and render it into our container!
render(templateResult, document.querySelector("#post-list"));
```

In this example, just `items` and `renderItem` were configured. You can also specify the scroll target and whether or not to use shadow DOM.



### `scroll` config options

#### `items`

Type: `Array<T>`

A list of items to display via the renderItem function. The type of the items should match the first argument of the renderItem function.

#### `renderItem`

Type: `(item: T, index?: number) => TemplateResult`

A function that returns a Lit `TemplateResult`. It will be used to generate the DOM for each item in the virtual list.

#### `scrollTarget`

Type: `Element | Window`

Optional. An element that receives scroll events for the virtual scroller. If not specified, the directive's parent element will be the target.

#### `totalItems`

Type: `number`

Optional. Limit for the number of items to display. Defaults to the length of the items array.

#### `scrollToIndex`

Type: `{index: number, position?: string}`

where position is: `'start'|'center'|'end'|'nearest'`

Optional. Scroll to the item at the give index. Place the item at the given position within the scroll view. For example, if index is `100` and position is `end`, then the bottom of the item at index 100 will be at the bottom of the scroll view. Position defaults to `start`.

Note: Rendering with `scrollToIndex` will cause the scroll view to fix at the given position until the user manually scrolls. If a lit-html template using the `scroll` directive is re-rendered, note that the view will be re-scrolled to respect the given `scrollToIndex` option. Take care to set or unset the `scrollToIndex` option upon subsequent re-renders for the desired behavior.

### Events

#### `visibilityChanged` event

This event is an instance of `RangeChangeEvent`, which has the following properties regarding the currently rendered range of items:

* `first`: the index of the first item currently rendered. This may not be the first visible item.
* `last`: the index of the last item currently rendered. This may not be the first visible item.
* `firstVisible`: the index of the first item visible. That is, the first item to intersect the scroll view.
* `lastVisible`: the index of the last item visible. That is, the last item to intersect the scroll view.

This event is fired when any of these values change, e.g. because the user scrolled. To listen for this event, attach a listener to the host of the `scroll` directive. You can do this inline with lit-html.

Example usage:

```ts
const handleEvent = (e) => {
  console.log("The first visible index is", e.firstVisible);
  console.log("The last visible index is", e.lastVisible);
}

const example = (contacts) => html`
  <section @rangechanged=${handleEvent}>
    ${scroll({
      items: contacts,
      renderItem: ({ mediumText }) => html`<p>${mediumText}</p>`,
    })}
  </section>
`;
```

---

### `<lit-virtualizer>` element

`<lit-virtualizer>` provides the same functionality as the `scroll` directive in element form, which you may find more ergonomic.

Here's how to redo the blog post example, using `<lit-virtualizer>` instead. Construction of the final `templateResult` is the only difference:

```js
const templateResult = html`
  <lit-virtualizer
    .items=${posts}
    .renderItem=${renderPostLink}
  ></lit-virtualizer>
`
render(templateResult, document.querySelector("#post-list"));
```

With `<lit-virtualizer>`, you pass configuration as properties to the HTML Element.

### `<lit-virtualizer>` API

#### `items` property

Type: `Array<T>`

A list of items to display via the renderItem function. The type of the items should match the first argument of the renderItem function.

#### `renderItem` property

Type: `(item: T, index?: number) => TemplateResult`

A function that returns a Lit `TemplateResult`. It will be used to generate the DOM for each item in the virtual list.

#### `scrollTarget` property

Type: `Element | Window`

Optional. An element that receives scroll events for the virtual scroller. If not specified, the `<lit-virtualizer>` element itself will be the scroll target.

#### `scrollToIndex` method

Type: `(index: number, position?: string) => void`

where position is: `'start'|'center'|'end'|'nearest'`

Scroll to the item at the give index. Place the item at the given position within the scroll view. For example, if index is `100` and position is `end`, then the bottom of the item at index 100 will be at the bottom of the scroll view. Position defaults to `start`.

Example usage:

```ts
const virtualizer = document.createElement('lit-virtualizer');
virtualizer.items = contacts;
virtualizer.renderItem = renderContactItem;
// Scroll to the 100th item and put it in the center of the scroll view.
virtualizer.scrollToIndex(100, 'center');
```

## Complete example

*index.html*
```html
<html>
  <script type="module" src="build/index.js"></script>
  <contact-list></contact-list>
</html>
```

*src/index.js* (uncompiled)
```javascript
import '@lit-labs/virtualizer';
import { LitElement, html } from 'lit-element';

class ContactList extends LitElement {
    static get properties() {
      return {
        data: {type: Array}
      };
    }

    constructor() {
      super();
      this.data = [];
    }

    async firstUpdated() {
      this.data = [
        {name: 'Name 1', phone: '123 456-7890'},
        {name: 'Name 2', phone: '555 555-5555'}
      ]
    }

    render() {
        return html`
            <lit-virtualizer
              .scrollTarget=${window}
              .items=${this.data}
              .renderItem=${(contact) => html`
                <div><b>${contact.name}</b>: ${contact.phone}</div>
              `}>
            </lit-virtualizer>
        `;
    }
}

customElements.define('contact-list', ContactList);
```