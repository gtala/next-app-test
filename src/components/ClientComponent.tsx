'use client';

import { useMyContext } from '@/context/MyContext';

export default function ClientComponent() {
    const { value, setValue } = useMyContext();

    return (
        <div style={{ marginBottom: '1rem' }}>
            <h2>Client Component</h2>
            <p>Context value: {value}</p>
            <button onClick={() => setValue('Updated from ClientComponent')}>Update Context</button>
        </div>
    );
}