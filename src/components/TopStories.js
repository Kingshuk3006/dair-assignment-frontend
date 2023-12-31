import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dropdown } from "primereact/dropdown";
import React from "react";
import styles from "@/styles/Activities.module.scss";
import Link from "next/link";

const TopStories = ({ articleTableData }) => {
  const template2 = {
    layout: "PrevPageLink CurrentPageReport  NextPageLink",

    CurrentPageReport: (options) => {
      return (
        <span
          style={{
            color: "var(--text-color)",
            userSelect: "none",
            textAlign: "center",
          }}
        >
          {options.currentPage}
        </span>
      );
    },
  };

  

  return (
    <div className={styles.topStories_container}>
      <h2>Top stories in last 30 days</h2>
      <DataTable
        value={articleTableData}
        paginator
        paginatorTemplate={template2}
        rows={4}
        className="mt-6"
        stripedRows
      >
        <Column field="Title" header="Title"></Column>
        <Column field="StoryViews" header="Story Views"></Column>
        <Column field="PaywallClicks" header="Paywall Clicks"></Column>
        <Column field="PurchaseAmount" header="Purchase Amount"></Column>
        <Column
          field="read"
          header="read"
          body={
            <Link href="/">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                  fill="#7950F2"
                />
                <path
                  d="M14.8298 12.68C14.4198 12.68 14.0798 12.34 14.0798 11.93V8.44H10.5898C10.1798 8.44 9.83984 8.1 9.83984 7.69C9.83984 7.28 10.1798 6.94 10.5898 6.94H14.8298C15.2398 6.94 15.5798 7.28 15.5798 7.69V11.93C15.5798 12.34 15.2398 12.68 14.8298 12.68Z"
                  fill="#7950F2"
                />
                <path
                  d="M9.16986 14.09C8.97986 14.09 8.78986 14.02 8.63986 13.87C8.34986 13.58 8.34986 13.1 8.63986 12.81L14.2999 7.15C14.5899 6.86 15.0699 6.86 15.3599 7.15C15.6499 7.44 15.6499 7.92001 15.3599 8.21001L9.69986 13.87C9.55986 14.02 9.35986 14.09 9.16986 14.09Z"
                  fill="#7950F2"
                />
                <path
                  d="M12 18.23C9.88995 18.23 7.76995 17.89 5.75995 17.22C5.36995 17.09 5.15995 16.66 5.28995 16.27C5.41995 15.88 5.84996 15.66 6.23996 15.8C9.95996 17.04 14.05 17.04 17.77 15.8C18.16 15.67 18.59 15.88 18.72 16.27C18.85 16.66 18.64 17.09 18.25 17.22C16.23 17.9 14.11 18.23 12 18.23Z"
                  fill="#7950F2"
                />
              </svg>
            </Link>
          }
        ></Column>
      </DataTable>
    </div>
  );
};

export default TopStories;
