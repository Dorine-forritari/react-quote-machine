class NewQuote extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return /*#__PURE__*/(
      React.createElement("button", { id: "new-quote", onClick: this.props.changeQuote, class: "btn btn-primary" }, "new quote"));
  }}
;

const TweetQuote = () => {
  return /*#__PURE__*/(
    React.createElement("a", { id: "tweet-quote", href: "https://www.twitter.com/intent/tweet", target: "_top", className: "btn btn-info" }, "tweet quote"));
};

const quoteList = [
{ quote: "\"The greatest glory in living lies not in never falling, but in rising every time we fall.\"",
  author: "- Nelson Mandela" },
{ quote: "\"Success is not final, failure is not fatal: it is the courage to continue that counts.\"",
  author: "- Winston Churchill" },
{ quote: "\"If life were predictable it would cease to be life, and be without flavor.\"",
  author: "Eleanor Roosevelt" },
{ quote: "\"Never bend your head. Always hold it high. Look the world straight in the eye.\"",
  author: "- Helen Keller" },
{ quote: "\"What you get by achieving your goals is not as important as what you become by achieving your goals.\"",
  author: "- Zig Ziglar" },
{ quote: "\"I can't change the direction of the wind, but I can adjust my sails to always reach my destination.\"",
  author: "Jimmy Dean" },
{ quote: "\"You are never too old to set another goal or to dream a new dream.\"",
  author: "- C.S. Lewis" },
{ quote: "\"Try to be a rainbow in someone else's cloud.\"",
  author: "- Maya Angelou" },
{ quote: "\"You do not find the happy life. You make it.\"",
  author: "Camilla Eyring Kimball" },
{ quote: "\"Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.\"",
  author: "Deep Roy" }];


const colorList = [
'#FFCEDA',
'#FFCEEF',
'#D8CEFF',
'#CEE5FF',
'#CEFFFB',
'#CEFFDF',
'#D7FFCE',
'#E9FFCE',
'#F9FFCE',
'#FFF8CE'];


class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      random: Math.floor(Math.random() * 10) };

    this.changeQuote = this.changeQuote.bind(this);
  }

  changeQuote() {
    this.setState({
      random: Math.floor(Math.random() * 10) });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "quote-box", style: { backgroundColor: colorList[this.state.random] } }, /*#__PURE__*/
      React.createElement("div", { id: "text" }, /*#__PURE__*/
      React.createElement("h2", null, quoteList[this.state.random]["quote"])), /*#__PURE__*/

      React.createElement("div", { id: "author" }, /*#__PURE__*/
      React.createElement("h3", null, quoteList[this.state.random]["author"])), /*#__PURE__*/

      React.createElement(TweetQuote, null), /*#__PURE__*/
      React.createElement(NewQuote, { changeQuote: this.changeQuote })));


  }}


function App() {
  ReactDOM.render( /*#__PURE__*/React.createElement(Box, null), document.getElementById('root'));
}

App();

// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.