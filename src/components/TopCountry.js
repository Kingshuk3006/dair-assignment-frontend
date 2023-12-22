import React from "react";
import styles from "@/styles/LocationCountry.module.scss";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const TopCountry = () => {
  const data = [
    {
      country: "United States",
      visit: 1223,
    },
    {
      country: "Brazil",
      visit: 1223,
    },
    {
      country: "Russia",
      visit: 1223,
    },
    {
      country: "France",
      visit: 1223,
    },
    {
      country: "Canada",
      visit: 1223,
    },
    {
      country: "India",
      visit: 1223,
    },
    {
      country: "New Zeeland",
      visit: 1223,
    },
    {
      country: "Japan",
      visit: 1223,
    },
    {
      country: "Egypt",
      visit: 1223,
    },
    {
      country: "Nepal",
      visit: 1223,
    },
  ];

  return (
    <div className={styles.right_card}>
      <div className={styles.map}>
        <h3>User by Location</h3>
        <img src="/Earth.png" />
      </div>
      <div>
        <h3 className={styles.top_country_heading}>Top 10 country</h3>
        <div className="country-table-wrapper">
          <DataTable
            value={data}
            stripedRows
            showGridlines={false}
            scrollable
            scrollHeight="20rem"
          >
            <Column
              field="country"
              header={<span className={styles.table_header}>Country</span>}
            />
            <Column
              field="visit"
              header={<span className={styles.table_header}>Visit</span>}
            />
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default TopCountry;
