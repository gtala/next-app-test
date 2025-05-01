import './globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import { MyProvider } from '@/context/MyContext';
import { Web3Provider } from '@/providers/Web3Provider';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <body>
        <Web3Provider>
          <MyProvider>{children}</MyProvider>
        </Web3Provider>
      </body>
      </html>
  );
}