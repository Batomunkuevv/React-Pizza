import { Pages } from "../../pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "../layout";

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Pages.Main />}></Route>
                    <Route path="cart" element={<Pages.Cart />}></Route>
                </Route>
            </Routes>
        </Router>
    );
};
