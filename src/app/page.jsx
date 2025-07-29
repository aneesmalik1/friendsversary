"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import DaysTogether from "@/components/DaysTogether";
import PhotoGallery from "@/components/PhotoGallery";
import Message from "@/components/Message";
// import MusicPlayer from "@/components/MusicPlayer" // Optional
import FloatingElements from "@/components/FloatingElements";
import TapToReveal from "@/components/TapToReveal";

const TOGETHER_DATE = "2020-08-01T00:00:00";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [showTapToReveal, setShowTapToReveal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowTapToReveal(true);
    }, 20000); // 20 seconds wait

    return () => clearTimeout(timer);
  }, []);

  const handleReveal = () => {
    setShowTapToReveal(false);
    setShowContent(true);
  };

  const photos = [
    { src: "/IMG_0591.JPG", alt: "" },
    { src: "/IMG_1015.JPG", alt: "" },
    { src: "/IMG_1310.JPG", alt: "" },
    { src: "/IMG_1908.JPG", alt: "" },
    { src: "/Snapchat-1527163246.jpg", alt: "" },
    { src: "/Snapchat-782915897.jpg", alt: "" },
    { src: "/IMG_0503.JPG", alt: "" },
  ];

  const message = `Dear Idiot❤️👻,
  Aaj 1 August ho gya or aaj pure 5 saal ho gaye yrr.

  and main bas ye kehna chahunga ki jitni mohabbat tune mujhe di h wo shayd kabhi mujhe na mil pai or shayd hi kabhi mil payegi hn me thoda annoying hun lkin beta tune to hmesha sath diya h na mera  and thank you ❤️hmesha meri side rehne ke lye i think alfaaz  kam padh jyenge lkin tu jaanta tu kya mayene rakhta h mere lye so thank you hr chix ke lye beta 
  Main hmesha kehta hun tu allah ka diya hua tohfa h , nemat h tu mere lye uski bheji hui so thank you❤️ mujh jese insan ko apna dost bnane ke lye❤️ ye zndgi pta nahi kb tk h lkin allah se dua krunga ki tu hmesha mere sath rhe Ameen  

I know tu abhi bhi naraz hai... but mujhe yaad hai woh har moment jo humne milke jiya tha❤️.

lkin Dua h mera betu mujhe maaf kr dega or ummed krta hun hm wapas se kahin chalnge ❤️

allah hmari dosti ko har buri nazar se bachaye or hmesha tujhe mere sath rakhe ho sake to maaf karde or wapas aaj

Har chhoti-chhoti baat pe hansna, bina reason bakchodi karna, aur bas ek dusre ka saath — woh sab ab bhi dil me zinda hai❤️.

Ummeed karta hoon yeh sab padh kar mujhe mera idiot ❤️👻 wapas mil jaaye — saari galtiyan bhool kar.

I miss you so muchg baccha❤️👻 

Tera apna,
Gbr.`;

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
      <FloatingElements />

      <AnimatePresence mode="wait">
        {loading ? (
          <Loader
            key="loader"
            onNext={() => {
              setLoading(false);
              setShowTapToReveal(true);
            }}
          />
        ) : !showContent ? (
          showTapToReveal ? (
            <TapToReveal key="tap-to-reveal" onReveal={handleReveal} />
          ) : null
        ) : (
          <>
            {/* Optional: <MusicPlayer playSong={true} /> */}

            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="container mx-auto px-4 py-8"
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: 0.3,
                }}
                className="text-center mb-12 relative"
              >
                <div className="absolute -top-2 -left-5 md:-left-10 text-5xl md:text-6xl animate-float">
                  🎉
                </div>
                <div className="absolute -bottom-10 -right-5 md:-bottom-14 md:-right-10 text-5xl md:text-6xl animate-float-delay">
                  🎊
                </div>

                <h1 className="text-4xl md:text-6xl py-1 md:py-2 px-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 mb-3 animate-gradient">
                  Happy Friendsversary!
                </h1>
                <p className="text-xl text-purple-700 font-medium">
                  5 Saal complete ho gye lad mar kr ❤️
                </p>
              </motion.div>

              <DaysTogether startDate={TOGETHER_DATE} animationDuration={3} />
              <PhotoGallery photos={photos} />
              <Message message={message} />

              <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-center mt-16 mb-8 text-pink-600"
              >
                <p className="text-lg font-medium">
                  Made with ❤️ for my idiot ❤️👻{" "}
                </p>
              </motion.footer>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
