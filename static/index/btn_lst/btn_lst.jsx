import React from 'react';
import Btn from './btn';
import '../index.css'

function Btn_lst(props) {
    return (
        <div className="btn_lst">
            <Btn content="info"></Btn>
        </div>

    )
}
export default Btn_lst

// export default Action_bar
// const btn_lst = props => (
//     <table class="tg">
//         <tbody>
//             <tr>
//                 <td class="tg-0pky">
//                 </td>
//                 <td class="tg-0pky">
//                     <div class="btn" style="background: #73AD21;">info</div>
//                 </td>
//                 <td class="tg-0pky">
//                     <div class="btn" style="background: #73AD21;">info</div>
//                 </td>
//             </tr>
//             <tr>
//                 <td class="tg-0pky" colspan="3"></td>
//             </tr>
//         </tbody>
//     </table>
// );

