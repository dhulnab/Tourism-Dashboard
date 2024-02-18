"use client"
import styles from "./page.module.css";
import Aside from "@/src/components/aside/Aside";
import Container from "@/src/components/container/Container";
import withAuth from "@/src/components/withAuth";

function page() {
  return (
    <main>
      <div className={styles.box}>
        <div className={styles.main}>
          <Container Width={"1500px"}>
            <h1 style={{ display: "grid", placeItems: "center" }}>Tickets</h1>
          </Container>
        </div>
        <div className={styles.aside}>
          <Aside page="TICKETS" />
        </div>
      </div>
    </main>
  );
}
export default withAuth(page);
