import { Button } from "antd";
import styles from "./componentStyles.module.scss";

export const ActionButton = ({ action }) => {
  return (
    <Button className={styles.button} type="default">
      {action}
    </Button>
  );
};
