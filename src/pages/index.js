import dynamic from "next/dynamic";
import BannerOne from "@/components/BannerOne/BannerOne";
import BlogOne from "@/components/BlogOne/BlogOne";
const BrandOneWithNoSSR = dynamic(
  () => import("@/components/BrandOne/BrandOne"),
  { ssr: false }
);
import CtaOne from "@/components/CtaOne/CtaOne";
import CtaThree from "@/components/CtaThree/CtaThree";
import CtaTwo from "@/components/CtaTwo/CtaTwo";
import FunFactOne from "@/components/FunFactOne/FunFactOne";
import Layout from "@/components/Layout/Layout";
import PricingOne from "@/components/PricingOne/PricingOne";
import ServiceOne from "@/components/ServiceOne/ServiceOne";
import TestimonialsOne from "@/components/TestimonialsOne/TestimonialsOne";
import React from "react";

const Home = () => {
  return (
    <Layout pageTitle="Home One">
      <BannerOne />
      <ServiceOne />
      <CtaThree />
      <CtaTwo />
      <PricingOne />
      <TestimonialsOne />

      <BrandOneWithNoSSR />
      <FunFactOne />
      <BlogOne totalBlogs={2} isScrollActive />
      <CtaOne isScrollActive />
    </Layout>
  );
};

export default Home;
