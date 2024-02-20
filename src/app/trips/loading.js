import Container from "@/src/components/container/Container";
import styles from "./page.module.css";
import Aside from "@/src/components/aside/Aside";

const loading = () => {
  return (
    <main>
      <div className={styles.box}>
        <div className={styles.main}>
          <Container Width={"1500px"}>
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "grid",
                placeItems: "center",
              }}
            >
              <div className={styles.loader}></div>
            </div>
          </Container>
        </div>
        <div className={styles.aside}>
          <Aside page="INFO" />
        </div>
      </div>
    </main>
  );
};

export default loading;
