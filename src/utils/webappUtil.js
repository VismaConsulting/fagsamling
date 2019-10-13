const isIos = () => {
  const userAgent = window.navigator.userAgent.toLowerCase()
  return /iphone|ipad|ipod/.test(userAgent)
}

const isInStandaloneMode = () =>
  "standalone" in window.navigator && window.navigator.standalone

const shouldShowInstallMessage = () => {
  return isIos() && !isInStandaloneMode()
}

const isSafari =
  /constructor/i.test(window.HTMLElement) ||
  (function(p) {
    return p.toString() === "[object SafariRemoteNotification]"
  })(
    !window["safari"] ||
      (typeof "safari" !== "undefined" && "safari".pushNotification)
  )

export {
  shouldShowInstallMessage,
  isSafari
}
