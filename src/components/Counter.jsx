import React, {useState} from 'react';

/* Создания функции счетчика с помощью хука */

/* useState - это хук для управления состоянием. 
** Хуки используются только на верхнем уровне, т.е. не может использоваться внутри функций*/

const Counter = function () {
	/* Создаем 2 константы равные 0*/
	const [count, setCount] = useState(0)

	function increment() {
		setCount(count + 1)
	}
	function decrement() {
		setCount(count - 1)
	}

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	)
}

export default Counter;
