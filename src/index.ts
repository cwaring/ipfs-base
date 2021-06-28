type Base = string | undefined
type basePath = string | undefined

const checkBase = (basePath?: basePath) => {
  if (basePath) {
    const baseRx = /^\/\w.*[^/]$/
    if (!basePath.match(baseRx)) {
      console.error(`Error[ipfs-base]: basePath=${basePath}, a correctly formatted basePath should start with / and have no trailing slash, eg: /path`)
      return false
    }
  }
  return true
}

// construct current base path for ipfs/ipns variants
const getBase = (basePath?: basePath): Base => {
  if (typeof window !== 'undefined' && checkBase(basePath)) {
    const ipfsRx = /^(\/(?:ipfs|ipns)\/[^/]+)/
    const pathname = window.location.pathname
    return basePath ? ((pathname.match(ipfsRx) || [])[1] || '') + (basePath || '') : basePath
  }
}

// create <base /> element and return the current root base path if an IPFS gateway is detected
const createBase = (basePath?: basePath): Base => {
  const base = getBase(basePath)
  if (base) {
    const baseEl = document.createElement('base')
    baseEl.href = base + '/'
    document.getElementsByTagName('head')[0].appendChild(baseEl)
    return base
  }
}

export { createBase, getBase }