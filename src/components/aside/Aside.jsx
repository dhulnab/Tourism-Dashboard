"use client"
import Link from "next/link";
import styles from "./aside.module.css";
import { BiHomeAlt2 } from "react-icons/bi";
import { PiAirplaneTiltBold } from "react-icons/pi";
import { HiOutlineTicket } from "react-icons/hi2";
import { FaRegUser, FaRegStar } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";
import { GiBirdMask } from "react-icons/gi";

function Aside({ page = "HOME" }) {
  return (
    <div className={styles.main}>
      <div>
        <div className={styles.logo}>
          <p className={styles.sublogo}>هُُد</p>
          <p>هد</p>
          <GiBirdMask fill="#197bbd" className={styles.svglogo} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={page === "HOME" ? styles.active : null}>
          <BiHomeAlt2 className={styles.icon} />
          <Link href={"/"}>الرئيسية</Link>
        </div>
        <div className={page === "TRIPS" ? styles.active : null}>
          <PiAirplaneTiltBold className={styles.icon} />
          <Link href={"/trips"}>الرحلات</Link>
        </div>
        <div className={page === "TICKETS" ? styles.active : null}>
          <HiOutlineTicket className={styles.icon} />
          <Link href={"/tickets"}>التذاكر</Link>
        </div>
        <div className={page === "INFO" ? styles.active : null}>
          <FaRegUser className={styles.icon} />
          <Link href={"/info"}>معلومات الشركة</Link>
        </div>
        <div className={page === "RATING" ? styles.active : null}>
          <FaRegStar className={styles.icon} />
          <Link href={"/rating"}>التقيم</Link>
        </div>
        <div className={page === "ABOUT" ? styles.active : null}>
          <BsInfoCircle className={styles.icon} />
          <Link href={"/about"}>حولنا</Link>
        </div>
      </div>
    </div>
  );
}

export default Aside;
