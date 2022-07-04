
import { Helmet } from "react-helmet";
import '../index.css'


function Btn(props) {
    return (
        <div style={{ float: "left" }}>
            <div id={props.idName} className="btn">

            </div>
            <Helmet>
                <script>
                    {`
                    $(document).ready(function () {
                        const element = document.getElementById("${props.idName}");
                        var socket = io.connect();
                        socket.on('${props.ioType}', function (data) {
                            var obj = JSON.parse(data)
                            // console.log(data); 
                            element.innerHTML= "${props.ioType}:\
                               "+ data;
                        });
                    });
                    `}
                </script>
            </Helmet>
        </div >

    )
}
export default Btn