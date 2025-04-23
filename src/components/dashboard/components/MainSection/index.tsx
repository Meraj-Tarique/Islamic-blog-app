import Image from "next/image";
import bgImage from "@images/slide-2.jpg";

export default function MainSection() {
  return (
    <section className="relative h-screen">
      <Image
        src={bgImage || null}
        alt="Blue Mosque illuminated at night"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white text-center">
          <div
            className="flex justify-center mb-4 w-auto h-[60] relative"
            style={{
              position: "relative",
            }}
          >
            <Image
              src={
                "https://mlena6qa4grg.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://nauthemes.net/alim/wp-content/uploads/2020/07/bsml-txt.png"
              }
              alt="Blue Mosque illuminated at night"
              // width={600}
              // height={400}
              // className=" w-auto"
              objectFit="contain"
              layout="fill" // Ensures the image covers the container
            />
          </div>
          {/* <div className="flex justify-end mb-4">
            <Image
              src={
                "https://mlena6qa4grg.i.optimole.com/w:auto/h:auto/q:mauto/f:best/https://nauthemes.net/alim/wp-content/uploads/2020/07/bsml-txt.png"
              }
              alt="Blue Mosque illuminated at night"
              // width={400} // Set the width for better resolution
              // height={200} // Set the corresponding height
              layout="fill"
              objectFit="cover" 
            />
          </div> */}

          <h1
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{
              fontFamily: '"Katibeh", Sans-serif',
            }}
          >
            Welcome to Azdiya Sufi Teachings
          </h1>
          <p className="text-xl mb-8">
            Organisation for Promoting Shari`ah Compliant Sufism
          </p>
          {/* <Button className="bg-[#C5A059] hover:bg-[#B08E4C] text-white px-8 py-6 text-lg">
            Learn More
          </Button> */}
        </div>
      </div>
    </section>
  );
}
