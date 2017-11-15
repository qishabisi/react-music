import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';

ReactDom.render(
    // <AppContainer>
        // <div>2</div>,
        <Root/>,
    // {/* </AppContainer>, */}
    document.getElementById('root')
);
// if (module.hot) {
//     module.hot.accept('./Root', () => {
//         const NewRoot = require('./Root').default;
//         render(
//             <AppContainer>
//                 <NewRoot />
//             </AppContainer>,                            
//             document.getElementById('root')
//         );
//     });
// }

