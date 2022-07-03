import React from 'react';
import '../index.css';
import { Helmet } from "react-helmet";

function Chat() {
    return (
        <div>
            <Helmet>
                <script>
                    {` 
                        window.intergramId = "1285070530" 
                        window.intergramCustomizations={
                            titleClosed: 'ChatBot',
                            titleOpen: 'ChatBot',
                        }
                    `}
                </script>
                <script id="intergram" type="text/javascript" src="https://www.intergram.xyz/js/widget.js"></script>
            </Helmet>
        </div>
    )
}