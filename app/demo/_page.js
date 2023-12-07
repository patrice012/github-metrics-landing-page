import { Header } from "./Header";
import { HeaderSliderProvider } from "@/context/headerSliderContext";

export default function Demo() {
    return (
        <>
            <HeaderSliderProvider>
                <Header />
            </HeaderSliderProvider>
            {/* <MainContent /> */}
            {/* <Footer /> */}
        </>
    );
}
