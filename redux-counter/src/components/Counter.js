import React, { Component } from 'react'
// 能够保证父子之间通讯的严谨性
import PropTypes from 'prop-types'

class Counter extends Component {
    // constructor(props) {
    //     super(props)
    //     // 新生成的函数一定要添加bind   可以在constructor中声明，也可以在行内声明
    //     this.incrementIfOdd = this.incrementIfOdd.bind(this)
    // }
    incrementIfOdd() {
        if(this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }
    incrementAsync() {
        setTimeout(this.props.onIncrement, 3000)
    }
    render () {
        // 从this.props 父组件中解构出 value 等
        const { value, onIncrement, onDecrement } = this.props
        return (
            <p>
                Click:   {value} times
                {' '}
                <button onClick={onIncrement}>+</button>
                {' '}
                <button onClick={onDecrement}>-</button>
                {' '}
                <button onClick={this.incrementIfOdd.bind(this)}>Increment if odd.</button>
                <button onClick={this.incrementAsync.bind(this)}>Increment async.</button>
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