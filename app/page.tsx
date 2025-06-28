import { Link } from "@heroui/link";
import { Fragment } from "react";
import MainBanner from "../components/MainBanner"
import WhatWill from "../components/WhatWill";
import PathtoSolution from "../components/PathtoSolution";
import AreyouReady from "../components/AreyouReady";
import Ourcomes from "../components/Outcomes";
import CreateSustainable from "../components/CreateSustainable";
import CapitalizeOn from "../components/CapitalizeOn";
import ContactUs from "../components/ContactUs";

export default function Home() {
  return (
   <Fragment>
    <MainBanner/>
    <WhatWill/>
    <PathtoSolution/>
    <AreyouReady/>
    <Ourcomes/>
    <CreateSustainable/>  
    <CapitalizeOn/>
    <ContactUs/>
   </Fragment>
  );
}
