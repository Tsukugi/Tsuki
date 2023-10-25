import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Dashboard from "./views/Dashboard";
import Showcase from "./views/Showcase";
import Sidebar from "./components/Sidebar";

const App = () => {
    return (
        <div className="flex bg-gray-100">
            <Router>
                <Sidebar entries={["Dashboard", "Tsuki"]} />
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
