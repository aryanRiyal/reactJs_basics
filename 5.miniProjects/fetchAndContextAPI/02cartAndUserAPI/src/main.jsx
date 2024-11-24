import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import UserApp from "./UserApp.jsx";

import CartApp from "./CartApp";
import { CartProvider } from "./context/Cart";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <UserApp />
        {/* <CartProvider>
            <CartApp />
        </CartProvider> */}
    </StrictMode>
);
