
// import './App.css'
// import Navbar from './Navbar.jsx'
// // import Search from './Search.jsx'
// import Banner from './Banner.jsx'


// function App() {

//   return (
//     <>
//   <Navbar/>
//   {/* <Search/> */}
//   <Banner/>


//     </>
//   )
// }

// export default App




import Navbar from './Navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import Banner from './Banner.jsx';
import ProductPage from './ProductPage.jsx';
import PromoBanner from './PromoBanner.jsx';

function App() {
  return (
    <>
      <Navbar />
<PromoBanner/>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;