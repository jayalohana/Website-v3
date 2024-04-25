import Header from "@/components/Header";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import Scroll from "@/components/Scroll";
import Image from "next/image";

export default function Home() {
  return (
    <MaxWidthWrapper className=" lg:flex lg:justify-between gap-5">
      <Header />
      <Scroll />
    </MaxWidthWrapper>
  );
}
