import React from 'react';
import ReactDOM from 'react-dom/client';
import { Reader } from './components/Reader/Reader';
import publications from './publications.json';
// import { Example1 } from 'components/Example1';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Reader items={publications} />
 {/* < Example1 /> */}
  </React.StrictMode>
);

