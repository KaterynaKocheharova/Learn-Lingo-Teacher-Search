import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import AuthProvider from "./components/Auth/AuthProvider";
import Loader from "./components/common/Loader";
import "./data/options";
import PrivateRoute from "./components/PrivateRoute";
import { Box } from "@chakra-ui/react";

const HomePage = lazy(() => import("./pages/HomePage"));
const TeachersPage = lazy(() => import("./pages/TeachersPage"));
const FavoriteTeachersPage = lazy(() => import("./pages/FavoriteTeachersPage"));

export default function App() {
  return (
    <Box id="App" minHeight="100%">
      <Suspense fallback={<Loader />} style={{
        minHeight: "100%"
      }}>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/teachers" element={<TeachersPage />} />
              {/* <Route path="/favorites" element={<FavoriteTeachersPage />} /> */}
              <Route
              path="/favorites"
              element={
                <PrivateRoute
                  component={<FavoriteTeachersPage />}
                  redirectTo="/"
                />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Layout>
        </AuthProvider>
      </Suspense>
    </Box>
  );
}
