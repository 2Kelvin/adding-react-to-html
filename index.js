var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function MyApp() {
    var _React$useState = React.useState(""),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        clicked = _React$useState2[0],
        setClicked = _React$useState2[1];

    return React.createElement(
        "div",
        { className: "mainContent" },
        React.createElement(
            "h1",
            null,
            "React Button in HTML"
        ),
        React.createElement(OneButton, { setClicked: setClicked }),
        React.createElement(
            "p",
            { className: "paragraph" },
            clicked
        )
    );
}

// React components are JavaScript functions that return markup
// React component names must always start with a capital letter
function OneButton(_ref) {
    var setClicked = _ref.setClicked;

    return React.createElement(
        "button",
        {
            className: "button-85",
            onClick: function onClick() {
                return setClicked("Congrats, you just learnt to use state!");
            }
        },
        "Click me"
    );
}

var container = document.getElementById('root');
var root = ReactDOM.createRoot(container);
root.render(React.createElement(MyApp, null));

// JSX lets you put markup into JavaScript
// Curly braces let you “escape back” into JavaScript 
// ...so that you can embed a variable & display it to the user thro JSX
// you can also 'escape into Javascript' from JSX attributes e.g. src={user.imageUrl} 
// ...in such cases, use curly braces instead of quotes
// you can also use complex string concatenation in the curly braces e.g. alt={'Photo of ' + user.name}
// styles has 2 curly braces if your styles depend on Javascript variables
// the first curly braces are for the normal JSX curly braces as dicussed above -> style={}
// the second pair inside, is an object carrying/nesting styles -> styles={{width: user.imageSize, height: user.imageSize}}