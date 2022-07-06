import React from 'react';
import Btn from './btn';
import '../index.css'

function Btn_lst() {
    return (
        <div className='btn_ctnr'>
            <ul className='btn_lst'>
                <li style={{ display: "inline" }}><Btn idName="btn_temp" ioType="temp"></Btn></li>
                <li style={{ display: "inline" }}><Btn idName="btn_humi" ioType="humi"></Btn></li>
                <li style={{ display: "inline" }}><Btn idName="btn_humi" ioType="pm"></Btn></li>
            </ul>
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

