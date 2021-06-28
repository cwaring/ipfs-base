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

### `createBase: (basePath?: string) => string | undefined`
Returns the ipfs|ipns base path for the application if currently loaded via a gateway url and injects a `<base href={base} />` element into the head of the DOM.

Optional `basePath` if your application is not deployed at the root of the domain. eg: `/base/path`

### `getBase: (basePath?: string) => string | undefined`
Returns the current base path with IPFS & IPNS detection.

Optional `basePath` if your application is not deployed at the root of the domain. eg: `/base/path`

Example:
- without IPFS: `getBase() => undefined`
- with IPFS: `getBase() => '/ipfs|ipns/{hash|domain}'`

With a root basePath:
- without IPFS: `getBase('/base/path') => '/base/path`
- with IPFS: `getBase('/base/path') => '/ipfs|ipns/{hash|domain}/base/path`

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