import { Button } from "antd";
import styles from "./componentStyles.module.scss";

export const NumberButton = ({ num, style, onClick }) => {
  return (
    <Button className={style} type="default" onClick={onClick}>
      {num}
    </Button>
  );
};
