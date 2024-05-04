import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ListTransactionsPage } from "../pages/Home";
import { LoginPage } from "../pages/Auth";
import { store } from "../store";
import { SignupPage } from "../pages/Auth/Signup";
import { FormPurchasesPage, ListPurchasesPage } from "../pages/Purchase";
import { FormCheckPage, ListChecksPage } from "../pages/Checks";
import { ListChecksControlPage } from "../pages/Checks/ListChecksControl";
import { ChecksApprovePage } from "../pages/Checks/ChecksApprove";

const AppRoutes = () => {
  const storage = store.getState();
  const loggedIn = !!storage?.auth?.item;
  const permissions = storage?.auth?.item?.permissions;

  const can = (targetPermission: string) =>
    permissions.find((permission: any) => permission.name === targetPermission);

  const HomePage = () => {
    if (can("checks.list")) {
      return <ListChecksControlPage />;
    }

    return <ListTransactionsPage />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!loggedIn ? <LoginPage /> : <HomePage />} />
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
        <Route
          path="/checks-control"
          element={
            loggedIn ? <ListChecksControlPage /> : <Navigate replace to="/" />
          }
        />
        <Route
          path="/checks-approve/:id"
          element={
            loggedIn ? <ChecksApprovePage /> : <Navigate replace to="/" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
