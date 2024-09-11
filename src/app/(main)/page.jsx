"use client";

import Page1 from "components/homepage/page1";
import Page2 from "components/homepage/page2";
import { useState } from "react";

export default function MyProject() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState({});
  const onChangePage = (page, data) => {
    setCurrentPage(page);
    setData(data);
  };

  return currentPage === 1 ? (
    <Page1 onChangePage={onChangePage} />
  ) : (
    <Page2 onChangePage={onChangePage} data={data} />
  );
}
