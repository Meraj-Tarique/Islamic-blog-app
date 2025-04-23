import React from "react";
import styles from "@/styles/missionStyle.module.css";

const MissionAndVissionPage = () => {
  return (
    <section className="py-20 bg-bg-gray-50 flex flex-col justify-center items-center">
      <div className="container mx-auto px-2 mb-12 text-center">
        <h2
          className={`text-5xl font-bold mb-6 ${styles.textStyle}`}
        >
          Vision
        </h2>
        <div className="mx-auto px-4 py-2 max-w-3xl">
          <p className="text-lg text-[#5c4d3d] leading-relaxed">
            Enable ourselves to attain the state of{" "}
            <span className="italic">Ehsan</span> as desired in{" "}
            <span className="font-semibold">Hadith Jibrael</span> (
            <span className="italic">
              Sahih Muslim, Book of Faith, Hadith No.1
            </span>
            ).
          </p>
        </div>
      </div>

      <div className="container mx-auto px-2 text-center">
        <h2 className={`text-5xl font-bold mb-6 ${styles.textStyle}`}>Mission</h2>
        <div className="mx-auto px-4 py-2 max-w-3xl">
          <p className="text-lg text-[#5c4d3d] leading-relaxed">
            Promulgate the <span className="italic">Mujadidi Sufi Path</span>{" "}
            through a dedicated educational curriculum of{" "}
            <span className="font-semibold">Moraqiba</span>,{" "}
            <span className="font-semibold">Dhikr</span>, and Prayers, seeking
            the Blessings and Peace of Allah upon Prophet Muhammad (
            <span className="italic">Salat-wa-Salam</span>).
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionAndVissionPage;
