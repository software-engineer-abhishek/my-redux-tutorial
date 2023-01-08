import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'

// Importing app.css is css file to add styling
const CounterFunction = () => {

    const count = useSelector((state) => state.counter.counted)
    const dispatch = useDispatch()


return (
	<div style={{
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	fontSize: '300%',
	position: 'absolute',
	width: '100%',
	height: '100%',
	top: '-15%',
	}}>
	Counter App
	<div style={{
		fontSize: '120%',
		position: 'relative',
		top: '10vh',
	}}>
		{count}
	</div>
	<div className="buttons">
		<button style={{
		fontSize: '60%',
		position: 'relative',
		top: '20vh',
		marginRight: '5px',
		backgroundColor: 'green',
		borderRadius: '8%',
		color: 'white',
		}}
        onClick={() => dispatch(increment())}>Increment</button>
		<button style={{
		fontSize: '60%',
		position: 'relative',
		top: '20vh',
		marginLeft: '5px',
		backgroundColor: 'red',
		borderRadius: '8%',
		color: 'white',
		}}
        onClick={() => dispatch(decrement())}>Decrement</button>
	</div>
	</div>

    
)
}

export default CounterFunction
