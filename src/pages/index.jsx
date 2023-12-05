import WalletPage from "@/components/WalletPage";
import { InputForm } from "@/components/input-form";
import { siteConfig } from "@/config/site";
import Head from "next/head";
import { HomePage } from "@/components/HomePage";
import FeaturesPage from "@/components/FeaturesPage";
import Gamecaraousel from "@/components/Gamecaraousel";
export default function IndexPage() {
  return (
    <>
      <Head>
        <title>{`Home - ${siteConfig.name}`}</title>
      </Head>
      
      <HomePage />
      <Gamecaraousel/>
      <FeaturesPage />
      <div className="flex">
      
      </div>
    </>
  );
}
