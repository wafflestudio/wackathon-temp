import React, { useEffect } from "react";
import styles from "./actionButton.module.scss";
import { useLocation, useParams } from "react-router-dom";
import { useStatusContext } from "../../context/statusContext";
import feedIcon from "../../resources/feed.svg";
import milkIcon from "../../resources/milk.svg";
import batheIcon from "../../resources/bathe.svg";
import pillIcon from "../../resources/pill.svg";

type ActionButtonType = {
  name: string;
};

export default function ActionButton({ name }: ActionButtonType) {
  const { userId } = useParams();
  // const location = useLocation();
  // const currentPath = location.pathname; 일단 안씀

  const { status } = useStatusContext();

  const { doPoll, doAction } = useStatusContext();

  useEffect(() => {
    (async function () {
      doPoll();
    })();
  }, [doPoll]);

  const action = () => {
    doAction(name, Number(userId), 1);
  };
  let newAction = "";
  let newName = "";
  let icon = "";
  switch (name) {
    case "FEED":
      icon = feedIcon;
      newName = "hungry";
      newAction = "밥 주기";
      break;
    case "WATER":
      icon = milkIcon;
      newName = "thirsty";
      newAction = "우유 주기";
      break;
    case "BATHE":
      icon = batheIcon;
      newName = "cleanliness";
      newAction = "씻기기";
      break;
    case "CURE":
      icon = pillIcon;
      newName = "health";
      newAction = "약 주기";
      break;
  }
  const statusNumber = status?.waffle.status[newName] ?? 0;
  let color = "";
  switch (true) {
    case statusNumber >= 70:
      color = "green";
      break;
    case statusNumber >= 30:
      color = "yellow";
      break;
    case statusNumber >= 0:
      color = "red";
      break;
  }

  return (
    <div className={styles.container}>
      <img
        className={styles.img}
        src={icon}
        onClick={action}
        style={{
          background: `linear-gradient(to top, ${color} ${
            statusNumber ? statusNumber : 0
          }%, transparent 50%)`,
          objectFit: "cover",
          overflow: "hidden",
          borderRadius: "10px",
        }}
      ></img>
      {newAction}
    </div>
  );
}
