"use client";

import Page1 from "components/translation/page1";
import Page2 from "components/translation/page2";
import Page3 from "components/translation/page3";
import { useState } from "react";

export default function TranslationPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState({});
  const onChangePage = (page, data) => {
    setCurrentPage(page);
    setData(data);
  };

  function getPage(currentPage) {
    if (currentPage === 1) {
      return <Page1 onChangePage={onChangePage} />;
    } else if (currentPage === 2) {
      return <Page2 onChangePage={onChangePage} data={data} />;
    } else if (currentPage === 3) {
      return <Page3 onChangePage={onChangePage} data={data} />;
    }
  }

  return getPage(currentPage);
}
