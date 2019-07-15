import React from "react";
import Header from "../containers/HeaderSection";
import CandidateSection from "../containers/CandidateSection";
import LocationSection from "../containers/LocationSection";
import AlertDialogSlide from "../components/AlertDialogSlide";

const App = () => (
  <div>
    <Header />
    <CandidateSection />
    <LocationSection />
    <AlertDialogSlide />
  </div>
);

export default App;
