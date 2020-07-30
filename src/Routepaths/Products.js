import React from 'react';
import { Typography } from 'antd';
import { Radio, Input } from 'antd';
import { List, Card } from 'antd';
import Tabletop from 'tabletop';
import './products.scss';

const { Paragraph } = Typography;


class Products extends React.Component {
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
            Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1_X1m83k3W_87b-aMiq3vHKz9-HldYB3JBBP0kGxonyI/edit#gid=0',
                    callback: function(data, tabletop) { 
                      console.log(data)
                    },
                    simpleSheet: false } )
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
            <div className="products-main-container">
                <div className="header-style">
                    <img src={require('../images/a-logo.jpg')} alt="Wrong" className="logo-image" />
                </div>
                <div className="sub-container" style={{ display: 'flex', flexDirection: 'row' }}>
                    <div className="region-pane">
                        <Paragraph className="text-info">Select Region</Paragraph>
                        <Radio.Group
                            options={options}
                            onChange={onChange4}
                            value={value1}
                            optionType="button"
                            buttonStyle="solid"
                        />
                    </div>
                    <div className="products-container">
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

export default Products;