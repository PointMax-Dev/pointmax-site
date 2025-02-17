import Head from "next/head";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import FAQ from "../components/FAQ";
import Download from "../components/Download";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Head>
        <title>PointMax - Simplify Spending</title>
        <meta name="description" content="PointMax helps you optimize your credit card rewards, manage your finances, and track your spending effortlessly." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Hero />
      <section id="about" className="pt-20 bg-gray-100 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">What is PointMax?</h1>
          <p className="text-lg text-gray-700">
            PointMax is a cutting-edge <strong>fintech platform</strong> designed to help users 
            <strong> maximize rewards across their credit cards effortlessly</strong>. By simplifying 
            spending management, PointMax provides <strong>clear insights into rewards, spending 
            categories, and payment optimization</strong> to ensure you never miss out on benefits.  
          </p>

          <p className="text-lg text-gray-700 mt-4">
            With our <strong>intelligent wallet</strong> feature, users can easily view <strong>balances, due dates, 
            and rewards categories</strong>, while the <strong>rewards engine</strong> identifies the best card for 
            each transaction. The premium <strong>PointMax+ service</strong> goes a step further, using <strong>NFC 
            payment optimization</strong> to automatically select the most rewarding card for every 
            contactless transaction.
          </p>

          <p className="text-lg text-gray-700 mt-4">
            Our <strong>freemium business model</strong> ensures that users get essential tools for free, 
            while PointMax+ offers enhanced features for those looking to <strong>fully optimize their 
            spending</strong>. Whether you’re earning <strong>cashback, travel points, or card-specific perks</strong>, 
            PointMax takes the guesswork out of credit card rewards.
          </p>
        </div>
      </section>
      <FAQ />
      <Download />
      <footer className="bg-gray-900 text-white py-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} PointMax. All rights reserved.</p>
      </footer>
    </div>
  );
}