import "./App.css";
import SearchBar from "./components/SearchBar.jsx";

function App() {
    return (
        <div className="app">
            <div className="container">

                <h1 className="title">
                    Weather Dashboard
                </h1>

                <p className="subtitle">
                    Check the weather of any city
                </p>

                <SearchBar />

            </div>
        </div>
    );
}

export default App;