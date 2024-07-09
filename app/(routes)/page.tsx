import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Newsletter from "@/components/Newsletter";
import ProcessSteps from "@/components/ProcessSteps";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import { data } from "../Data";
import DeliverySceneWithStats from "@/components/DeliverySceneWithStats";
import FAQSection from "@/components/FAQSection";
import FeatureList from "@/components/FeatureList";
import Banner from "@/components/Banner";
import Nav from "@/components/Nav";
import Header from "@/components/Header";
//import SignInForm from "@/components/Login";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("0e12e5cf-29ab-4529-b8d5-c5371dae1f7b");



  return (
    <>
    <Nav/>
    <Header/>
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard 
          data={billboard}
        />

        
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
    <FeatureList />
    <Banner/>
    <DeliverySceneWithStats />
    <FAQSection />
    <ProcessSteps />  
    <Newsletter/>
    </>

  )
};

export default HomePage;
