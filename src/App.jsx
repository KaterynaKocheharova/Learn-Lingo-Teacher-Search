import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AuthProvider from "./components/Auth/AuthProvider";

const HomePage = lazy(() => import("./pages/HomePage"));
const TeachersPage = lazy(() => import("./pages/TeachersPage"));

export default function App() {
  return (
    <div id="App">
      <Suspense fallback={<p>Loading</p>}>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/teachers" element={<TeachersPage />} />
            </Routes>
          </Layout>
        </AuthProvider>
      </Suspense>
    </div>
  );
}
