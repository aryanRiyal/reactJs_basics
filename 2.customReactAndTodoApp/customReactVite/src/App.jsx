function App() {
    const bundlerName = 'Vite';
    // We can only write evaluated expressions inside {}. It cant do the computation and other minor operations too. It is used to just print the value.
    return (
        <>
            <h1>Custom React using {bundlerName}, App</h1>
        </>
    );
}

export default App;
