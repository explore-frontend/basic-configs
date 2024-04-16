import { Spin } from "antd";

export default function FallbackLoading() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Spin tip="加载中..." />
    </div>
  );
}
