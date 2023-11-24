import React from "react";
import "../../styles/sections/PoolsGridSection.css";
import CommonSection from "./CommonSection";
import SectionTitle from "./SectionTitle";

const PoolsGridSection = () => {
  return (
    <CommonSection id={"section-1"}>
      <SectionTitle
        firstTitle="EXCELENCIA Y CALIDAD"
        secondTitle="Nuestra filosofia"
      />
      <div className="pools-grid-rows">
        <div className="pools-grid-columns">
          <img
            src="img/pool-grid/rock-pool.webp"
            alt="Una hermosa piscina hecha de cuarzo y al lado de una escalera de rocas"
            title="Una hermosa piscina hecha de cuarzo y al lado de una escalera de rocas"
          />
          <img
            src="img/pool-grid/wow-pool-2.webp"
            alt="Una hermosa piscina hecha de madera"
            title="Una hermosa piscina hecha de madera"
          />
          <img
            src="img/pool-grid/cool-pool.jpg"
            alt="Una hermosa piscina hecha con una pequeña cascada de rocas"
            title="Una hermosa piscina hecha con una pequeña cascada de rocas"
          />
          <img
            src="img/pool-grid/wow-pool.jpg"
            alt="Una hermosa piscina en un patio hermoso"
            title="Una hermosa piscina en un patio hermoso"
          />
        </div>
      </div>
    </CommonSection>
  );
};

export default PoolsGridSection;
