import React from 'react';
import Navbar from '../Components/Navbar';
import { Button, Card, Avatar, Row, Col, Typography, Space } from 'antd';
import { GlobalOutlined, EnvironmentOutlined, DollarOutlined, UserOutlined } from '@ant-design/icons';
import Data from './Data.jsx';
import Footer from './Footer.jsx';

const { Title, Paragraph } = Typography;

export default function Hero({ showDrawer }) {
  return (
    <div>
      <Navbar />
      <section className="bg-primary py-12 md:py-20 lg:py-28 text-primary-foreground shadow-lg">
        <div className="container px-4 md:px-6 grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Invest in Sustainable Agriculture
            </h1>
            <p className="text-lg md:text-xl">
              Discover investment opportunities that support local farmers and promote sustainable practices.
            </p>
            <div className="flex gap-4 ml-40">
              <Button className='bg-blue-700 text-white' size="lg" onClick={() => showDrawer('investor') }>For Investors</Button>
              <Button variant="outline" size="lg" onClick={() => showDrawer('farmer')}>
                For Farmers
              </Button>
            </div>
          </div>
          <img
            src="main.png"
            width={600}
            height={100}
            alt="Sustainable Agriculture"
            className="mx-auto rounded-xl overflow-hidden"
          />
        </div>
      </section>
      <section className="py-12 md:py-20 lg:py-28">
        <div className="container px-4 md:px-6 shadow-lg">
          <Row gutter={[16, 16]} justify="space-between">
          <Col xs={24} md={12} lg={8}>
              <Space direction="vertical" size="middle">
                <GlobalOutlined style={{ fontSize: '32px', color: '#1890ff' }} />
                <Title level={3}>Global Reach</Title>
                <Paragraph className="text-muted-foreground">
                  Invest in sustainable agriculture projects around the world, supporting local communities and promoting
                  global food security.
                </Paragraph>
              </Space>
            </Col>
            <Col xs={24} md={12} lg={8}>
              <Space direction="vertical" size="middle">
                <EnvironmentOutlined style={{ fontSize: '32px', color: '#1890ff' }} />
                <Title level={3}>Sustainable Practices</Title>
                <Paragraph className="text-muted-foreground">
                  Our platform connects you with farmers and projects that prioritize environmentally-friendly and
                  socially-responsible agricultural practices.
                </Paragraph>
              </Space>
            </Col>
            <Col xs={24} md={12} lg={8}>
              <Space direction="vertical" size="middle">
                <DollarOutlined style={{ fontSize: '32px', color: '#1890ff' }} />
                <Title level={3}>Attractive Returns</Title>
                <Paragraph className="text-muted-foreground">
                  Earn competitive returns while making a positive impact on communities and the environment through your
                  sustainable agricultural investments.
                </Paragraph>
              </Space>
            </Col>
          </Row>
        </div>
      </section>
      <div className='shadow-lg'>
        <h2 className="text-3xl font-bold mb-4">Farmer Profiles</h2>
        <p className="text-muted-foreground mb-8">
          Get to know the farmers you're supporting and their sustainable practices.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <Card className="p-4 bg-muted rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="w-12 h-12 border">
                <Avatar
                  size={48}
                  icon={<UserOutlined />}
                  src="/placeholder-user.jpg"
                  style={{ border: '1px solid #d9d9d9' }}
                />
              </Avatar>
              <div>
                <h3 className="font-bold">John Doe</h3>
                <p className="text-muted-foreground">Organic Farmer</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              John is a passionate organic farmer committed to sustainable practices. He grows a variety of fruits
              and vegetables using regenerative methods.
            </p>
          </Card>
          <Card className="p-4 bg-muted rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="w-12 h-12 border">
                <Avatar
                  size={48}
                  icon={<UserOutlined />}
                  src="/placeholder-user.jpg"
                  style={{ border: '1px solid #d9d9d9' }}
                />
              </Avatar>
              <div>
                <h3 className="font-bold">Jane Arden</h3>
                <p className="text-muted-foreground">Dairy Farmer</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              Jane runs a small dairy farm, focusing on ethical and sustainable practices. She is committed to
              animal welfare and producing high-quality dairy products.
            </p>
          </Card>
        </div>
      </div>
      <Data />
      <Footer />
    </div>
  );
}