import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { AuthProvider } from "./context/AuthContext.tsx";
import PrivateRoute from "./context/PrivateRoute.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AuthProvider>
      <PrivateRoute>
        <App />
      </PrivateRoute>
    </AuthProvider>
  </Provider>
);
