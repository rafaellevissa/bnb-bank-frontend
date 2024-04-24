import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ListTransactionsPage } from "../pages/Home";
import { LoginPage } from "../pages/Auth";
import { store } from "../store";
import { SignupPage } from "../pages/Auth/Signup";
import { FormPurchasesPage, ListPurchasesPage } from "../pages/Purchase";
import { FormCheckPage, ListChecksPage } from "../pages/Checks";

const AppRoutes = () => {
  const storage = store.getState();
  const loggedIn = storage.auth.item;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            loggedIn ? (
              <ListTransactionsPage />
            ) : (
              <Navigate replace to="/login" />
            )
          }
        />
        <Route
          path="/login"
          element={!loggedIn ? <LoginPage /> : <Navigate replace to="/" />}
        />
        <Route
          path="/signup"
          element={!loggedIn ? <SignupPage /> : <Navigate replace to="/" />}
        />
        <Route
          path="/purchases"
          element={
            loggedIn ? <ListPurchasesPage /> : <Navigate replace to="/" />
          }
        />
        <Route
          path="/new-purchase"
          element={
            loggedIn ? <FormPurchasesPage /> : <Navigate replace to="/" />
          }
        />
        <Route
          path="/checks"
          element={loggedIn ? <ListChecksPage /> : <Navigate replace to="/" />}
        />
        <Route
          path="/new-check"
          element={loggedIn ? <FormCheckPage /> : <Navigate replace to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
