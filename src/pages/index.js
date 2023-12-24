import Sidebar from "@/components/sidebar.main";
import Head from "next/head";
import Image from "next/image";
import styles_navbar from "@/styles/Navbar.module.scss";
import styles from "@/styles/Home.module.scss";
import { InputText } from "primereact/inputtext";
import { Avatar } from "primereact/avatar";
import { Menu } from "primereact/menu";
import { useCallback, useEffect, useRef, useState } from "react";
import ActiveUser from "@/components/ActiveUser";
import NewUser from "@/components/NewUser";
import RepeatUser from "@/components/RepeatUser";
import TotalRevenue from "@/components/TotalRevenue";
import TopStories from "@/components/TopStories";
import RecentActivity from "@/components/RecentActivity";
import TopUser from "@/components/TopUser";
import TopCountry from "@/components/TopCountry";
import Micropayment from "@/components/Micropayment";
import MonthlySubscriber from "@/components/MonthlySubscriber";
import YearlySubscriber from "@/components/YearlySubscriber";
import OverallAnalytics from "@/components/OverallAnalytics";
import RevenueChart from "@/components/RevenueChart";
import { ProgressSpinner } from "primereact/progressspinner";
import Link from "next/link";
import { useUser } from "../../context/userContext";
// import { getStaticProps } from "next/dist/build/templates/pages";

