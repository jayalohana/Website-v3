import Header from "@/components/Header";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import Scroll from "@/components/Scroll";
import Image from "next/image";

export default function Home() {
  return (
    <MaxWidthWrapper className="  md:grid grid-cols-2 border h-full overflow-y-hidden">
      <Header />
      <div className="max-h-screen top-0 sticky overflow-y-auto">
        <Scroll />
      </div>
    </MaxWidthWrapper>
  );
}
