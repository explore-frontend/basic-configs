import { ConfigProvider, Layout } from "antd";
import { useEffect, Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import FallbackLoading from "@/components/FallbackLoading";
import { browserRoute } from "@/routes";
import { useStore } from "@/store";

import theme from "./config/antd-theme";

function App() {
  const fetchUserInfo = useStore((state) => state.fetchUserInfo);
  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);

  return (
    <ConfigProvider theme={theme}>
      <Suspense fallback={<FallbackLoading />}>
        <RouterProvider router={browserRoute} />
      </Suspense>
    </ConfigProvider>
  );
}

export default App;
