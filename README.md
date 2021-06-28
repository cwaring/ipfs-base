# ipfs-base
Browser utility lib to configure web3 apps for IPFS hosting

```sh
npm i ipfs-base -S
```

### API
---
```js
import { createBase, getBase } from 'ipfs-base'
```

### `createBase: () => string | undefined`
Returns the ipfs|ipns base path for the application if currently loaded via a gateway url and injects a `<base href={base} />` element into the head of the DOM.

### `getBase: () => string | undefined`
Returns the current base path which with IPFS & IPNS detection.

Example:
- without IPFS: `getBase() => undefined`
- with IPFS: `getBase() => '/ipfs/ipns/{hash|domain}'`

### Usage with Vue Router

```js
import { createRouter, createWebHistory } from 'vue-router'
import { createBase } from 'ipfs-base'

const router = createRouter({
  history: createWebHistory(createBase()),
  routes
})
```


### Usage with React Router

TODO: