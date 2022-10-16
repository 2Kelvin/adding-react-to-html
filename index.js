var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function MyApp() {
    var _React$useState = React.useState(""),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        clicked = _React$useState2[0],
        setClicked = _React$useState2[1];

    var _React$useState3 = React.useState({}),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        bgColor = _React$useState4[0],
        setBgColor = _React$useState4[1];

    var _React$useState5 = React.useState("#191C21"),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        bodyBg = _React$useState6[0],
        setBodyBg = _React$useState6[1];

    var _React$useState7 = React.useState(0),
        _React$useState8 = _slicedToArray(_React$useState7, 2),
        clicks = _React$useState8[0],
        setClicks = _React$useState8[1];

    var htmlBody = document.querySelector("body");
    htmlBody.style.backgroundColor = bodyBg;

    var lightTheme = {
        backgroundColor: "#fff",
        color: "dodgerBlue",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
    };

    function handleClickCount() {
        setClicks(clicks + 1);
    }

    function changeBodyBgColor() {
        setBodyBg("#afafaf");
    }

    function handleTextChange() {
        setClicked("Congrats, you just learnt useState()");
    }

    function handleCardColorChange() {
        setBgColor(lightTheme);
    }

    return React.createElement(
        "div",
        { className: "mainContent", style: bgColor },
        React.createElement(
            "h1",
            null,
            "React Buttons"
        ),
        React.createElement(OneButton, {
            handleClikFunParam: handleTextChange,
            btnText: "Add Text"
        }),
        React.createElement(
            "p",
            { className: "paragraph" },
            clicked
        ),
        React.createElement(OneButton, {
            handleClikFunParam: handleClickCount,
            btnText: "Count Clicks"
        }),
        React.createElement(
            "p",
            { className: "paragraph" },
            "You clicked the count clicks button ",
            clicks == 1 ? "once" : clicks + " times"
        ),
        React.createElement(OneButton, {
            handleClikFunParam: handleCardColorChange,
            btnText: "Change Card Color"
        }),
        React.createElement(OneButton, {
            handleClikFunParam: changeBodyBgColor,
            btnText: "Change Body Background"
        })
    );
}

function OneButton(_ref) {
    var handleClikFunParam = _ref.handleClikFunParam,
        btnText = _ref.btnText;

    return React.createElement(
        "button",
        {
            className: "button-85",
            onClick: handleClikFunParam
        },
        btnText
    );
}

var container = document.getElementById('root');
var root = ReactDOM.createRoot(container);
root.render(React.createElement(MyApp, null));

// React components are JavaScript functions that return markup
// React component names must always start with a capital letter
// JSX lets you put markup into JavaScript
// Curly braces let you “escape back” into JavaScript 
// ...so that you can embed a variable & display it to the user thro JSX
// you can also 'escape into Javascript' from JSX attributes e.g. src={user.imageUrl} 
// ...in such cases, use curly braces instead of quotes
// you can also use complex string concatenation in the curly braces e.g. alt={'Photo of ' + user.name}
// styles has 2 curly braces if your styles depend on Javascript variables
// the first curly braces are for the normal JSX curly braces as dicussed above -> style={}
// the second pair inside, is an object carrying/nesting styles -> styles={{width: user.imageSize, height: user.imageSize}}