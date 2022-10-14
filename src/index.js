function MyApp() {
    const [clicked, setClicked] = React.useState("");
    const [bgColor, setBgColor] = React.useState({});
    const [bodyBg, setBodyBg] = React.useState("#191C21");

    const htmlBody = document.querySelector("body");
    htmlBody.style.backgroundColor = bodyBg;

    const lightTheme = {
        backgroundColor: "#fff",
        color: "dodgerBlue",
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"
    };

    // change the HTML body's background color
    function changeBodyBgColor() {
        setBodyBg("#efefef");
    }

    // change paragraph text on 1st buttonn click
    function handleTextChange() {
        setClicked("Congrats, you just learnt useState()");
    }

    // change card color on 2nd button click
    function handleCardColorChange() {
        setBgColor(lightTheme);
    }

    return (
        <div className="mainContent" style={bgColor}>
            <h1>React Buttons</h1>
            <OneButton
                handleClikFunParam={handleTextChange}
                btnText={"Add Text"}
            />
            <p className="paragraph">{clicked}</p>
            <OneButton
                handleClikFunParam={handleCardColorChange}
                btnText={"Change Card Color"}
            />
            <OneButton
                handleClikFunParam={changeBodyBgColor}
                btnText={"Change Body Background"}
            />
        </div>
    );
}

function OneButton({ handleClikFunParam, btnText }) {
    return (
        <button
            className="button-85"
            onClick={handleClikFunParam}
        >
            {btnText}
        </button>
    );
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<MyApp />);


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
