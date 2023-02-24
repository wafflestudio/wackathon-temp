import React, { useRef } from 'react';
import styles from './screenShot.module.scss';
import html2canvas from 'html2canvas';

export default function ScreenShot() {
  const myRef = useRef<HTMLDivElement>(null);

  const takeScreenshot = () => {
    if (myRef.current) {
      html2canvas(myRef.current).then((canvas) => {
        const link = document.createElement('a');
        link.download = 'screenshot.png';
        link.href = canvas.toDataURL();
        link.click();
      });
    }
  };

  return (
    <div ref={myRef}>
      <button className={styles.box} onClick={takeScreenshot}>
        스샷
      </button>
    </div>
  );
}
