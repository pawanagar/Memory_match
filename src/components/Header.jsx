 import styles from "./Header.module.css";

export function Header({ score, moves, resetGame }) {
  return (
    <header className={styles.header}>
      <div className={styles.title_wrap}>
        <p className={styles.kicker}>Memory Match by (Pawan Naagar)</p>
        <h1>Fruit Fiesta</h1>
      </div>

      <div className={styles.stats}>
        <div className={styles.stat}>
          <span>Score</span>
          <strong>{score}</strong>
        </div>
        <div className={styles.stat}>
          <span>Moves</span>
          <strong>{moves}</strong>
        </div>
      </div>

      <button className={styles.new_game_button} onClick={resetGame}>
        ↻ New Game
      </button>
    </header>
  );
}
