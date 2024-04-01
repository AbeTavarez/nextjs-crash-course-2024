import Image from "next/image";

interface HeroProps {
  imageUrl: string;
  imageAlt: string;
  heading: string;
}

export default function Hero(props: HeroProps) {
  return (
    <div className="relative h-96">
      <Image
        src={props.imageUrl}
        alt={props.imageAlt}
        fill
        style={{ objectFit: "cover" }}
      />

      <div className="flex justify-center items-center absolute inset-0">
        <h1 className="text-8xl text-black">{props.heading}</h1>
      </div>
    </div>
  );
}
