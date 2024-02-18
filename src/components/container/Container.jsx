import styles from "./Container.module.css";

const Container = ({ children, Width = 1000, style, ...props }) => {
  const sty = {
    ...style,
    maxWidth: Width,
  };
  return (
    <div style={sty} className={styles.container} {...props}>
      {children}
    </div>
  );
};

export default Container;
