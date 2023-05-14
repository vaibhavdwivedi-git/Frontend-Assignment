import styles from "@/styles/Text.module.css";

export default function Text() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.label}>Pizza Name</div>
        <input
          type="text"
          className={styles.input}
          placeholder="Enter Pizza Name"
        />
      </div>
    </>
  );
}
