import styles from "./GameOver.module.css";

export function GameOver({ score, moves, resetGame }) {
  return (
    <div className={styles.game_over}>
      <div className={styles.modal}>
        <p className={styles.badge}>You matched them all!</p>
        <h2>Game complete</h2>

        <div className={styles.summary}>
          <div className={styles.summary_item}>
            <span>Score</span>
            <strong>{score}</strong>
          </div>
          <div className={styles.summary_item}>
            <span>Moves</span>
            <strong>{moves}</strong>
          </div>
        </div>

        <button className={styles.new_game_button} onClick={resetGame}>
          Play again
        </button>
      </div>
    </div>
  );
}
