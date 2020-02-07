# read-more-less-toggle
React - Read more/less component for post, comment, text, etc. 

## Example

### _index.js_
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReadMoreLess from 'read-more-less-toggle';

ReactDOM.render(<ReadMoreLess len="30" content="If you are here, I assume that you are tired of searching email verification through Django And React" 
                btnColor="white" btnBackgroundColor="black" />, document.getElementById('root'));
serviceWorker.unregister();

### Props
len = The length of the text which will be visible
Content = The post/comment/reply
btnColor (Optional) = Text Color of Read More / Read Less button
btnBackgroundColor (Optional) = Background color of the Read More / Read Less button
 
