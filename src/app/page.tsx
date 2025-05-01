// Removed 'use client'; - This page is now a Server Component by default

// Context is provided in layout.tsx, Client Components below can access it.
// import { useMyContext } from '@/context/MyContext'; // Cannot use hooks directly in Server Components

import ClientComponent from '@/components/ClientComponent';
import ServerComponent from '@/components/ServerComponent'; // This is the true Server Component
import HookComponent from "@/hooks/HookComponent"; // This uses a custom client hook
import ConnectWalletButton from '@/components/ConnectWalletButton'; // Import the wrapper

export default function Home() {
    // const { value } = useMyContext(); // Cannot use context hook here

    return (
        <main style={{ padding: '2rem' }}>
            {/* Use the client component wrapper for the button */}
            <ConnectWalletButton />

            <h1>Home Page (Server Component)</h1>
            {/* Context cannot be directly accessed here, but ClientComponent below can access it */}
            {/* <p><strong>Context in Home:</strong> {value}</p> */}
            <hr />

            {/* 1. Server Component Example */}
            {/* This component fetches data on the server and renders */}
            <ServerComponent />
            <hr />

            {/* 2. Client Component Example */}
            {/* This component runs on the client and uses context */}
            <ClientComponent />
            <hr />

            {/* 3. Custom Hook Example */}
            {/* This component runs on the client and uses a custom hook */}
            <HookComponent />
        </main>
    );
}