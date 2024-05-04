import { Provider as ReduxProvider } from "react-redux";
import { CssBaseline } from "@mui/material";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import AppRoutes from "./routes";
import { Toaster } from "react-hot-toast";

import "./services/i18n-setup";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <CssBaseline />
        <AppRoutes />
        <Toaster />
      </PersistGate>
    </ReduxProvider>
  );
}
