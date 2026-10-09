import { Component, type ReactNode } from "react"

/** If anything in the intro ever throws, drop it silently and show the site instead of a blank page. */
export default class IntroBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }

  static getDerivedStateFromError() {
    return { failed: true }
  }

  componentDidCatch() {
    document.documentElement.classList.remove("intro-pending")
    document.documentElement.style.overflow = ""
  }

  render() {
    return this.state.failed ? null : this.props.children
  }
}
