import Topbar from "./Topbar";
import StarsC from "./StarsC";
import DeliveryStatusChart from "./DeliveryStatusChart";
import LineChartWidget from "./LineChartWidget";
import TopRiders from "./TopRiders";
import MapWidget from "../auth/MapWidget";

export default function Dashboard() {
  return (
    <>
      <Topbar
        title="Dashboard"
        right={
          <div className="flex items-center bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-3 py-2 gap-2 w-[180px] lg:w-[280px]">
            <span className="text-[#555] text-sm shrink-0">🔍</span>
            <input
              placeholder="Search"
              className="bg-transparent border-none outline-none text-[#aaa] text-sm w-full"
            />
          </div>
        }
      />
      <div className="flex-1 overflow-y-auto px-4 lg:px-7 py-4 lg:py-6 flex flex-col gap-4 lg:gap-5">
        <StarsC />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-3.5">
          <DeliveryStatusChart />
          <LineChartWidget />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-3 lg:gap-3.5">
          <TopRiders />
          <MapWidget />
        </div>
      </div>
    </>
  );
}
