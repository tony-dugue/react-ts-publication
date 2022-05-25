import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1>Page principale</h1>} />
          <Route path='/:id' element={<h1>Page détail</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

