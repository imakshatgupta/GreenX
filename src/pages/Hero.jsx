import React from 'react';
import Navbar from '../Components/Navbar';
import { Button, Card, Avatar, Row, Col, Typography, Space } from 'antd';
import { GlobalOutlined, EnvironmentOutlined, DollarOutlined } from '@ant-design/icons';
import Data from './Data.jsx';
import Footer from './Footer.jsx';


const { Title, Paragraph } = Typography;

export default function Hero({ showDrawer }) {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-100 py-12 md:py-20 lg:py-28 text-gray-900 shadow-3xl rounded-xl mx-4 mt-4 md:mx-10">
        <div className="container px-4 md:px-6 grid gap-8 md:grid-cols-2 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-teal-600">
              Invest in Sustainable Agriculture
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Discover investment opportunities that support local farmers and promote sustainable practices.
            </p>
          </div>
          <img
            src="main.png"
            width={600}
            height={100}
            alt="Sustainable Agriculture"
            className="mx-auto rounded-xl overflow-hidden shadow-md"
          />
        </div>
      </section>
      <section className="py-12 md:py-20 lg:py-28 bg-white shadow-lg rounded-xl mx-4 md:mx-10 mt-10">
        <div className="container px-4 md:px-6 text-center">
          <Row gutter={[16, 16]} justify="space-between">
            <Col xs={24} md={12} lg={8}>
              <Space direction="vertical" size="middle" className="p-4 border border-gray-200 rounded-lg shadow-md">
                <GlobalOutlined style={{ fontSize: '32px', color: '#34d399' }} />
                <Title level={3} className="text-teal-600">Global Reach</Title>
                <Paragraph className="text-gray-700">
                  Invest in sustainable agriculture projects around the world, supporting local communities and promoting global food security.
                </Paragraph>
              </Space>
            </Col>
            <Col xs={24} md={12} lg={8}>
              <Space direction="vertical" size="middle" className="p-4 border border-gray-200 rounded-lg shadow-md">
                <EnvironmentOutlined style={{ fontSize: '32px', color: '#34d399' }} />
                <Title level={3} className="text-teal-600">Sustainable Practices</Title>
                <Paragraph className="text-gray-700">
                  Our platform connects you with farmers and projects that prioritize environmentally-friendly and socially-responsible agricultural practices.
                </Paragraph>
              </Space>
            </Col>
            <Col xs={24} md={12} lg={8}>
              <Space direction="vertical" size="middle" className="p-4 border border-gray-200 rounded-lg shadow-md">
                <DollarOutlined style={{ fontSize: '32px', color: '#34d399' }} />
                <Title level={3} className="text-teal-600">Attractive Returns</Title>
                <Paragraph className="text-gray-700">
                  Earn competitive returns while making a positive impact on communities and the environment through your sustainable agricultural investments.
                </Paragraph>
              </Space>
            </Col>
          </Row>
        </div>
      </section>
      <div className="bg-gray-100 shadow-lg rounded-xl mx-4 md:mx-10 mt-10 p-6">
        <h2 className="text-3xl font-bold text-teal-600 mb-4">Farmer Profiles</h2>
        <p className="text-gray-700 mb-8">
          Get to know the farmers you're supporting and their sustainable practices.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <Card className="p-4 border border-gray-200 bg-white rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="w-12 h-12 border" src="/placeholder-user.jpg" />
              <div>
                <h3 className="font-bold text-gray-900">John Doe</h3>
                <p className="text-gray-600">Organic Farmer</p>
              </div>
            </div>
            <p className="text-gray-700">
              John is a passionate organic farmer committed to sustainable practices. He grows a variety of fruits and vegetables using regenerative methods.
            </p>
          </Card>
          <Card className="p-4 border border-gray-200 bg-white rounded-lg shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <Avatar className="w-12 h-12 border" src="/placeholder-user.jpg" />
              <div>
                <h3 className="font-bold text-gray-900">Jane Arden</h3>
                <p className="text-gray-600">Dairy Farmer</p>
              </div>
            </div>
            <p className="text-gray-700">
              Jane runs a small dairy farm, focusing on ethical and sustainable practices. She is committed to animal welfare and producing high-quality dairy products.
            </p>
          </Card>
        </div>
      </div>
      <Data />
      <Footer />
    </div>
  );
}
