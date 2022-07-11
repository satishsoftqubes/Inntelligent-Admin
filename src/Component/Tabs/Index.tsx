import { FC } from "react";
import { Tab, Tabs } from "react-bootstrap";

type TabProps = {
  tabPaneList: {
    key: string;
    tabTitle: string;
    tabContent: any;
  }[];
};

const TabsView: FC<TabProps> = (props) => {
  const { tabPaneList } = props;
  return (
    <Tabs defaultActiveKey={Array[0]} id="uncontrolled-tab-example" className="tab-component mb-3">
      {tabPaneList?.map(({ key, tabTitle, tabContent }) => (
        <Tab key={key} eventKey={tabTitle} title={tabTitle}>
          {tabContent}
        </Tab>
      ))}
    </Tabs>
  );
};

export default TabsView;
