
import { Helmet } from "react-helmet";
import '../index.css'


function Btn(props) {
    return (
        <div>
            <div id={props.idName} className="btn">

            </div>
            <Helmet>
                <script>
                    {`
                    $(document).ready(function () {
                        const element = document.getElementById("${props.idName}");
                        var socket = io.connect();
                        socket.on('temp', function (temp) {
                            element.innerHTML= "temp: "+ temp.toString()+ "\n";
                        });
                        socket.on('humi', function (humi) {
                            element.innerHTML= "humi"+ humi.toString();
                        });
                    });
                    `}
                </script>
            </Helmet>
        </div >

    )
}
export default Btn