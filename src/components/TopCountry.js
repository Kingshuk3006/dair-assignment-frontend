import React from "react";
import styles from "@/styles/LocationCountry.module.scss";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const TopCountry = () => {
  const data = [
    {
      country: "India",
      visit: 1223,
    },
    {
      country: "India",
      visit: 1223,
    },
    {
      country: "India",
      visit: 1223,
    },
    {
      country: "India",
      visit: 1223,
    },
  ];

  return (
    <div className={styles.right_card}>
      <div></div>
      <div>
        <h3 className={styles.top_country_heading}>Top 10 country</h3>
        <DataTable value={data} stripedRows showGridlines={false} borde>
          <Column field="country" header="Country" />
          <Column field="visit" header="Visit" />
        </DataTable>
      </div>
    </div>
  );
};

export default TopCountry;
