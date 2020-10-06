import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

// redux
import { useDispatch, useSelector } from 'react-redux';

// antd
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function AdminLayout({ children }) {
    const router = useRouter();
    const { user } = useSelector((state) => state.user?.toJS());

    React.useEffect(() => {
        // if (user?.role !== 'admin') router.replace('/auth');
    }, [user, user?.role]);

    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Option 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        Option 2
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                        <Menu.Item key="3">Team 1</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                        <Menu.Item key="6">Team 1</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="9" icon={<FileOutlined />}>
                        File
                    </Menu.Item>
                </Menu>
            </Sider>

            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }} />
                <Content style={{ margin: '16px 16px' }}>{children}</Content>
                <Footer style={{ textAlign: 'center' }}>MediaStock</Footer>
            </Layout>
        </Layout>
    );
}
