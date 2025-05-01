'use client';

import { useCounter } from './useCounter'; // Import the custom hook

export default function HookComponent() {
    // Use the custom counter hook
    const { count, increment, decrement, reset } = useCounter();

    return (
        <div style={{ marginBottom: '1rem' }}>
            <h2>Custom Hook Component (useCounter)</h2>
            <p>Count: {count}</p>
            <button onClick={increment} style={{ marginRight: '0.5rem' }}>Increment</button>
            <button onClick={decrement} style={{ marginRight: '0.5rem' }}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}