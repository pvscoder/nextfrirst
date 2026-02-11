import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import PageThree from "./components/pagethree";

export const metadata: Metadata = {
  title: "Page Three",
  description: "Page Three",
};

export default function PageThreeComponent() {
  return (
   <>
    <PageThree />
    
   </>
  );
}
