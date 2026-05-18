import websites from "../content/websites";
import ServicePageLayout from "../components/ServicePageLayout";

const Websites = () => (
  <ServicePageLayout content={websites} currentRoute="/websites" />
);

export default Websites;
