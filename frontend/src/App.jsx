import { Button, Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import { useColorModeValue } from "./components/ui/color-mode";
import { useProductStore } from "./store/product";
import { Toaster } from "./components/ui/toaster"; // ✅ import the Toaster

function App() {
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray100", "gray.900")}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
      <Toaster />
    </Box>
  );
}

export default App;
