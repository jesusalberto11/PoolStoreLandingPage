import "./App.css";
import AppFooter from "./components/layout/AppFooter";
import AppHeader from "./components/layout/AppHeader";
import FormSection from "./components/sections/FormSection/FormSection";
import MainSection from "./components/sections/MainSection/MainSection";
import PoolsGridSection from "./components/sections/PoolGridSection/PoolsGridSection";
import ReviewSection from "./components/sections/ReviewSection/ReviewSection";
import ServicesSection from "./components/sections/ServiceSection/ServicesSection";

function App() {
  return (
    <>
      <AppHeader />
      <main>
        <MainSection />
        <PoolsGridSection />
        <hr />
        <ServicesSection />
        <hr />
        <ReviewSection />
        <hr />
        <FormSection />
        <hr />
      </main>
      <AppFooter />
    </>
  );
}

export default App;
