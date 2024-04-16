import type { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  components: {
    Button: {
      borderRadius: 4,
      colorTextDisabled: "#bbbdbf",
    },
    Input: {
      borderRadius: 2,
    },
    Select: {
      borderRadius: 2,
    },
    DatePicker: {
      borderRadius: 2,
    },
    Radio: {
      lineHeight: 2.286, // 32px/14
    },
    Checkbox: {
      lineHeight: 2.286,
    },
    Tabs: {
      fontSize: 16,
      colorText: "#8c8c8c",
    },
    Table: {
      borderRadius: 4,
    },
  },
};

export default theme;
