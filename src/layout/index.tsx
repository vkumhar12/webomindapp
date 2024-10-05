// import { useAppContext } from "contexts";
import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
};
export default function PublicLayout({
  children = <></>,
  title = "WEBOMINDAPPS",
  description,
  ogImage,
}: Props) {
  return (
    <>
      <Head>
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={ogImage} />
      </Head>
      <main>
        <div>
          <Navbar />
        </div>
        {children}
        <div>
          <Footer />
        </div>
      </main>
    </>
  );
}
