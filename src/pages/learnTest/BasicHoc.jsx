import React, { Component } from 'react';

const BasicHoc = WrappedComponent  => {
  return class extends Component {
    state = {
      text: '这是高阶组件传过来的值'
    }
    render () {
      return (
        <WrappedComponent text={this.state.text} {...this.props} />
      )
    }
  }
}

export default BasicHoc
