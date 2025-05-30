import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">АИС</h1>
                <p className="text-gray-600 mb-6">Добро пожаловать в систему</p>
                <a
                  href="/login"
                  className="bg-violet-600 text-white px-6 py-2 rounded-md hover:bg-violet-700 transition-colors"
                >
                  Войти в систему
                </a>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
