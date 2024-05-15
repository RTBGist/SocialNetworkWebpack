import {useState} from "react";
import './Counter.scss';

export const Counter = () => {
	const [count, setCount] = useState(0);

	return (
			<>
				<button onClick={() => setCount(prev => prev - 1)}>Min</button>
				<div>{count}</div>
				<button onClick={() => setCount(prev => prev + 1)}>Plus</button>
			</>

	)
}