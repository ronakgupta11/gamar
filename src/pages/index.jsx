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
      <div className="h-16  text-3xl text-center mt-16 font-space">Trending Titles</div>
      <Gamecaraousel />
      <div className="text-3xl text-center mt-20 font-space">Our Features</div>
      <FeaturesPage />
      <div className="flex"></div>
    </>
  );
}
