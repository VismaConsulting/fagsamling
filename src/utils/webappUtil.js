import { isIOS } from "react-device-detect"

const isInStandaloneMode = () =>
  "standalone" in window.navigator && window.navigator.standalone

const shouldShowInstallMessage = () => {
  return isIOS && !isInStandaloneMode()
}

export { shouldShowInstallMessage }
