import React, { useEffect } from 'react';
import '../index.css';
import { Helmet } from "react-helmet";

function Chat() {
    return (
        <div>
            <Helmet>
                <script>
                    {` 
                    `}
                </script>
                <script id="intergram" type="text/javascript" src="https://www.intergram.xyz/js/widget.js"></script>
            </Helmet>
        </div>
    )
}