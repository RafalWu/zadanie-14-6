var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    componentWillMount: function() {
        console.log('[componentWillMount]: odpalam się przed renderowaniem');
    },

    componentDidMount: function() {
        console.log('[componentDidMount]: odpalam się po renderowaniu');
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },
	
	decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },
	
    render: function() {
        console.log('[render]: renderuje...')
        return React.createElement('div', {},
            React.createElement('button', {onClick: this.increment}, '+'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter),
            React.createElement('button', {onClick: this.decrement}, '-')
        );
    }
});

var counters = React.createElement('div', {},
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter)
);

ReactDOM.render(
    counters,
    document.getElementById('app')
);
