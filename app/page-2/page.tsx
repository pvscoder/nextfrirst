import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import PageTwo from "./components/pagetwo";



export const metadata: Metadata = {
  title: "Page Two",
  description: "Page Two",
};

export default function PageTwoComponent() {
  return (
   <>
    <PageTwo/>
   </>
  );
}
