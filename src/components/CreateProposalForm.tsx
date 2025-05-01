'use client';

import React, { useState, useEffect } from 'react';
import { 
    useAccount, 
    useWriteContract, 
    useWaitForTransactionReceipt, 
    type BaseError 
} from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { parseAbi } from 'viem';

const contractAddress = '0xf2d17690cb47732604587c9650560e9ba2761cad';

// Minimal ABI for the createProposal function only
const contractAbi = parseAbi([
    'function createProposal(string memory _title, string memory _description) public',
]);

export default function CreateProposalForm() {
    const { address, isConnected } = useAccount();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const { data: hash, error, isPending, writeContract } = useWriteContract();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!title || !description) {
            alert('Please fill in both title and description.');
            return;
        }
        writeContract({
            address: contractAddress,
            abi: contractAbi,
            functionName: 'createProposal',
            args: [title, description],
            chainId: sepolia.id,
        });
    };

    // Monitor the transaction using the hash
    const { isLoading: isConfirming, isSuccess: isConfirmed } = 
        useWaitForTransactionReceipt({ 
            hash, 
        });

    // Clear form on successful confirmation
    useEffect(() => {
        if (isConfirmed) {
            setTitle('');
            setDescription('');
        }
    }, [isConfirmed]);

    if (!isConnected) {
        return <div>Please connect your wallet to create a proposal.</div>;
    }

    return (
        <div>
            <h3>Create New Proposal</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input 
                        id="title"
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                        disabled={isPending || isConfirming}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea 
                        id="description"
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        required
                        disabled={isPending || isConfirming}
                    />
                </div>
                <button 
                    type="submit" 
                    disabled={!title || !description || isPending || isConfirming}
                >
                    {isPending ? 'Sending...' : (isConfirming ? 'Confirming...' : 'Create Proposal')}
                </button>
            </form>

            {hash && <div style={{ marginTop: '1rem', wordBreak: 'break-all' }}>Transaction Hash: {hash}</div>}
            {isConfirming && <div style={{ marginTop: '0.5rem' }}>Waiting for confirmation...</div>}
            {isConfirmed && <div style={{ marginTop: '0.5rem', color: 'green' }}>Transaction confirmed!</div>}
            {error && (
                <div style={{ color: 'red', marginTop: '1rem' }}>
                    Error: {(error as BaseError)?.shortMessage || error.message}
                </div>
            )}
        </div>
    );
} 