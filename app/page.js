import { Header } from "./Home/Header";
import { HeaderSliderProvider } from "@/context/headerSliderContext";
import { BetaVersion } from "./Home/BetaVersion";

export default function Home() {
    return (
        <>
            <HeaderSliderProvider>
                <Header />
            </HeaderSliderProvider>
            <BetaVersion/>
        </>
    );
}
