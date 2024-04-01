import Hero from "@/components/hero";
import Link from "next/link";

const img = '/jason-goodman-vbxyFxlgpjM-unsplash.jpg';

export default function Home() {
  return (
    <div className="mx-auto">

      <Hero imageUrl={img}  imageAlt="Group of people having a meeting" heading="Core Members"/>



      <div className="border p-10 flex flex-col justify-center items-center rounded bg-slate-800 text-white mt-48 mx-60 h-80 shadow-xl">

        <div className="text-2xl font-bold underline mb-10">Best fast growing app!</div>

        <div className="text-2xl font-bold animate-bounce">
          Get started for free!
        </div>

        <div className="font-bold bg-green-500 p-3 rounded text-white mt-5 shadow-md hover:bg-green-400 hover:cursor-pointer">
          <Link href="/api/auth/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
