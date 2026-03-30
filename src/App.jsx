import React from 'react'
import BlogHero from "./Components/Blog/BlogHero";
import BlogCard from "./Components/Blog/BlogCard";
import BlogGrid from "./Components/Blog/BlogGrid";
import BlogNews from "./Components/Blog/BlogNews"
const App = () => {
  return (
    <div>
      <BlogHero />
      <BlogCard />
      <BlogGrid />
      <BlogNews />
    </div>
  )
}

      {/* Common Header (all pages) */}
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;