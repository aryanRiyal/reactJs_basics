import { createElement, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

function MyApp() {
    return (
        <>
            <h1>Custom React App using Vite, MyApp</h1>
        </>
    );
}

const anotherElement = (
    <a href='https://google.com' target='_blank'>
        Visit Google
    </a>
);

const anotherBundler = 'No Bundler';

const reactElement = createElement(
    'a',
    { href: 'https://google.com', target: '_blank' },
    'Click me to visit Google',
    anotherBundler //only evaluated expressions
);

createRoot(document.getElementById('root')).render(
    /*
    <StrictMode>
        <App />
    </StrictMode>
    */
    // MyApp()  //Blasphemy
    // anotherElement
    reactElement
);
