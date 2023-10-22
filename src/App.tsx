import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import "./App.css";

import Dashboard from "./views/Dashboard";
import Showcase from "./views/Showcase";

const App = () => {
    return (
        <div className="flex bg-gray-100">
            <Sidebar entries={["Dashboard", "Tsuki"]} />
            <Router>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/users" element={<Dashboard />} />
                    <Route path="/tsuki" element={<Showcase />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
