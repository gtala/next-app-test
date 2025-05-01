# Simple Governance Proposal dApp

This is a basic decentralized application (dApp) built with Next.js that allows users to connect their wallets, view existing governance proposals, and create new ones on the Sepolia testnet.

## Smart Contract

- **Network:** Sepolia Testnet
- **Address:** `0xf2d17690cb47732604587c9650560e9ba2761cad`
- **Etherscan:** [https://sepolia.etherscan.io/address/0xf2d17690cb47732604587c9650560e9ba2761cad#code](https://sepolia.etherscan.io/address/0xf2d17690cb47732604587c9650560e9ba2761cad#code)

## Technologies Used

- **Framework:** Next.js
- **Language:** TypeScript
- **Wallet Integration:** wagmi
- **Wallet Connection UI:** RainbowKit
- **Ethereum Interaction:** viem (used by wagmi)

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- Yarn package manager
- A crypto wallet extension in your browser (e.g., MetaMask) configured for the Sepolia testnet.
- Sepolia ETH for gas fees (you can get some from a faucet).

### Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd <repo-directory>
    ```

2.  **Install dependencies:**
    ```bash
    yarn install
    ```

3.  **Set up Environment Variables:**
    *   You need a WalletConnect Project ID for RainbowKit to function correctly.
    *   Get a Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/).
    *   Create a file named `.env.local` in the root of the project.
    *   Add your Project ID to the file:
        ```
        NEXT_PUBLIC_WC_PROJECT_ID=YOUR_PROJECT_ID_HERE
        ```

### Running the dApp

1.  **Start the development server:**
    ```bash
    yarn dev
    ```

2.  Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

3.  Connect your wallet using the "Connect Wallet" button.

4.  You should now be able to view existing proposals and create new ones using the form.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
