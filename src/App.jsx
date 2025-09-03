// src/App.js
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/client/Navbar";
import Footer from "./components/client/Footer";

/* Main URL */
import Home from "./pages/client/Home";
import AboutUs from "./pages/client/AboutUs";
// import OurProgram from "./pages/client/OurProgram";
import Talent from "./pages/client/Talent";
import Mentor from "./pages/client/Mentor";
import Parents from "./pages/client/Parents";
import Article from "./pages/client/Article";

/* Activities */
import TalentActivities from "./pages/client/TalentActivities";

import ParentsActivity from "./pages/client/ParentsActivity";
import MentorActivity from "./pages/client/MentorActivity";

import ContactUs from "./pages/client/ContactUs";
import ArticleOpennedPage from "./pages/client/ArticleOpennedPage";
import NotFoundPage from "./pages/client/NotFoundPage";

import CmsPrivateRoute from "../src/components/cms/CmsPrivateRoute";
import CmsLoginRoute from "../src/components/cms/CmsLoginRoute";
import CmsLogin from "./pages/cms/CmsLogin";
import CmsKelolaAkun from "./pages/cms/CmsKelolaAkun";
import CmsAddAdmin from "./pages/cms/CmsAddAdmin";
import CmsEditAdmin from "./pages/cms/CmsEditAdmin";
import CmsTalentAcademy from "./pages/cms/CmsTalentAcademy";
import CmsMentorAcademy from "./pages/cms/CmsMentorAcademy";
import CmsParentsAcademy from "./pages/cms/CmsParentsAcademy";
import CmsTalentEditSchool from "./pages/cms/CmsTalentEditSchool";
import CmsTalentEditGroup from "./pages/cms/CmsTalentEditGroup";
import CmsArticleDashboard from "./pages/cms/CmsArticleDashboard";
import CmsArticleEdit from "./pages/cms/CmsArticleEdit";
import CmsArticleAdd from "./pages/cms/CmsArticleAdd";
import CmsTalentAddSchool from "./pages/cms/CmsTalentAddSchool";
import CmsTalentAddGroups from "./pages/cms/CmsTalentAddGroups";

import CmsParticipants from "./pages/cms/CmsParticipants";


import { Helmet } from "react-helmet";

function App() {
  const location = useLocation();

  const hideNavbarAndFooterPaths = [
    "/cms",
    "/cms/kelolaakun",
    "/cms/add/admin",
    "/cms/edit/admin/:id",
    "/cms/talentacademy",
    "/cms/mentoracademy",
    "/cms/parentsacademy",
    "/cms/talent/editschool/:id",
    "/cms/talent/addschool",
    "/cms/talent/editgroup/:id",
    "/cms/talent/addgroup",
    "/cms/article",
    "/cms/article/edit/:id",
    "/cms/article/add",
    "/cms/participants",

  ];

  const shouldHideNavbarAndFooter = hideNavbarAndFooterPaths.some((path) => {
    if (path.includes(":id")) {
      const regex = new RegExp(`^${path.replace(":id", "[^/]+")}$`);
      return regex.test(location.pathname);
    }
    return path === location.pathname;
  });

  return (
    <>
      <Helmet>
        <title>Skyshare Academy Indonesia</title>
      </Helmet>
      {!shouldHideNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourprogram/talent" element={<Talent />} />
        <Route path="/ourprogram/mentor" element={<Mentor />} />

        {/* <Route path="/ourprogram/parents" element={<Parents />} /> */}

        <Route path="/article/:id" element={<ArticleOpennedPage />} />

        {/* <Route
          path="/ourprogram/talent/activities2"
          element={<TalentActivities />}
        /> */}

        <Route
          path="/ourprogram/talent/activities"
          // element={<TalentActivity />}
          element={<TalentActivities />}

        />
        <Route
          path="/ourprogram/mentor/activities"
          element={<MentorActivity />}
        />
        <Route
          // path="/ourprogram/parents/activities"
          element={<ParentsActivity />}
        />

        <Route path="/aboutus" element={<AboutUs />} />

        {/* <Route path="/ourprogram" element={<OurProgram />} /> */}


        <Route path="/article" element={<Article />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/cms" element={<CmsLoginRoute />}>
          <Route path="/cms" element={<CmsLogin />} />
        </Route>

        <Route element={<CmsPrivateRoute />}>
          <Route path="/cms/kelolaakun" element={<CmsKelolaAkun />} />
          <Route path="/cms/add/admin" element={<CmsAddAdmin />} />
          <Route path="/cms/edit/admin/:id" element={<CmsEditAdmin />} />
          <Route path="/cms/talentacademy" element={<CmsTalentAcademy />} />
          <Route path="/cms/mentoracademy" element={<CmsMentorAcademy />} />
          <Route path="/cms/parentsacademy" element={<CmsParentsAcademy />} />
          <Route path="/cms/article" element={<CmsArticleDashboard />} />
          <Route path="/cms/article/edit/:id" element={<CmsArticleEdit />} />
          <Route path="/cms/article/add" element={<CmsArticleAdd />} />
          <Route
            path="/cms/talent/editschool/:id"
            element={<CmsTalentEditSchool />}
          />
          <Route
            path="/cms/talent/addschool"
            element={<CmsTalentAddSchool />}
          />
          <Route
            path="/cms/talent/editgroup/:id"
            element={<CmsTalentEditGroup />}
          />
          <Route path="/cms/talent/addgroup" element={<CmsTalentAddGroups />} />
          <Route path="/cms/participants" element={<CmsParticipants />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {!shouldHideNavbarAndFooter && <Footer />}
    </>
  );
}

export default App;
