function MyApp() {
    const [clicked, setClicked] = React.useState("");
    const [bgColor, setBgColor] = React.useState({});

    // change paragraph text on 1st buttonn click
    function handleTextChange() {
        setClicked("Congrats, you just learnt to use state!");
    }

    // change card color on 2nd button click
    function handleCardColorChange() {
        setBgColor(lightTheme);
    }

    const lightTheme = {
        backgroundColor: "#fff",
        color: "dodgerBlue"
    };

    return (
        <div className="mainContent" style={bgColor}>
            <h2>React Button in HTML</h2>
            <OneButton
                handleClikFunParam={handleTextChange}
                btnText={"Add Text"}
            />
            <p className="paragraph">{clicked}</p>
            <OneButton
                handleClikFunParam={handleCardColorChange}
                btnText={"Change Card Color"}
            />
        </div>
    );
}



// React components are JavaScript functions that return markup
// React component names must always start with a capital letter
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


// JSX lets you put markup into JavaScript
// Curly braces let you “escape back” into JavaScript 
// ...so that you can embed a variable & display it to the user thro JSX
// you can also 'escape into Javascript' from JSX attributes e.g. src={user.imageUrl} 
// ...in such cases, use curly braces instead of quotes
// you can also use complex string concatenation in the curly braces e.g. alt={'Photo of ' + user.name}
// styles has 2 curly braces if your styles depend on Javascript variables
// the first curly braces are for the normal JSX curly braces as dicussed above -> style={}
// the second pair inside, is an object carrying/nesting styles -> styles={{width: user.imageSize, height: user.imageSize}}
