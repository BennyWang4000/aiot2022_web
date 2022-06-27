import React from 'react';

import { createRoot } from 'react-dom/client';
import Action_bar from './index/action_bar';
// import Babylon_canvas from './index/babylon_canvas';
// import Btn from './index/btn';
// import Btn from './index/btn';
// import routes from "./routes";
const action_bar = createRoot(document.getElementById('action_bar'));
action_bar.render(<Action_bar />);
// const babylon_canvas = createRoot(document.getElementById('babylon_canvas'));
// babylon_canvas.render(<Babylon_canvas />);
// root.render(<Action_bar />, document.getElementById("content"));
// const btn = createRoot(document.getElementById('btn_lst'));
// btn.render(<Btn />);
