import React from "react";
import Decolist from "../../resources/decolist.png";
import DecoratedWaffle from "../../resources/decoratedwaffle.gif";

import PageTemplate from "../pageTemplate";
import styles from "./DecorationPage.module.scss";

export default function DecorationPage() {
  return (
    <PageTemplate>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <img src={DecoratedWaffle} alt=""></img>
        </div>
        <div className={styles.listWrapper}>
          <img src={Decolist} alt=""></img>
        </div>
      </div>
    </PageTemplate>
  );
}
