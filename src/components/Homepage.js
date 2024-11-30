import React from "react";
import { Layout, Button, Typography } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import the hook

const { Content } = Layout;
const { Title, Paragraph } = Typography;

function Homepage() {
  const { t } = useTranslation(); // Use the translation hook

  return (
    <Layout>
      <Content style={{ padding: "50px", textAlign: "center" }}>
        <Title level={2}>{t('welcome')}</Title> {/* Translated text */}
        <Paragraph>{t('trust_message')}</Paragraph> {/* Translated text */}
        <Button type="primary" size="large">
          <Link to="/book">{t('book_caregiver')}</Link> {/* Translated text */}
        </Button>
      </Content>
    </Layout>
  );
}

export default Homepage;
