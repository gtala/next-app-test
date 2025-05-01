// Removed 'use client'; - This page is now a Server Component by default

// Context is provided in layout.tsx, Client Components below can access it.
// import { useMyContext } from '@/context/MyContext'; // Cannot use hooks directly in Server Components

import ClientComponent from '@/components/ClientComponent';
import ServerComponent from '@/components/ServerComponent'; // This is the true Server Component
import HookComponent from "@/hooks/HookComponent"; // This uses a custom client hook
import ConnectWalletButton from '@/components/ConnectWalletButton'; // Import the wrapper
import ProposalsList from '@/components/ProposalsList'; // Import the new component
import CreateProposalForm from '@/components/CreateProposalForm'; // Import the form component

export default function Home() {
    // const { value } = useMyContext(); // Cannot use context hook here

    return (
        <div className="container">
            <header style={{ marginBottom: '2rem' }}>
                <ConnectWalletButton />
            </header>
            
            <h1>Governance Proposals</h1>
            <hr />

            <section className="section">
                <CreateProposalForm />
            </section>
            
            <section className="section">
                <ProposalsList />
            </section>

            {/* Optional: Keep other components if needed for demo, or remove */}
            {/* 
            <hr />
            <section className="section"> 
                <ServerComponent />
            </section>
            <hr />
            <section className="section">
                <ClientComponent />
            </section>
            <hr />
            <section className="section">
                <HookComponent />
            </section>
            */}
        </div>
    );
}