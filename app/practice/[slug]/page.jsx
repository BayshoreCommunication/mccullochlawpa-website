import PersonalInjuryServices from "@/components/practice/PersonalInjuryServices";
import BreadcrumbSection from "@/components/shared/BreadcrumbSection"; 
export default function Page({ params }) {
  const service = PersonalInjuryServices.find(
    (s) => s.slug === params.slug
  );

  if (!service) return <div>Service not found</div>;

  return (
    <>
    <BreadcrumbSection
        title={service.title}
        subtitle={service.description}
      />
      <h1>{service.title}</h1>
      <p>{service.description}</p>
    </>
  );
}
