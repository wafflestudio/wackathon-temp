import React, { useRef } from 'react';
import styles from './screenShot.module.scss';
import html2canvas from 'html2canvas';
import screenShot from '../../../resources/screenshot.svg';

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
    <div className={styles.container} ref={myRef}>
      <img src={screenShot} onClick={takeScreenshot}></img>
      스샷
    </div>
  );
}
