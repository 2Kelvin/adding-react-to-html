function MyApp() {
    const [clicked, setClicked] = React.useState(false);

    if (clicked) {
        setClicked(<Clicks />);
    }

    return (
        <div className="mainContent">
            <Heading />
            <MyButton />
        </div>
    );
}

function MyButton() {
    return (
        <button
            className="button-85"
            onClick={() => setClicked(true)}
        >
            Click me
        </button>
    );
}

function Clicks() {
    return <p>You clicked me</p>;
}

function Heading() {
    return <h1>React Button in Html</h1>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);