import React, { Component } from 'react';
import BasicHoc from './BasicHoc';

class Usual extends Component {
  render () {
    console.log(this.props)
    return (
      <div>普通组件</div>
    )
  }
}

export default BasicHoc(Usual)
