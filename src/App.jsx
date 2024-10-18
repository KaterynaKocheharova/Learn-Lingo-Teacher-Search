import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AuthProvider from "./components/Auth/AuthProvider";

const HomePage = lazy(() => import("./pages/HomePage"));

export default function App() {

  return (
    <div id="App">
      <Suspense fallback={<p>Loading</p>}>
        <AuthProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Layout>
        </AuthProvider>
      </Suspense>
    </div>
  );
}
