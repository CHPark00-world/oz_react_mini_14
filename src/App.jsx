import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './component/Home';
import Layout from './component/Layout';
import {lazy, Suspense} from 'react';

const MovieDetail = lazy(() => import('./component/MovieDetail'));

const App = () => {

  return(
    <Routes>
      <Route  element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={
          <Suspense fallback={<div>🎬 페이지 로딩 중...</div>}>
            <MovieDetail/>
          </Suspense> }/>
      </Route>
    </Routes>
  );
}

export default App;

