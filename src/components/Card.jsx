import { useContext } from "react";
import styles from "./Card.module.css";
import { ClickContext } from "../store/ClickContext";

export function Card({ fruit_icon, index, fruit, tick }) {
  const { clickHandler } = useContext(ClickContext);
  const isFlipped = fruit_icon !== "?";
  const isMatched = Boolean(tick);

  return (
    <button
      type="button"
      className={`${styles.card} ${isFlipped ? styles.flipped : ""} ${isMatched ? styles.matched : ""}`}
      onClick={() => clickHandler(index, fruit)}
      aria-label={isFlipped ? `Card showing ${fruit_icon}` : "Hidden card"}
    >
      <span className={styles.card_face}>{fruit_icon}</span>
      <span className={styles.tick}>{tick}</span>
    </button>
  );
}
