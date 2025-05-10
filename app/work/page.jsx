import React from "react";
import Carousel from "@/components/ui/carousel";

const Work = () => {
  const slides = ["/1.jpg", "/2.jpg", "/3.jpg"];

  return (
    <div >
      <h2 className="flex justify-center text-4xl font-bold mb-6 mt-6">Mes Projets</h2>
      <Carousel slides={slides} />
    </div>
  );
};

export default Work;
