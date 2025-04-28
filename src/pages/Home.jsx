import React, { Suspense } from "react";

const HeroSection = React.lazy(() => import("../components/HeroSection"));
const HeroWhatWeDo = React.lazy(() => import("../components/HeroWhatWeDo"));
const HowItWorks = React.lazy(() => import("../components/HowItWorks"));
const HeroGallery = React.lazy(() => import("../components/HeroGallery"));
const ContactForm = React.lazy(() => import("../components/Form/ContactForm"));

const SkeletonLoader = () => (
  <div className="h-60 bg-gray-300 animate-pulse rounded-md"></div>
);

const Home = () => {
  return (
    <>
      <Suspense fallback={<SkeletonLoader />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<SkeletonLoader />}>
        <HeroWhatWeDo />
      </Suspense>

      <Suspense fallback={<SkeletonLoader />}>
        <HowItWorks />
      </Suspense>

      <Suspense fallback={<SkeletonLoader />}>
        <HeroGallery />
      </Suspense>

      <Suspense fallback={<SkeletonLoader />}>
        <ContactForm />
      </Suspense>
    </>
  );
};

export default Home;
