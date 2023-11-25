import React from "react";
import "../../../styles/sections/PoolGridSection/PoolsGridSection.css";
import CommonSection from "../CommonSection";
import SectionTitle from "../SectionTitle";
import { useTranslation } from "react-i18next";

const PoolsGridSection = () => {
  const [t] = useTranslation("global");

  return (
    <CommonSection id={"section-1"}>
      <SectionTitle
        firstTitle={t("POOL-GRID-SECTION.FIRST-TITLE")}
        secondTitle={t("POOL-GRID-SECTION.SECOND-TITLE")}
      />
      <div className="pools-grid-rows">
        <div className="pools-grid-columns">
          <img
            src="img/pool-grid/rock-pool.webp"
            alt={t("POOL-GRID-SECTION.FIRST-IMG-DATA")}
            title={t("POOL-GRID-SECTION.FIRST-IMG-DATA")}
          />
          <img
            src="img/pool-grid/wow-pool-2.webp"
            alt={t("POOL-GRID-SECTION.SECOND-IMG-DATA")}
            title={t("POOL-GRID-SECTION.SECOND-IMG-DATA")}
          />
          <img
            src="img/pool-grid/cool-pool.jpg"
            alt={t("POOL-GRID-SECTION.THIRD-IMG-DATA")}
            title={t("POOL-GRID-SECTION.THIRD-IMG-DATA")}
          />
          <img
            src="img/pool-grid/wow-pool.jpg"
            alt={t("POOL-GRID-SECTION.FOUR-IMG-DATA")}
            title={t("POOL-GRID-SECTION.FOUR-IMG-DATA")}
          />
        </div>
      </div>
    </CommonSection>
  );
};

export default PoolsGridSection;
