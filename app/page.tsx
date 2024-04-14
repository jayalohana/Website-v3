import Header from "@/components/Header";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import Scroll from "@/components/Scroll";
import Image from "next/image";

export default function Home() {
  return (
    <MaxWidthWrapper className=" mt-10 mb-10 md:flex border">
      <Header />
      <Scroll />
    </MaxWidthWrapper>
  );
}
