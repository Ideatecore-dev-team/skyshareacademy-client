// src/App.jsx
import React from "react";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./components/client/Navbar";
import Footer from "./components/client/Footer";

/* Pages */
import Home from "./pages/client/Home";
import AboutUs from "./pages/client/AboutUs";
import Talent from "./pages/client/Talent";
import Mentor from "./pages/client/Mentor";
import Article from "./pages/client/Article";
import TalentActivities from "./pages/client/TalentActivities";
import MentorActivity from "./pages/client/MentorActivity";
import ParentsActivity from "./pages/client/ParentsActivity";
import ContactUs from "./pages/client/ContactUs";
import ArticleOpennedPage from "./pages/client/ArticleOpennedPage";
import NotFoundPage from "./pages/client/NotFoundPage";

/* CMS */
import CmsPrivateRoute from "./components/cms/CmsPrivateRoute";
import CmsLoginRoute from "./components/cms/CmsLoginRoute";
import CmsLogin from "./pages/cms/CmsLogin";
import CmsKelolaAkun from "./pages/cms/CmsKelolaAkun";
import CmsAddAdmin from "./pages/cms/CmsAddAdmin";
import CmsEditAdmin from "./pages/cms/CmsEditAdmin";
import CmsTalentAcademy from "./pages/cms/CmsTalentAcademy";
import CmsTalentEditSchool from "./pages/cms/CmsTalentEditSchool";
import CmsTalentEditGroup from "./pages/cms/CmsTalentEditGroup";
import CmsTalentAddSchool from "./pages/cms/CmsTalentAddSchool";
import CmsTalentAddGroups from "./pages/cms/CmsTalentAddGroups";
import CmsMentorAcademy from "./pages/cms/CmsMentorAcademy";
import CmsMentorAddEventForm from "./pages/cms/MentorAcademy/CmsMentorAddEvent";
import CmsMentorEditEventForm from "./pages/cms/MentorAcademy/CmsMentorEditEvent";
import CmsMentorAddParticipant from "./pages/cms/MentorAcademy/CmsMentorAddParticipant";
import CmsParentsAcademy from "./pages/cms/CmsParentsAcademy";
import CmsArticleDashboard from "./pages/cms/CmsArticleDashboard";
import CmsArticleEdit from "./pages/cms/CmsArticleEdit";
import CmsArticleAdd from "./pages/cms/CmsArticleAdd";

export default function App() {
  const location = useLocation();

  // 🧭 Semua path CMS yang tidak butuh navbar/footer
  const hideNavbarAndFooterPaths = [
    "/cms",
    "/cms/kelolaakun",
    "/cms/add/admin",
    "/cms/edit/admin/:id",
    "/cms/talentacademy",
    "/cms/mentoracademy",
    "/cms/parentsacademy",
    "/cms/talent/addschool",
    "/cms/talent/editschool/:id",
    "/cms/talent/addgroup",
    "/cms/talent/editgroup/:id",
    "/cms/mentor/addevent",
    "/cms/mentor/editevent/:id",
    "/cms/mentor/editevent/:id/participants/add",
    "/cms/article",
    "/cms/article/edit/:id",
    "/cms/article/add",
    "/cms/participants",
  ];

  const shouldHideNavbarAndFooter = hideNavbarAndFooterPaths.some((path) =>
    matchPath({ path, end: true }, location.pathname)
  );

  // 🌐 Routes publik
  const publicRoutes = [
    { path: "/", element: <Home /> },
    { path: "/ourprogram/talent", element: <Talent /> },
    { path: "/ourprogram/mentor", element: <Mentor /> },
    { path: "/ourprogram/talent/activities", element: <TalentActivities /> },
    { path: "/ourprogram/mentor/activities", element: <MentorActivity /> },
    { path: "/ourprogram/parents/activities", element: <ParentsActivity /> },
    { path: "/aboutus", element: <AboutUs /> },
    { path: "/article", element: <Article /> },
    { path: "/article/:id", element: <ArticleOpennedPage /> },
    { path: "/contactus", element: <ContactUs /> },
  ];

  // 🌐 Routes CMS private
  const cmsPrivateRoutes = [
    { path: "/cms/kelolaakun", element: <CmsKelolaAkun /> },
    { path: "/cms/add/admin", element: <CmsAddAdmin /> },
    { path: "/cms/edit/admin/:id", element: <CmsEditAdmin /> },
    { path: "/cms/talentacademy", element: <CmsTalentAcademy /> },
    { path: "/cms/mentoracademy", element: <CmsMentorAcademy /> },
    { path: "/cms/parentsacademy", element: <CmsParentsAcademy /> },
    { path: "/cms/article", element: <CmsArticleDashboard /> },
    { path: "/cms/article/edit/:id", element: <CmsArticleEdit /> },
    { path: "/cms/article/add", element: <CmsArticleAdd /> },
    { path: "/cms/talent/editschool/:id", element: <CmsTalentEditSchool /> },
    { path: "/cms/talent/addschool", element: <CmsTalentAddSchool /> },
    { path: "/cms/talent/editgroup/:id", element: <CmsTalentEditGroup /> },
    { path: "/cms/talent/addgroup", element: <CmsTalentAddGroups /> },
    { path: "/cms/mentor/addevent", element: <CmsMentorAddEventForm /> },
    { path: "/cms/mentor/editevent/:id", element: <CmsMentorEditEventForm /> },
    { path: "/cms/mentor/editevent/:id/participants/add", element: <CmsMentorAddParticipant /> },
  ];

  return (
    <>
      <Helmet>
        <title>Skyshare Academy Indonesia</title>
      </Helmet>

      {!shouldHideNavbarAndFooter && <Navbar />}

      <Routes>
        {/* Public routes */}
        {publicRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

        {/* CMS login route */}
        <Route path="/cms" element={<CmsLoginRoute />}>
          <Route path="/cms" element={<CmsLogin />} />
        </Route>

        {/* CMS private routes */}
        <Route element={<CmsPrivateRoute />}>
          {cmsPrivateRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Route>

        {/* Not found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {!shouldHideNavbarAndFooter && <Footer />}
    </>
  );
}
