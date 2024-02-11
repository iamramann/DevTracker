import { useEffect } from "react";
import { useState } from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import {
  AdjustmentsHorizontalIcon,
  BookmarkSquareIcon,
  BugAntIcon,
  HomeModernIcon,
  UserIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

import { getAnalytics } from "../constant";
import { CardComponent, Monthly, WorkingAreas } from "../components";
import { Link } from "react-router-dom";
function Dashboard() {
  const [analytics, setAnalytics] = useState([]);

  const setAnalyticsData = () => {
    setAnalytics(getAnalytics());
  };

  useEffect(() => {
    setAnalyticsData();
  }, []);

  function renderSwitchIcon(param) {
    switch (param) {
      case 1:
        return <BugAntIcon />;
      case 2:
        return <WrenchScrewdriverIcon />;
      case 3:
        return <BookmarkSquareIcon />;
      case 4:
        return <UserIcon />;
      case 5:
        return <HomeModernIcon />;
      default:
        return <AdjustmentsHorizontalIcon />;
    }
  }

  return (
    <div className="mx-2">
      <div className="row-1-heading py-3">
        <Breadcrumbs className="px-0">
          <Link to="/" className="opacity-60">
            Home
          </Link>
          <a href="#">Dashboard</a>
        </Breadcrumbs>
      </div>
      <div>
        <div className="row-2-analytics">
          <h1 className="text-md lg:text-2xl mb-2">Analytics</h1>
          <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
            {analytics.map((item) => (
              <CardComponent
                key={item.id}
                item={item}
                className={item.colorScheme}
              >
                {renderSwitchIcon(item.id)}
              </CardComponent>
            ))}
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
          <Monthly />
          <WorkingAreas />
          <Monthly />
        </div>

        {/* <div className="row-3-task-list">
          <h1 className="text-2xl mb-2">Task List</h1>
          <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
            In Progress...
          </div>
        </div> */}
      </div>
    </div>
  );
}

// from-teal-900 to-green-800

export default Dashboard;
