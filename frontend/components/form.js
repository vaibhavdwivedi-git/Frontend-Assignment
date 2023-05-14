import styles from "@/styles/Form.module.css";
import Line from "@/components/line";
import Text from "@/components/text";
import Radio from "@/components/radio";
import Select from "@/components/select";
export default function Form() {
  return (
    <>
      <div className={styles.container}>
        <Text />
        <Line />
        <Radio />
        <Line />
        <Select />
      </div>
    </>
  );
}
