import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UrlDetailsPage from "./pages/UrlDetailsPage";
import Header from "./components/Header";
import RedirectPage from "./pages/RedirectPage";
import PageNotFound from "./pages/PageNotFound";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomePage />
            </>
          }
        />
        <Route
          path="/link-details/:id"
          element={
            <>
              <Header />
              <UrlDetailsPage />
            </>
          }
        />
        <Route path="/:id" element={<RedirectPage />} />
        <Route
          path="*"
          element={
            <>
              <Header />
              <PageNotFound />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
