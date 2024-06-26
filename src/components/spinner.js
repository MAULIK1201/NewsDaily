import React, { Component } from 'react'
import spinner from './Spinner.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center h-5'>
        <img src={spinner} alt='spinner loader' style={{height:'45%'}}></img>
      </div>
    )
  }
}
