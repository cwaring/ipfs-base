type Base = string | undefined

// construct current base path for ipfs/ipns variants
const getBase = (): Base => {
  if (typeof window !== 'undefined') {
    const ipfsRx = /^(\/(?:ipfs|ipns)\/[^/]+)/
    const pathname = window.location.pathname
    return (pathname.match(ipfsRx) || [])[1] || undefined
  }
}

// create <base /> element and return the current root base path if an IPFS gateway is detected
const createBase = (): Base => {
  const base = getBase()
  if (base) {
    const baseEl = document.createElement('base')
    baseEl.href = base + '/'
    document.getElementsByTagName('head')[0].appendChild(baseEl)
    return base
  }
}

export { createBase, getBase }