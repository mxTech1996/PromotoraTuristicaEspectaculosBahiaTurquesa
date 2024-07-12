"use client";
import { useRouter } from "next/navigation";
import { navData } from "@/data";
import { NavbarV2 } from "ecommerce-mxtech";
import { useInformation } from "@/store/useInformation";


const Navbar = () => {
  const { dataSite } = useInformation();
  const router = useRouter();

  return (
    <NavbarV2
      linksProps={{
        variant: "link-v2",
        align: "left",
      }}
      textColor="#fff"
      stylesLinkV2={{
        color: "#fff",
      }}
      withLogo={true}
      imageProps={{
        src: dataSite.iconImage,
        className: "w-36",
      }}
      links={navData}
      onClickProduct={(product) => {
        router.push(`/product/${product.id}`);
      }}
      buttonCartProps={{
        onClick: () => router.push("/my-cart"),
      }}
      buttonContactProps={{
        onClick: () => router.push("/more-information"),
      }}
      withSearch={false}
      onRedirect={(path) => router.push(path)}
      onSearch={(value) => { }}
      stylesContentLink={{
        color: "#fff",
        backgroundColor: "#003366",
        justifyContent: "center",
      }}
    />
  );
};

export default Navbar;
