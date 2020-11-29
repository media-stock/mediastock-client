import React, { useState, useCallback } from 'react';
import Head from 'next/head';
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
import { useSelector } from 'react-redux';

// antd
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function AdminLayout({ children }) {
    const router = useRouter();
    const { user } = useSelector((state) => state.user?.toJS());

    const onClickMenu = useCallback((page, subPage) => {
        router.push({
            pathname: '/admin',
            query: { page, subPage },
        });
    });

    React.useEffect(() => {
        // if (user?.role !== 'admin') router.replace('/auth');
    }, [user, user?.role]);

    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.6.6/antd.min.css"
                    integrity="sha512-oj9Gb7rxUS/DmRO4hBFmw984VCy/BlgtLlCoyCaFG23aFz55dgqURNaYzZoVfgdyqVlI8W81ppg2exob2J4SRg=="
                    crossOrigin="anonymous"
                />
            </Head>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
                    <div className="logo" />

                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <SubMenu key="user" icon={<UserOutlined />} title="사용자">
                            <Menu.Item
                                key="user-admin"
                                onClick={() => onClickMenu('user', 'admin')}
                            >
                                어드민 유저 목록
                            </Menu.Item>

                            <Menu.Item
                                key="user-default"
                                onClick={() => onClickMenu('user', 'default')}
                            >
                                일반 유저 목록
                            </Menu.Item>
                        </SubMenu>

                        <SubMenu key="channel" icon={<TeamOutlined />} title="채널">
                            <Menu.Item
                                key="channel-list"
                                onClick={() => onClickMenu('channel', 'list')}
                            >
                                채널 목록
                            </Menu.Item>
                        </SubMenu>

                        <SubMenu key="article" icon={<TeamOutlined />} title="게시판">
                            <Menu.Item
                                key="article-list"
                                onClick={() => onClickMenu('article', 'list')}
                            >
                                게시판 목록
                            </Menu.Item>
                        </SubMenu>

                        <SubMenu key="stock" icon={<TeamOutlined />} title="주식">
                            <Menu.Item
                                key="ipo-list"
                                onClick={() => onClickMenu('stock', 'ipo-list')}
                            >
                                IPO 목록
                            </Menu.Item>
                        </SubMenu>

                        <SubMenu key="file" icon={<FileOutlined />} title="파일">
                            <Menu.Item key="file-list" onClick={() => onClickMenu('file', 'list')}>
                                파일 목록
                            </Menu.Item>
                            <Menu.Item
                                key="file-upload"
                                onClick={() => onClickMenu('file', 'upload')}
                            >
                                파일 업로드
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>

                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '16px 16px' }}>{children}</Content>
                    <Footer style={{ textAlign: 'center' }}>MediaStock Corporation</Footer>
                </Layout>
            </Layout>
        </>
    );
}
