import Image from "next/image";
import styles from "./Profile.module.css";
import { IoLogoFacebook } from "react-icons/io5";
import img from "../../../public/company.png";

function Profile() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.companyInfo}>
          <h3>شركة الحباري</h3>
          <h4>+9647702454009</h4>
          <h4>alhabbarycompany2020@gmail.com</h4>
          <h5>بغداد الجادرية مقابل حلويات الخاصكي</h5>
        </div>
        <div className={styles.container}>
          <div className={styles.imageContainer}>
            <div className={styles.image}>
              <Image
                src={img}
                alt="none"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <a
              target="_blank"
              href="https://www.facebook.com"
              className={styles.face}
            >
              <IoLogoFacebook className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.url}></div>
    </div>
  );
}

export default Profile;
