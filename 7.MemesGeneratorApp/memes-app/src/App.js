import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/Home';
import ErrorPage from './pages/Error';
import EditPage from './pages/Edit';
import './App.css';

function App() {
    return (
        <div className='container'>
            <h1>Meme Generator</h1>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/edit' element={<EditPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </div>
    );
}

export default App;
