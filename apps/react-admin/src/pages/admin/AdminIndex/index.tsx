import { Button, Checkbox, DatePicker, Popover, Radio, Tabs } from "antd";

export default function Index() {
  return (
    <div>
      <Button type="primary">test button</Button>
      <Button type="primary" disabled>
        test button
      </Button>
      <Radio.Group>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </Radio.Group>
      <Checkbox>123</Checkbox>
      <Tabs
        defaultActiveKey="1"
        centered
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab ${id}`,
            key: id,
            children: `Content of Tab Pane ${id}`,
          };
        })}
      />
      <Popover content="1234">
        <Button>popover</Button>
      </Popover>
      <DatePicker />
    </div>
  );
}
