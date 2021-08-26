import React from 'react';

/* Создания функции счетчика с помощью класса не используя хука */

class ClassCounter extends React.Component {
	/* создаем конструкцию с константей count = 0 */
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		}
		/* bind нужен для привязки к фунции */
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}

    increment() {
    	/* это функция */
    	this.setState({count: this.state.count + 1})
	}
	decrement() {
		this.setState({count: this.state.count - 1})
	}

    render() {
        return (
            <div>
				<h1>{this.state.count}</h1>
				<button onClick={this.increment}>Increment</button>
				<button onClick={this.decrement}>Decrement</button>
			</div>
        );
    }
}


export default ClassCounter;
