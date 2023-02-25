import React from "react";
import Community from "../../resources/community.png";

import PageTemplate from "../pageTemplate";
import styles from "./CommunityPage.module.scss";

export default function CommunityPage() {
  return (
    <PageTemplate>
      <img className={styles.img} src={Community} alt=""></img>
    </PageTemplate>
  );
}
