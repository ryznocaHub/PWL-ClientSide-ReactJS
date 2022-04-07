import * as React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Navigasi, NotFound, Tiket, TiketCreate, TiketView } from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigasi />} />
      <Route path="tiket" element={<Tiket />}>
        <Route path=":tiketId" element={<Login />} />
        <Route path="view" element={<TiketView />} />
        <Route path="create/prop" element={<TiketCreate text="Tambahan dari Props"/>} />
        <Route path="create" element={<TiketCreate />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;