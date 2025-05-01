'use client';

import { useReadContract } from 'wagmi';
import { sepolia } from 'wagmi/chains';

const contractAddress = '0xf2d17690cb47732604587c9650560e9ba2761cad';

// ABI generated from the provided Solidity code
const contractAbi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "creator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "title",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "description",
        "type": "string"
      }
    ],
    "name": "ProposalCreated",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_title",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_description",
        "type": "string"
      }
    ],
    "name": "createProposal",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllProposals",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "id",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "creator",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "title",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "description",
            "type": "string"
          }
        ],
        "internalType": "struct ProposalContract.Proposal[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "nextId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "proposals",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "creator",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "title",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "description",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const; // Use 'as const' for stricter typing with wagmi

// Define the structure matching the contract's Proposal struct
// Note: wagmi returns BigInt for uint types
type Proposal = {
  id: bigint;
  creator: `0x${string}`;
  title: string;
  description: string;
};

export default function ProposalsList() {
  const { data: proposals, error, isLoading, isError } = useReadContract({
    address: contractAddress,
    abi: contractAbi,
    functionName: 'getAllProposals',
    chainId: sepolia.id, // Specify the chain
  });

  if (isLoading) return <div>Loading proposals...</div>;
  if (isError) return <div>Error loading proposals: {error?.message}</div>;

  // Ensure data is treated as the expected array type
  const proposalList = proposals as Proposal[] | undefined;

  return (
    <div className="proposal-list">
      <h2>Proposals</h2>
      {proposalList && proposalList.length > 0 ? (
        <ul>
          {proposalList.map((proposal) => (
            <li key={proposal.id.toString()}>
              <div><strong>ID:</strong> {proposal.id.toString()}</div>
              <div><strong>Title:</strong> {proposal.title}</div>
              <div><strong>Creator:</strong> {proposal.creator}</div>
              <div><strong>Description:</strong> {proposal.description}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No proposals found.</p>
      )}
    </div>
  );
} 