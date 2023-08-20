import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  buttonText = () => {
    this.setState(prevState => ({isSubscribe: !prevState.isSubscribe}))
  }

  getButtonText = () => {
    const {isSubscribe} = this.state
    return isSubscribe ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonTextEl = this.getButtonText()

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <h1 className="message">Thank you! Happy Learning</h1>
        <button type="button" className="button" onClick={this.buttonText}>
          {buttonTextEl}
        </button>
      </div>
    )
  }
}

export default Welcome
