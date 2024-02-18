"use client";
import styles from "./page.module.css";
import Container from "../components/container/Container";
import Image from "next/image";
import img from "../../public/company.png";
import Aside from "../components/aside/Aside";
import Banner from "../components/banner/Banner";
import App from "../components/table/ticketsTable";
import Profile from "../components/profile/Profile";
import Example from "../components/chart/chart";
import ReviewsTableApp from "../components/table/reviewTable";
import withAuth from "../components/withAuth";

function Home() {
  return (
    <main>
      <div className={styles.box}>
        <div className={styles.main}>
          <Container Width={"90%"}>
            <div className={styles.headerbox}>
              <div className={styles.profilebox}>
                <div>
                  <p className={styles.adminname}>شركة الحباري</p>
                  <p>حساب شركة</p>
                </div>
                <div className={styles.image}>
                  <Image
                    src={img}
                    alt="none"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              <div className={styles.sectionheader}>
                <h2>القائمه الرئيسية</h2>
                <p>
                  هنا يمكنك الحصول على نظره عامة عن الرحلات ,التذاكر ,...الخ{" "}
                </p>
              </div>
            </div>
            <div className={styles.home}>
              <div className={styles.contentbox}>
                <div className={styles.trip}>
                  <h2>الرحلات</h2>
                  <Banner />
                </div>
                <div className={styles.info}>
                  <h4>الشركة</h4>
                  <Profile />
                </div>
                <div className={styles.ticket}>
                  <h4>احدث عمليات الحجز</h4>
                  <div className={styles.tableContainer}>
                    <App />
                  </div>
                </div>
                <div className={styles.rating}>
                  <h4>اخر التقيمات</h4>
                  <div className={styles.tableContainer}>
                    <ReviewsTableApp />
                  </div>
                </div>
                <div className={styles.money}>
                  <h3>المالية</h3>
                  <div className={styles.chartContainer}>
                    <Example />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className={styles.aside}>
          <Aside />
        </div>
      </div>
    </main>
  );
}
export default withAuth(Home);
