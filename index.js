function MyApp() {
    return React.createElement(
        "div",
        { className: "mainContent" },
        React.createElement(Heading, null),
        React.createElement(MyButton, null),
        React.createElement(Clicks, null)
    );
}

function MyButton() {
    return React.createElement(
        "button",
        {
            className: "button-85",
            onClick: function onClick() {
                return console.log("You clicked me!");
            }
        },
        "Click me"
    );
}

function Clicks() {
    return React.createElement("p", null);
}

function Heading() {
    return React.createElement(
        "h1",
        null,
        "React Button in Html"
    );
}

var container = document.getElementById('root');
var root = ReactDOM.createRoot(container);
root.render(React.createElement(MyApp, null));