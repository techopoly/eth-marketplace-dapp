import { Navbar, Footer, Hero, BreadCrumbs } from "@components/Common";
import { EthRate, WalletBar } from "@components/web3";
import CourseList from "@components/Course";
import Order from "@components/order";

export default function Home() {
  return (
    <div>
      <div className="relative bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4">
          <Navbar />

          <div className="fit">
            <Hero />
            <BreadCrumbs />
            <WalletBar />
            <EthRate />
            <Order />
            <CourseList />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}
