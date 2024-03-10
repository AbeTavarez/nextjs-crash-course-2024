import Hero from "@/components/hero";

const url = 'https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const img = '/jason-goodman-vbxyFxlgpjM-unsplash.jpg';

export default function Home() {
  return (
    <div className="mx-auto">

      <Hero imageUrl={img}  imageAlt="Group of people having a meeting" heading="Core Members"/>
    </div>
  );
}
