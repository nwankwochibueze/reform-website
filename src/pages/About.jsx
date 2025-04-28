import React, { Suspense } from "react";

const AboutUsHero = React.lazy(() => import("../components/AboutUsHero"));

const About = () => {
  return (
    <>
      <Suspense
        fallback={<div className="h-60 bg-gray-300 animate-pulse"></div>}
      >
        <AboutUsHero />
      </Suspense>
    </>
  );
};

export default About;
