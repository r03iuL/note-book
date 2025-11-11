// src/components/FolderCarousel.jsx
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import FolderCard from "./FolderCard";

const FolderCarousel = () => {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/folders")
      .then((res) => res.json())
      .then((data) => setFolders(data))
      .catch((err) => console.error("Failed to load folders", err));
  }, []);

  return (
    <div className="max-w-[1500px] py-6 px-2 overflow-hidden bg-base-300/80 backdrop-blur-sm rounded-lg">
      <Swiper
        modules={[Navigation]}
        // navigation
        spaceBetween={0}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="!px-5"
      >
        {folders.map((folder) => (
          <SwiperSlide key={folder._id} className="pb-4">
            <FolderCard folder={folder} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FolderCarousel;
