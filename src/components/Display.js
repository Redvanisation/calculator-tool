import React from 'react';
import PropTypes from 'prop-types';


class Display extends React.Component {

  render() {
    return (
      <div className='display'>
         <p> {this.props.result} </p>

      </div>
    )
  }
}

Display.defaultProps = {
  result: '0'
}

Display.propTypes = {
  result: PropTypes.string
}

export default Display;
