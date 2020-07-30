import React from 'react';
import { Typography } from 'antd';
import { Radio, Input } from 'antd';
import { List, Card } from 'antd';
const { Paragraph } = Typography;


class BaseContainer extends React.Component {
    state = {
        value1: 'USA',
    };
    render() {
        const options = [
            { label: 'USA', value: 'USA' },
            { label: 'UK', value: 'UK' },
            { label: 'Denmark', value: 'DE' },
            { label: 'Canada', value: 'CA' },
            { label: 'Italy', value: 'IT' },
            { label: 'France', value: 'FR' },
            { label: 'Spain', value: 'SP' },
        ];
        const { value1 } = this.state;
        const { Search } = Input;
        const onChange4 = e => {
            console.log('radio4 checked', e.target.value);
            this.setState({
                value1: e.target.value,
            });
        };

        const data = [
            {
                title: 'Title 1',
            },
            {
                title: 'Title 2',
            },
            {
                title: 'Title 3',
            },
            {
                title: 'Title 4',
            },
            {
                title: 'Title 5',
            },
            {
                title: 'Title 6',
            },
            {
                title: 'Title 4',
            },
            {
                title: 'Title 5',
            },
            {
                title: 'Title 6',
            },
            {
                title: 'Title 4',
            },
            {
                title: 'Title 5',
            },
            {
                title: 'Title 6',
            },
            {
                title: 'Title 4',
            },
            {
                title: 'Title 5',
            },
            {
                title: 'Title 6',
            },
        ];
        return (
            <div className="base-container">
                <div className="header-style">
                    <img src={require('../AdminPanel/a-logo.jpg')} alt="Wrong" className="logo-image" />
                    <Paragraph className="logout-text">Logout</Paragraph>
                </div>
                <div className="sub-container" style={{ display: 'flex', flexDirection: 'row' }}>
                    <div className="admin-pane">
                        <Paragraph className="text-info">Select Region</Paragraph>
                        <Radio.Group
                            options={options}
                            onChange={onChange4}
                            value={value1}
                            optionType="button"
                            buttonStyle="solid"
                        />
                    </div>
                    <div className="product-container">
                        <div className="search-container">
                            <Search
                                placeholder="Search Products"
                                onSearch={value => console.log(value)}
                                style={{ width: 200 }}
                            />
                        </div>
                        <div className="list-container">
                            <List
                                grid={{ gutter: 5, column: 2 }}
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item>
                                        <Card hoverable style={{ width: 300 }}>
                                            <p>Card content</p>
                                            <p>Card content</p>
                                            <p>Card content</p>
                                        </Card>
                                    </List.Item>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BaseContainer;