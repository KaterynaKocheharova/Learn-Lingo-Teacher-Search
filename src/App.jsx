import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { useUser } from "./hooks/useUser";
const HomePage = lazy(() => import("./pages/HomePage"));

export default function App() {
  useUser();
  return (
    <div id="App">
      <Suspense fallback={<p>Loading</p>}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Layout>
      </Suspense>
    </div>
  );
}
