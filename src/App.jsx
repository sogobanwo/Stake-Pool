import { configureWeb3Modal } from "./connection";
import "@radix-ui/themes/styles.css";
import { Toaster } from "react-hot-toast";
import Header from "./component/Header";


configureWeb3Modal();

function App() {

    return (
        <>
            <Header />
            <Toaster />
        </>
    );
}

export default App;
