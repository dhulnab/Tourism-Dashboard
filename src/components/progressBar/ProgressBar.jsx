import { useEffect, useState } from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = (props) => {
  const { completed } = props;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(completed);
  }, [completed]);

  return (
    <div className={styles.containerStyles}>
      <div className={styles.fillerStyles} style={{ width: `${progress}%` }}>
        <span className={styles.labelStyles}></span>
      </div>
    </div>
  );
};

export default ProgressBar;
