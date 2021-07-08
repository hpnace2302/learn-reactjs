import React from 'react';
// import { Button } from 'antd';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const ButtonComponent = () => {
    return (
        <>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
            <Tooltip title="search">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                </Tooltip>
                    <Button type="primary" shape="circle">
                    A
                    </Button>
                    <Button type="primary" icon={<SearchOutlined />}>
                    Search
                    </Button>
                    <Tooltip title="search">
                    <Button shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button icon={<SearchOutlined />}>Search</Button>
                    <br />
                    <Tooltip title="search">
                    <Button shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button icon={<SearchOutlined />}>Search</Button>
                    <Tooltip title="search">
                    <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
                </Tooltip>
                <Button type="dashed" icon={<SearchOutlined />}>
                Search
            </Button>
        </>
    )
}

export default ButtonComponent;