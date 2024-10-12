import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

const HomePage = lazy(() => import("./pages/HomePage"));

export default function App() {
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
