import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "../page";
import UploadArquivo from "../page/uploadArquivo";
import EdicaoArquivo from "../page/edicaoArquivo";

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Page />} />
            <Route path="/UploadArquivo" element={<UploadArquivo />} />
            <Route path="/EdicaoArquivo" element={<EdicaoArquivo />} />
            <Route path="*" element={<h1>Pagina não encontrada</h1>} />
        </Routes>
    </BrowserRouter>
  );
}