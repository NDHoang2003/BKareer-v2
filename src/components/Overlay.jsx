import React, { useState, useEffect } from "react";

const OrientationPrompt = ({ children }) => {
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const isLandscape = window.innerHeight > window.innerWidth;
      const isMobileOrTablet = window.innerWidth < 1200;
      setShowPrompt(isMobileOrTablet && isLandscape);
    };

    // Kiểm tra khi tải trang và khi thay đổi kích thước màn hình
    checkOrientation();
    window.addEventListener("resize", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
    };
  }, []);

  return showPrompt ? (
    <div className="over-noti">
      <div class="phone"></div>
      <div class="message">
        Vui lòng xoay ngang ! Để có trải nghiệm tốt nhất, dùng trên máy tính ở
        chế độ toàn màn hình
      </div>
    </div>
  ) : (
    children
  );
};

export default OrientationPrompt;