export default function Home({
  articleData,
  yearlySubscriber,
  overallAnalytics,
  revenueGraph,
  monthlySubscriber,
  microPayment,
}) {
  const menuLeft = useRef(null);
  const [loading, setLoading] = useState(false);
  const { userData } = useUser();

  console.log("This is user Data", userData);

  const items = [
    {
      label: "Profile",
    },
    {
      label: "Logout",
      command: () => {
        window.sessionStorage.removeItem("dair_userId");
        window.location.reload();
      },
    },
  ];

  useEffect(() => {
    if (
      !articleData ||
      !yearlySubscriber ||
      !monthlySubscriber ||
      !overallAnalytics ||
      !revenueGraph ||
      !microPayment
    ) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main>
        {loading ? (
          <div className={styles.loader}>
            <ProgressSpinner />
          </div>
        ) : (
          <div className={styles.page}>
            <div>
              {/* sidebar */}
              <Sidebar />
            </div>
            {/* right section */}
            <div className={styles.right_panel}>
              {/* navbar */}
              <div className={styles_navbar.navbar}>
                <span className="p-input-icon-left">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 21L16.514 16.506M19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z"
                      stroke="#CECECE"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                  <InputText placeholder="Search" />
                </span>
                <div className={styles_navbar.navbar_right}>
                  <section className={styles_navbar.calender}>
                    <p>
                      <span>11-10-2022</span>
                      <svg
                        width="20"
                        height="19"
                        viewBox="0 0 17 16"
                        fill="#3d43cf"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.6667 2.37331V1.33331C11.6667 1.05998 11.44 0.833313 11.1667 0.833313C10.8933 0.833313 10.6667 1.05998 10.6667 1.33331V2.33331H6.33332V1.33331C6.33332 1.05998 6.10666 0.833313 5.83332 0.833313C5.55999 0.833313 5.33332 1.05998 5.33332 1.33331V2.37331C3.53332 2.53998 2.65999 3.61331 2.52666 5.20665C2.51332 5.39998 2.67332 5.55998 2.85999 5.55998H14.14C14.3333 5.55998 14.4933 5.39331 14.4733 5.20665C14.34 3.61331 13.4667 2.53998 11.6667 2.37331Z"
                          fill="#3d43cf"
                        />
                        <path
                          d="M13.8333 6.56H3.16667C2.8 6.56 2.5 6.86 2.5 7.22666V11.3333C2.5 13.3333 3.5 14.6667 5.83333 14.6667H11.1667C13.5 14.6667 14.5 13.3333 14.5 11.3333V7.22666C14.5 6.86 14.2 6.56 13.8333 6.56ZM6.64 12.14C6.60667 12.1667 6.57333 12.2 6.54 12.22C6.5 12.2467 6.46 12.2667 6.42 12.28C6.38 12.3 6.34 12.3133 6.3 12.32C6.25333 12.3267 6.21333 12.3333 6.16667 12.3333C6.08 12.3333 5.99333 12.3133 5.91333 12.28C5.82667 12.2467 5.76 12.2 5.69333 12.14C5.57333 12.0133 5.5 11.84 5.5 11.6667C5.5 11.4933 5.57333 11.32 5.69333 11.1933C5.76 11.1333 5.82667 11.0867 5.91333 11.0533C6.03333 11 6.16667 10.9867 6.3 11.0133C6.34 11.02 6.38 11.0333 6.42 11.0533C6.46 11.0667 6.5 11.0867 6.54 11.1133C6.57333 11.14 6.60667 11.1667 6.64 11.1933C6.76 11.32 6.83333 11.4933 6.83333 11.6667C6.83333 11.84 6.76 12.0133 6.64 12.14ZM6.64 9.80666C6.51333 9.92666 6.34 10 6.16667 10C5.99333 10 5.82 9.92666 5.69333 9.80666C5.57333 9.68 5.5 9.50666 5.5 9.33333C5.5 9.16 5.57333 8.98666 5.69333 8.86C5.88 8.67333 6.17333 8.61333 6.42 8.72C6.50667 8.75333 6.58 8.8 6.64 8.86C6.76 8.98666 6.83333 9.16 6.83333 9.33333C6.83333 9.50666 6.76 9.68 6.64 9.80666ZM8.97333 12.14C8.84667 12.26 8.67333 12.3333 8.5 12.3333C8.32667 12.3333 8.15333 12.26 8.02667 12.14C7.90667 12.0133 7.83333 11.84 7.83333 11.6667C7.83333 11.4933 7.90667 11.32 8.02667 11.1933C8.27333 10.9467 8.72667 10.9467 8.97333 11.1933C9.09333 11.32 9.16667 11.4933 9.16667 11.6667C9.16667 11.84 9.09333 12.0133 8.97333 12.14ZM8.97333 9.80666C8.94 9.83333 8.90667 9.86 8.87333 9.88666C8.83333 9.91333 8.79333 9.93333 8.75333 9.94666C8.71333 9.96666 8.67333 9.98 8.63333 9.98666C8.58667 9.99333 8.54667 10 8.5 10C8.32667 10 8.15333 9.92666 8.02667 9.80666C7.90667 9.68 7.83333 9.50666 7.83333 9.33333C7.83333 9.16 7.90667 8.98666 8.02667 8.86C8.08667 8.8 8.16 8.75333 8.24667 8.72C8.49333 8.61333 8.78667 8.67333 8.97333 8.86C9.09333 8.98666 9.16667 9.16 9.16667 9.33333C9.16667 9.50666 9.09333 9.68 8.97333 9.80666ZM11.3067 12.14C11.18 12.26 11.0067 12.3333 10.8333 12.3333C10.66 12.3333 10.4867 12.26 10.36 12.14C10.24 12.0133 10.1667 11.84 10.1667 11.6667C10.1667 11.4933 10.24 11.32 10.36 11.1933C10.6067 10.9467 11.06 10.9467 11.3067 11.1933C11.4267 11.32 11.5 11.4933 11.5 11.6667C11.5 11.84 11.4267 12.0133 11.3067 12.14ZM11.3067 9.80666C11.2733 9.83333 11.24 9.86 11.2067 9.88666C11.1667 9.91333 11.1267 9.93333 11.0867 9.94666C11.0467 9.96666 11.0067 9.98 10.9667 9.98666C10.92 9.99333 10.8733 10 10.8333 10C10.66 10 10.4867 9.92666 10.36 9.80666C10.24 9.68 10.1667 9.50666 10.1667 9.33333C10.1667 9.16 10.24 8.98666 10.36 8.86C10.4267 8.8 10.4933 8.75333 10.58 8.72C10.7 8.66666 10.8333 8.65333 10.9667 8.68C11.0067 8.68666 11.0467 8.7 11.0867 8.72C11.1267 8.73333 11.1667 8.75333 11.2067 8.78C11.24 8.80666 11.2733 8.83333 11.3067 8.86C11.4267 8.98666 11.5 9.16 11.5 9.33333C11.5 9.50666 11.4267 9.68 11.3067 9.80666Z"
                          fill="#3d43cf"
                        />
                      </svg>
                    </p>
                    <span>OR</span>
                    <p>
                      <span>11-10-2022</span>
                      <svg
                        width="20"
                        height="19"
                        viewBox="0 0 17 16"
                        fill="#3d43cf"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.6667 2.37331V1.33331C11.6667 1.05998 11.44 0.833313 11.1667 0.833313C10.8933 0.833313 10.6667 1.05998 10.6667 1.33331V2.33331H6.33332V1.33331C6.33332 1.05998 6.10666 0.833313 5.83332 0.833313C5.55999 0.833313 5.33332 1.05998 5.33332 1.33331V2.37331C3.53332 2.53998 2.65999 3.61331 2.52666 5.20665C2.51332 5.39998 2.67332 5.55998 2.85999 5.55998H14.14C14.3333 5.55998 14.4933 5.39331 14.4733 5.20665C14.34 3.61331 13.4667 2.53998 11.6667 2.37331Z"
                          fill="#3d43cf"
                        />
                        <path
                          d="M13.8333 6.56H3.16667C2.8 6.56 2.5 6.86 2.5 7.22666V11.3333C2.5 13.3333 3.5 14.6667 5.83333 14.6667H11.1667C13.5 14.6667 14.5 13.3333 14.5 11.3333V7.22666C14.5 6.86 14.2 6.56 13.8333 6.56ZM6.64 12.14C6.60667 12.1667 6.57333 12.2 6.54 12.22C6.5 12.2467 6.46 12.2667 6.42 12.28C6.38 12.3 6.34 12.3133 6.3 12.32C6.25333 12.3267 6.21333 12.3333 6.16667 12.3333C6.08 12.3333 5.99333 12.3133 5.91333 12.28C5.82667 12.2467 5.76 12.2 5.69333 12.14C5.57333 12.0133 5.5 11.84 5.5 11.6667C5.5 11.4933 5.57333 11.32 5.69333 11.1933C5.76 11.1333 5.82667 11.0867 5.91333 11.0533C6.03333 11 6.16667 10.9867 6.3 11.0133C6.34 11.02 6.38 11.0333 6.42 11.0533C6.46 11.0667 6.5 11.0867 6.54 11.1133C6.57333 11.14 6.60667 11.1667 6.64 11.1933C6.76 11.32 6.83333 11.4933 6.83333 11.6667C6.83333 11.84 6.76 12.0133 6.64 12.14ZM6.64 9.80666C6.51333 9.92666 6.34 10 6.16667 10C5.99333 10 5.82 9.92666 5.69333 9.80666C5.57333 9.68 5.5 9.50666 5.5 9.33333C5.5 9.16 5.57333 8.98666 5.69333 8.86C5.88 8.67333 6.17333 8.61333 6.42 8.72C6.50667 8.75333 6.58 8.8 6.64 8.86C6.76 8.98666 6.83333 9.16 6.83333 9.33333C6.83333 9.50666 6.76 9.68 6.64 9.80666ZM8.97333 12.14C8.84667 12.26 8.67333 12.3333 8.5 12.3333C8.32667 12.3333 8.15333 12.26 8.02667 12.14C7.90667 12.0133 7.83333 11.84 7.83333 11.6667C7.83333 11.4933 7.90667 11.32 8.02667 11.1933C8.27333 10.9467 8.72667 10.9467 8.97333 11.1933C9.09333 11.32 9.16667 11.4933 9.16667 11.6667C9.16667 11.84 9.09333 12.0133 8.97333 12.14ZM8.97333 9.80666C8.94 9.83333 8.90667 9.86 8.87333 9.88666C8.83333 9.91333 8.79333 9.93333 8.75333 9.94666C8.71333 9.96666 8.67333 9.98 8.63333 9.98666C8.58667 9.99333 8.54667 10 8.5 10C8.32667 10 8.15333 9.92666 8.02667 9.80666C7.90667 9.68 7.83333 9.50666 7.83333 9.33333C7.83333 9.16 7.90667 8.98666 8.02667 8.86C8.08667 8.8 8.16 8.75333 8.24667 8.72C8.49333 8.61333 8.78667 8.67333 8.97333 8.86C9.09333 8.98666 9.16667 9.16 9.16667 9.33333C9.16667 9.50666 9.09333 9.68 8.97333 9.80666ZM11.3067 12.14C11.18 12.26 11.0067 12.3333 10.8333 12.3333C10.66 12.3333 10.4867 12.26 10.36 12.14C10.24 12.0133 10.1667 11.84 10.1667 11.6667C10.1667 11.4933 10.24 11.32 10.36 11.1933C10.6067 10.9467 11.06 10.9467 11.3067 11.1933C11.4267 11.32 11.5 11.4933 11.5 11.6667C11.5 11.84 11.4267 12.0133 11.3067 12.14ZM11.3067 9.80666C11.2733 9.83333 11.24 9.86 11.2067 9.88666C11.1667 9.91333 11.1267 9.93333 11.0867 9.94666C11.0467 9.96666 11.0067 9.98 10.9667 9.98666C10.92 9.99333 10.8733 10 10.8333 10C10.66 10 10.4867 9.92666 10.36 9.80666C10.24 9.68 10.1667 9.50666 10.1667 9.33333C10.1667 9.16 10.24 8.98666 10.36 8.86C10.4267 8.8 10.4933 8.75333 10.58 8.72C10.7 8.66666 10.8333 8.65333 10.9667 8.68C11.0067 8.68666 11.0467 8.7 11.0867 8.72C11.1267 8.73333 11.1667 8.75333 11.2067 8.78C11.24 8.80666 11.2733 8.83333 11.3067 8.86C11.4267 8.98666 11.5 9.16 11.5 9.33333C11.5 9.50666 11.4267 9.68 11.3067 9.80666Z"
                          fill="#3d43cf"
                        />
                      </svg>
                    </p>
                  </section>
                  <Menu
                    model={items}
                    popup
                    ref={menuLeft}
                    id="popup_menu_left"
                  />

                  {userData ? (
                    <section
                      onClick={(event) => menuLeft.current.toggle(event)}
                      className={styles_navbar.welcome_container}
                    >
                      <section className={styles_navbar.welcome_container_left}>
                        <Avatar label={userData.name[0]} size="" width="30px" />
                        <section>
                          <p>Welcome back,</p>
                          <h3>{userData?.name}</h3>
                        </section>
                      </section>
                      <section>
                        <svg
                          width="16"
                          height="10"
                          viewBox="0 0 16 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.46967 0.96967C0.735936 0.703403 1.1526 0.679197 1.44621 0.897052L1.53033 0.96967L8 7.439L14.4697 0.96967C14.7359 0.703403 15.1526 0.679197 15.4462 0.897052L15.5303 0.96967C15.7966 1.23594 15.8208 1.6526 15.6029 1.94621L15.5303 2.03033L8.53033 9.03033C8.26406 9.2966 7.8474 9.3208 7.55379 9.10295L7.46967 9.03033L0.46967 2.03033C0.176777 1.73744 0.176777 1.26256 0.46967 0.96967Z"
                            fill="#1E2875"
                          />
                        </svg>
                      </section>
                    </section>
                  ) : (
                    <Link href={"/login"}>
                      <section className={styles_navbar.login_button}>
                        Login
                      </section>
                    </Link>
                  )}
                </div>
              </div>
              {/* welcome container */}
              <>
                {userData ? (
                  <>
                    <div className={styles.welcome_container}>
                      <h1>Welcome Back , {userData.name}</h1>
                      <p>Here is today&apos;s report and performence</p>
                    </div>
                    {/* status log */}
                    <div className={styles.status}>
                      <ActiveUser
                        userCount={164}
                        increase={true}
                        percentage={23.4}
                        fromMonth={"October"}
                      />
                      <NewUser
                        userCount={4565}
                        increase={false}
                        percentage={23.8}
                        fromMonth={"October"}
                      />
                      <RepeatUser
                        userCount={"24.5k"}
                        increase={true}
                        percentage={23.8}
                        fromMonth={"October"}
                      />
                      <TotalRevenue
                        revenueAmt={4565}
                        increase={false}
                        percentage={23.8}
                        fromMonth={"October"}
                      />
                    </div>
                    {/* analytics */}
                    <div className={styles.analytics}>
                      <OverallAnalytics analyticsData={overallAnalytics} />
                      <RevenueChart revenueGraph={revenueGraph} />
                    </div>
                    {/* payment and subscription */}
                    <div className={styles.payment_container}>
                      <Micropayment microPayment={microPayment} />
                      <MonthlySubscriber monthlySubcriber={monthlySubscriber} />
                      <YearlySubscriber yearlySubscriber={yearlySubscriber} />
                    </div>
                    {/* activity */}
                    <div className={styles.activity}>
                      <TopStories articleTableData={articleData} />
                      <RecentActivity />
                    </div>
                    {/* top User   location    top 10 country */}
                    <div className={styles.location_other_info}>
                      <TopUser />
                      <TopCountry />
                    </div>
                  </>
                ) : (
                  <div className={styles.no_user}>🎉 Login to Continue...</div>
                )}
              </>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://api.npoint.io/5f754613678cbebe119c");
  const data = await response.json();
  return {
    props: {
      articleData: data.ArticleTable,
      revenueGraph: data.RevenueGraph,
      microPayment: data.Micro_Payment,
      overallAnalytics: data.Overall_Analytics,
      monthlySubscriber: data.Monthly_Subscriber,
      yearlySubscriber: data.yearly_Subscriber,
    },
  };
};
