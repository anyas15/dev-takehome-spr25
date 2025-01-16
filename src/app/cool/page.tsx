import Image from "next/image";

export default function Kewl() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-primary text-white gap-5">
      <div className="relative">
        <Image
          src="/ferrari sf23 transparent.png"
          alt="Ferrari SF23"
          width={400}
          height={300}
          className="rounded-md shadow-lg"
        />
      </div>

      <p className="text-center max-w-md">
        I love Formula One! I really enjoy watching races & keeping up with the seasonal drama
        that happens across all the teams - but my favorite team is Ferrari!
      </p>
    </div>
  );
}
