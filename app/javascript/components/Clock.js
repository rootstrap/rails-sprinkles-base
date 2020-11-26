import React from "react"
import PropTypes from "prop-types"
class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date() })
    }, 1000)
  }

  render () {
    return (
      <div className="clock">
        {this.state.time.toString()}
      </div>
    );
  }
}

Clock.propTypes = {
  seconds: PropTypes.bool,
  timezone: PropTypes.string
};
export default Clock
