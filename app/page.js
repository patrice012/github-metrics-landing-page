import { Header } from "./Home/Header";
import { HeaderSliderProvider } from "@/context/headerSliderContext";

export default function Home() {
    return (
        <>
            <HeaderSliderProvider>
                <Header />
            </HeaderSliderProvider>
        </>
    );
}
