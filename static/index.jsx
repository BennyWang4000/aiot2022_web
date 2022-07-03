import React from 'react';

import { createRoot } from 'react-dom/client';
import Action_bar from './index/action_bar/action_bar';
import Btn_lst from './index/btn_lst/btn_lst';
import Babylon_canvas from './index/canvas/babylon_canvas'
// import Chat from './index/chat/chat'
// import Babylon_canvas from './index/babylon_canvas';
// import Btn from './index/btn';
// import Btn from './index/btn';
// import routes from "./routes";
const action_bar = createRoot(document.getElementById('action_bar'));
action_bar.render(<Action_bar />);

const babylon_canvas = createRoot(document.getElementById('babylon_ctnr'))
babylon_canvas.render(<Babylon_canvas />);

const btn_lst = createRoot(document.getElementById('btn_lst'));
btn_lst.render(<Btn_lst />)


// const chat = createRoot(document.getElementById('telegram'))
// chat.render(<Chat />);
// const babylon_canvas = createRoot(document.getElementById('babylon_canvas'));
// babylon_canvas.render(<Babylon_canvas />);
// root.render(<Action_bar />, document.getElementById("content"));
// const btn = createRoot(document.getElementById('btn_lst'));
// btn.render(<Btn />);
