function MyApp() {
    return (
        <div className="mainContent">
            <Heading />
            <MyButton />
            <Clicks />
        </div>
    );
}

function MyButton() {
    return (
        <button
            className="button-85"
            onClick={() => console.log("You clicked me!")}
        >
            Click me
        </button>
    );
}

function Clicks() {
    return <p></p>;
}

function Heading() {
    return <h1>React Button in Html</h1>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);