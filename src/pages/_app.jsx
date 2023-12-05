import "@/styles/globals.css";
import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";
import { ArweaveWalletKit } from "arweave-wallet-kit";
import { Footer } from "@/components/footer";
import {FooterEl} from "@/components/FooterEl"
import { Toaster } from "@/components/ui/toaster";
import { UserProvider } from "@/hooks/useUser";
import WalletPage from "@/components/WalletPage";
import { HomePage } from "@/components/HomePage";
import FeaturesPage from "@/components/FeaturesPage";
import { LivepeerConfig, createReactClient, studioProvider } from '@livepeer/react';

const client = createReactClient({
  provider: studioProvider({ apiKey: '29d3b6bc-523c-46bc-86e6-8a6d1fe02207' }),
});

export default function App({ Component, pageProps }) {
  return (
    <LivepeerConfig client={client}>

    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ArweaveWalletKit
        config={{
          permissions: ["ACCESS_ADDRESS", "SIGN_TRANSACTION", "DISPATCH"],
          ensurePermissions: true,
          appInfo: {
            name: "StarterKit",
          },
        }}
      >
        <UserProvider>
        <WalletPage/>
            <div className="flex-1">
              <Component {...pageProps} />
            </div> 
            <div className="w-full  bottom-0">
            <FooterEl />
            </div>
        </UserProvider>
      </ArweaveWalletKit>
    </ThemeProvider>
    </LivepeerConfig>

  );
}
