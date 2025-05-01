'use client';

import * as React from 'react';
import {
  RainbowKitProvider,
  getDefaultWallets,
  getDefaultConfig,
} from '@rainbow-me/rainbowkit';
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { WagmiProvider } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Get project ID from WalletConnect Cloud (https://cloud.walletconnect.com/)
// It's recommended to store this in environment variables
const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID;

if (!projectId) {
  console.warn('Warning: NEXT_PUBLIC_WC_PROJECT_ID is not set. WalletConnect features will be limited.');
  // Provide a default dummy ID for local development if needed, but functionalities might be broken.
  // throw new Error("NEXT_PUBLIC_WC_PROJECT_ID is not set");
}

const { wallets } = getDefaultWallets();

// Define supported chains
const supportedChains = [mainnet, sepolia] as const; // Use 'as const' for stricter type checking

// Configure wagmi
const config = getDefaultConfig({
  appName: 'Next App Test',
  projectId: projectId || 'DUMMY_PROJECT_ID', // Provide dummy if not set, but warn user
  wallets: [
    ...wallets,
    {
      groupName: 'Other',
      wallets: [argentWallet, trustWallet, ledgerWallet],
    },
  ],
  chains: supportedChains,
  ssr: true, // Enable SSR support for wagmi
});

const queryClient = new QueryClient();

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
} 