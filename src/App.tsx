import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./views/Dashboard";
import Showcase from "./views/Showcase";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/users" element={<Dashboard />} />
                <Route path="/tsuki" element={<Showcase />} />
            </Routes>
        </Router>
    );
};

export default App;
