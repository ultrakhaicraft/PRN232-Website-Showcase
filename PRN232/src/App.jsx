import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import Homepage from "./features/HomePage/HomePage";



export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
          <Homepage />
      </Suspense>
    </BrowserRouter>
  );
}
