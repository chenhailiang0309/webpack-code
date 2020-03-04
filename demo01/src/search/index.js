//index.js文件内容
import React from 'react';
import ReactDOM from 'react-dom';
import logo from './images/avator.png'
import './search.less'

class Search extends React.Component {
    render() {
        return (
            <h1 className="search-text">
                这里是一个简单的示例页面3
                <img src={logo} />
            </h1>
        )
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);
