// Removed 'use client'; directive
// Removed unused client-side imports if any

export default async function ServerComponent() {
    // Fetch data directly on the server
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json());

    return (
        <div style={{ marginBottom: '1rem' }}>
            <h2>Server Component (Server-Side Fetch)</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}