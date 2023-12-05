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

export default function App({ Component, pageProps }) {
  return (
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
            {/* <SiteHeader /> */}
            <div className="flex-1">
              <Component {...pageProps} />
            </div>
            {/* <HomePage /> */}
            {/* <FeaturesPage /> */}
            {/* <Toaster /> */}
            {/* <FooterEl /> */}

          {/* <TailwindIndicator /> */}
        </UserProvider>
      </ArweaveWalletKit>
    </ThemeProvider>
  );
}
