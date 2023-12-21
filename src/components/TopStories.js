import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dropdown } from "primereact/dropdown";
import React from "react";
import styles from "@/styles/Activities.module.scss";

const TopStories = () => {
  const template2 = {
    layout: "RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink",
    RowsPerPageDropdown: (options) => {
      const dropdownOptions = [
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 50, value: 50 },
      ];

      return (
        <React.Fragment>
          <span
            className="mx-1"
            style={{ color: "var(--text-color)", userSelect: "none" }}
          >
            Items per page:{" "}
          </span>
          <Dropdown
            value={options.value}
            options={dropdownOptions}
            onChange={options.onChange}
          />
        </React.Fragment>
      );
    },
    CurrentPageReport: (options) => {
      return (
        <span
          style={{
            color: "var(--text-color)",
            userSelect: "none",
            width: "120px",
            textAlign: "center",
          }}
        >
          {options.first} - {options.last} of {options.totalRecords}
        </span>
      );
    },
  };

  const tableStyle = {
    
  }
  const values = [
    {
      title: "Kingshuk",
      storyViews: 121,
      paywallClicks: 121,
      purchaseAmount: 121,
      read: "121",
    },
    {
      title: "Kingshuk",
      storyViews: 121,
      paywallClicks: 121,
      purchaseAmount: 121,
      read: "121",
    },
  ];

  return (
    <div className={styles.topStories_container}>
      <h2>Top stories in last 30 days</h2>
      <DataTable
        value={values}
        tableStyle={tableStyle}
        paginator
        paginatorTemplate={template2}
        // first={first2}
        // rows={rows2}
        // onPage={onCustomPage2}
        paginatorClassName="justify-content-end"
        className="mt-6"
      >
        <Column field="title" header="Title"></Column>
        <Column field="storyViews" header="Story Views"></Column>
        <Column field="paywallClicks" header="Paywall Clicks"></Column>
        <Column field="purchaseAmount" header="Purchase Amount"></Column>
        <Column field="read" header="read"></Column>
      </DataTable>
    </div>
  );
};

export default TopStories;
