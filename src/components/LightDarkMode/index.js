// Write your code here
import {Component} from 'react'

import './index.css'

class APP extends Component {
  state = {isDarkMode: true}

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  onHeadingColorMode = () => {
    const {isDarkMode} = this.state
    return isDarkMode ? 'dark-heading' : 'light-heading'
  }

  onModeCardClassName = () => {
    const {isDarkMode} = this.state
    return isDarkMode ? 'dark-mode' : 'light-mode'
  }

  onClickButtonText = () => {
    const {isDarkMode} = this.state
    return isDarkMode ? 'Light mode' : 'Dark mode'
  }

  render() {
    // const {isDarkMode} = this.state
    const modeClassName = this.onModeCardClassName()
    const modeHeadingClassName = this.onHeadingColorMode()
    const buttonText = this.onClickButtonText()

    return (
      <div className="bg-container">
        <div className={`card-container ${modeClassName}`}>
          <h1 className={`card-heading ${modeHeadingClassName}`}>
            Click To Change Mode
          </h1>
          <button className="button" type="button" onClick={this.onClickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default APP
// here APP name can be used as LightDarkMode
