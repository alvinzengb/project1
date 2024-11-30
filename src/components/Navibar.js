import React from 'react';
import { Layout, Menu, Dropdown, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const { Header } = Layout;

const Navibar = ({ changeLanguage }) => {
  const { t } = useTranslation(); // Use translation hook to get translated texts

  // Language selection menu
  const languageMenu = (
    <Menu>
      <Menu.Item key="1" onClick={() => changeLanguage('en')}>
        English
      </Menu.Item>
      <Menu.Item key="2" onClick={() => changeLanguage('cn')}>
        中文
      </Menu.Item>
      <Menu.Item key="3" onClick={() => changeLanguage('es')}>
        Español
      </Menu.Item>
    </Menu>
  );

  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/">{t('home')}</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/book">{t('book')}</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Dropdown overlay={languageMenu}>
            <Button>{t('select_language')}</Button>
          </Dropdown>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navibar;
