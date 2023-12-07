import { Header } from "./Home/Header";
import { HeaderSliderProvider } from "@/context/headerSliderContext";
import { BetaVersion } from "./Home/BetaVersion";
import { Features } from "./Home/AboutContext";
import { ItemsFeatures } from "@/components/ItemsFeatures/ItemsFeatures";
export default function Home() {
    return (
        <>
            <HeaderSliderProvider>
                <Header />
            </HeaderSliderProvider>
            <BetaVersion />
            <ItemsFeatures/>
            <Features/>
        </>
    );
}
