import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import {
  Tab,
  TabBody,
  TabContainer,
  TabHead,
} from "../styles/pages/Tabs.style";

const Tabs = ({ router }) => {
  const {
    query: { tab },
  } = router;

  const isTabOne = tab === "1" || tab == null;
  const isTabTwo = tab === "2";
  const isTabThree = tab === "3";
  const isTabFour = tab === "4";
  const isTabFive = tab === "5";
  const isTabSix = tab === "6";

  return (
    <TabContainer>
      <TabHead>
        <Tab selected={isTabOne}>
          <Link href={{ pathname: "/", query: { tab: "1" } }}>
            <a>First</a>
          </Link>
        </Tab>
        <Tab selected={isTabTwo}>
          <Link href={{ pathname: "/", query: { tab: "2" } }}>
            <a>Second</a>
          </Link>
        </Tab>
        <Tab selected={isTabThree}>
          <Link href={{ pathname: "/", query: { tab: "3" } }}>
            <a>Third</a>
          </Link>
        </Tab>
        <Tab selected={isTabFour}>
          <Link href={{ pathname: "/", query: { tab: "4" } }}>
            <a>Fourth</a>
          </Link>
        </Tab>
        <Tab selected={isTabFive}>
          <Link href={{ pathname: "/", query: { tab: "5" } }}>
            <a>Fifth</a>
          </Link>
        </Tab>
        <Tab selected={isTabSix}>
          <Link href={{ pathname: "/", query: { tab: "6" } }}>
            <a>Sixth</a>
          </Link>
        </Tab>
      </TabHead>
      <TabBody>
        {isTabOne && <React.Fragment>This is First Tab</React.Fragment>}
        {isTabTwo && <React.Fragment>This is Second Tab</React.Fragment>}
        {isTabThree && <React.Fragment>This is Third Tab</React.Fragment>}
        {isTabFour && <React.Fragment>This is Fourth Tab</React.Fragment>}
        {isTabFive && <React.Fragment>This is Fifth Tab</React.Fragment>}
        {isTabSix && <React.Fragment>This is Sixth Tab</React.Fragment>}
      </TabBody>
    </TabContainer>
  );
};

export default withRouter(Tabs);
