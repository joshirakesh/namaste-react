/**
 * 
 * <div id="parent">
 *      <div id="child1">
 *          <h1>This is h1</h1>     
 *          <h2>This is h1</h2>     
 *      </div>
 *      <div id="child2">
 *          <h1>This is h1</h1>     
 *          <h2>This is h1</h2>     
 *      </div>
 * </div> 
 * 
 * 
 * 
 */


const parent = React.createElement(
    'div'
    , { id: 'parent' }
    , [
        React.createElement(
            'div',
            { id: 'child1' }
            , [
                React.createElement('h1', {}, "This is h1"),
                React.createElement('h2', {}, "This is h2")
            ]
        ),
        React.createElement(
            'div',
            { id: 'child2' }
            , [
                React.createElement('h1', {}, "This is h1"),
                React.createElement('h2', {}, "This is h2")
            ]
        )
    ]
);

console.log(parent);

const heading = React.createElement('h1', {}, "Hello World from React!!!! :) \n Jai Guru Dev!! Jai Akshay Saini!! ");

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);