var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//     render: function () {
//         return (
//             <h3>Examples</h3>
//         )
//     }
// });


//refactored stateless component 
var Examples = (props) => {
    return (
        <div>
            <h1 className="text-centered">Examples</h1>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to='/?location=Seattle'>Seattle, WA</Link>
                </li>
                <li>
                    <Link to='/?location=Rio'>Rio, Brazil</Link>
                </li>
            </ol>
        </div>
    )
}

module.exports = Examples;