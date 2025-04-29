import ArrayCard from "@/components/ArrayCard";
import ContinueSwiper from "@/components/ContinueSwiper";
import Dropdown from "@/components/Dropdown";
import OverflowSwiper from "@/components/OverflowSwiper";
import Tabs from "@/components/Tabs";
import TheamToggle from "@/components/TheamToggle";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="">
      <Suspense>
        <ArrayCard />
      </Suspense>

      {/* <Dropdown/> */}
      {/* <TheamToggle/>
      <Tabs />
      <OverflowSwiper />
      <ContinueSwiper/> */}
    </div>
  );
}
