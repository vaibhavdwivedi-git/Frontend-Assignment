import styles from "@/styles/Radio.module.css";

export default function Radio() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.label}>Pizza Type</div>
        <div className={styles.wrapper}>
          <label className={styles.labl}>
            <input type="radio" name="radioname" value="one_value" checked />
            <div>Naples Style Pizza</div>
          </label>
          <label className={styles.labl}>
            <input type="radio" name="radioname" value="another" />
            <div>New York Style Pizza</div>
          </label>
        </div>
      </div>
    </>
  );
}
