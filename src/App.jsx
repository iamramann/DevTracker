import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="container mx-auto h-screen">
      {/* <Toaster
        toastOptions={{
          position: "top-right",
        }}
      /> */}
      <Outlet />
    </div>
  );
}
