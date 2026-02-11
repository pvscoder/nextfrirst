import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import FristPage from "./components/fristpage";

export const metadata: Metadata = {
  title: "Frist Page",
  description: "Frist Page",
};

export default function PageOneComponent() {
  return (
   <>
    <FristPage/>
   </>
  );
}
