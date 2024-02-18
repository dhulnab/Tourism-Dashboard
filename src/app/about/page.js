"use client";
import Aside from "@/src/components/aside/Aside";
import styles from "./page.module.css";
import Container from "@/src/components/container/Container";
import withAuth from "@/src/components/withAuth";

function page() {
  return (
    <main>
      <div className={styles.box}>
        <div className={styles.main}>
          <Container Width={"1500px"}>
            <h1 style={{ display: "grid", placeItems: "center" }}>About</h1>
          </Container>
        </div>
        <div className={styles.aside}>
          <Aside page="ABOUT" />
        </div>
      </div>
    </main>
  );
}
export default withAuth(page);
