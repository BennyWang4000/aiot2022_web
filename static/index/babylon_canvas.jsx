import React from 'react';
import './index.css'


// class Babylon_canvas_component extends React.Component {
//     componentDidMount() {
//         const script = document.createElement("script");

//         script.src = "./babylon_2.js";
//         script.async = true;

//         document.body.appendChild(script);
//     }

//     render() {
//         return (
//             <script>

//             </script>
//         );
//     }
// }

function Babylon_canvas() {
    function handleLoadScript() {
        import('./babylon_render')
            .then(({ functionFromModule }) => {
                socket_on()
            })
            .catch(err => {
                // Handle failure
            });
    };

    return (
        <div className='babylon_canvas'></div>
    )
}
export default Babylon_canvas