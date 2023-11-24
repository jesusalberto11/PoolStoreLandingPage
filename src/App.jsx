import "./App.css";
import AppFooter from "./components/layout/AppFooter";
import AppHeader from "./components/layout/AppHeader";
import FormSection from "./components/sections/FormSection";
import MainSection from "./components/sections/MainSection";
import PoolsGridSection from "./components/sections/PoolsGridSection";
import ReviewSection from "./components/sections/ReviewSection";
import ServicesSection from "./components/sections/ServicesSection";

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
