import React from "react";
import CmsNavbar from "../../components/cms/CmsNavbar";
import CmsArticleDashboardTable from "../../components/cms/ArticlesManagement/CmsArticleDashboardTable";

function CmsArticleDashboard() {
  return (
    <>
      <CmsNavbar />
      <CmsArticleDashboardTable />
    </>
  );
}
export default CmsArticleDashboard;
