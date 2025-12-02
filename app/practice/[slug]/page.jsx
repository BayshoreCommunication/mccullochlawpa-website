import Image from "next/image";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection";
import PracticeDetails from "@/components/practice/PracticeDetails";

const page = async ({ params }) => {
  return (
    <>
      <BreadcrumbSection
        title="Explore the Services We Offer in 
   Personal Injury and Criminal Defense"
        subtitle="McCulloch Law, P.A. offers a focused range of services designed to support clients during some of the most challenging moments of their lives. The firm handles both personal injury and criminal defense matters with the same level of care, preparation, and attention to detail. Every case begins with understanding your situation, explaining what to expect, and building a strategy that fits your needs. Whether you’ve been injured in an accident or are facing a criminal charge, the goal is to provide steady guidance, clear communication, and strong representation from start to finish."
      />
      <PracticeDetails />
    </>
  );
};

export default page;
