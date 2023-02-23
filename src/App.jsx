import { Route, Routes, Navigate } from "react-router-dom";
import CreateLink from "./components/CreateLink";
import LinkList from "./components/LinkList";
import Header from "./components/Header";
import Login from "./components/Login";
import Search from "./components/Search";

function App() {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<Navigate replace to="/new/1" />} />
          {/* <Route path="/" element={<LinkList />} /> */}
          <Route path="/create" element={<CreateLink />} />
          <Route path="/login" element={<Login />} />

          <Route path="/search" element={<Search />} />
          <Route path="/top" element={<LinkList />} />
          <Route path="/new/:page" element={<LinkList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
