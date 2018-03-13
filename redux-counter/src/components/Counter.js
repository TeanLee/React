import React, { Component } from 'react'
// 能够保证父子之间通讯的严谨性
import PropTypes from 'prop-types'

class Counter extends Component {
    render () {
        // 从this.props 父组件中解构出 value 等
        const { value, onIncrement, onDecrement } = this.props
        return (
            <p>
                Click: {value} times
                {' '}
                <button onClick={onIncrement}>+</button>
                {' '}
                <button onClick={onDecrement}>-</button>
            </p>
        )
    }
}

// propTypes 是属性
Counter.propTypes = {
    // PropTypes 是npm包提供的方法
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default Counter