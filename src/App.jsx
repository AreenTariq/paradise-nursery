import React from 'react';
import AboutUs from './AboutUs';
import './App.css';

function App() {
return ( <div> <section className="hero"> <div className="hero-content"> <h1>Paradise Nursery</h1> <p>Bring nature into your home with our beautiful plants.</p>
<button onClick={() => {
window.location.href = '#plants';
}}>
Get Started </button> </div> </section>

```
  <AboutUs />

  <section id="plants" className="about-section">
    <h2>Discover Your Green Paradise</h2>
    <p>
      Explore our collection of indoor plants and find the perfect
      plant to brighten your home.
    </p>
  </section>
</div>
```

);
}

export default App;
