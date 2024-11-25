import React from "react";
import Tab from "./Tab";
import tabs from "../database/Profile";
import MyAccount from "./Profile - MyAccount";
import Result from "./Profile - Result";

const Tabs = () => {
  const [activeTab, setActiveTab] = React.useState("1");

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="tabs-title-block">
        <div className="tabs">
          {tabs.map((tab) => (
            <Tab
              key={tab.id}
              title={tab.title}
              onClick={() => handleTabClick(tab.id)}
              isActive={tab.id === activeTab}
            />
          ))}
        </div>
      </div>
      
      <div className="tab-content-block">
        <div className="tab-title-txt">{tabs[activeTab - 1].title}</div>
        
        {activeTab == 1 ? <MyAccount/> : ""}
        {activeTab == 2 ? <Result/> : ""}
        {activeTab == 3 ? "" : ""}
      </div>
    </>
  );
};

export default Tabs;
