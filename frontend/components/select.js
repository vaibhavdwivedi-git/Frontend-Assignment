import styles from "@/styles/Select.module.css";

export default function Select() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.label}>Slices</div>
        <select className={styles.select}>
          <option>CSS SELECT arrow (minimal)</option>
          <option>No external background image</option>
          <option>No wrapper</option>
        </select>
      </div>
    </>
  );
}
