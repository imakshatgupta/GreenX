import React from 'react';
import { Button, Card, Table, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import PiechartcustomChart from './Piechartcustomchart';
import LinechartChart from './LinechartChart';
import BarchartChart from './BarchartChart';
import { DollarCircleOutlined, UserOutlined, MenuOutlined, ArrowUpOutlined, SmileOutlined, BarChartOutlined } from '@ant-design/icons';
import Footer from './Footer';
import Navbar from '../Components/Navbar';

export default function Portfolio() {
  const cropData = [
    { key: '1', crop: 'Corn', value: '$80,000', profitLoss: '+$5,000', percentage: '32%', profitLossClass: 'text-green-500' },
    { key: '2', crop: 'Soybeans', value: '$60,000', profitLoss: '+$3,000', percentage: '24%', profitLossClass: 'text-green-500' },
    { key: '3', crop: 'Wheat', value: '$40,000', profitLoss: '-$2,000', percentage: '16%', profitLossClass: 'text-red-500' },
    { key: '4', crop: 'Cotton', value: '$35,000', profitLoss: '+$4,000', percentage: '14%', profitLossClass: 'text-green-500' },
    { key: '5', crop: 'Rice', value: '$35,000', profitLoss: '-$1,000', percentage: '14%', profitLossClass: 'text-red-500' },
  ];

  const cardData = [
    {
      title: "Market Insights",
      content: [
        { label: "Commodity Prices", value: "+2.5% this week", valueClass: "text-green-500" },
        { label: "Weather Forecast", value: "Sunny with mild temperatures" },
        { label: "Industry News", value: "New government subsidies announced" },
      ],
      date: "just posted",
    },
    {
      title: "Market Trends",
      content: [
        { label: "Stock Market", value: "-1.2% this week", valueClass: "text-red-500" },
        { label: "Economic Growth", value: "Stable with slight increase" },
        { label: "Global Markets", value: "Positive outlook" },
      ],
      date: "2 days ago",
    },
    {
      title: "Agricultural Updates",
      content: [
        { label: "Crop Yields", value: "+3.0% this month", valueClass: "text-green-500" },
        { label: "Pest Control", value: "Effective measures in place" },
        { label: "Market Demand", value: "High demand for organic produce" },
      ],
      date: "a week ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="container mx-auto mt-6 px-4 md:px-10">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12} lg={6}>
            <Card className="bg-blue-50 border-blue-200 shadow-lg rounded-lg">
              <Card.Meta
                title="Total Investment"
                description={
                  <>
                    <div className="text-2xl font-bold text-blue-600">$125,231.89</div>
                    <p className="text-xs text-gray-600">+10.2% from last quarter</p>
                  </>
                }
                avatar={<DollarCircleOutlined className="text-blue-500" />}
              />
            </Card>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <Card className="bg-yellow-50 border-yellow-200 shadow-lg rounded-lg">
              <Card.Meta
                title="Total Returns"
                description={
                  <>
                    <div className="text-2xl font-bold text-yellow-600">$15,231.89</div>
                    <p className="text-xs text-gray-600">+15.1% from last quarter</p>
                  </>
                }
                avatar={<ArrowUpOutlined className="text-yellow-500" />}
              />
            </Card>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <Card className="bg-green-50 border-green-200 shadow-lg rounded-lg">
              <Card.Meta
                title="Yield"
                description={
                  <>
                    <div className="text-2xl font-bold text-green-600">12.5%</div>
                    <p className="text-xs text-gray-600">+2.1% from last quarter</p>
                  </>
                }
                avatar={<SmileOutlined className="text-green-500" />}
              />
            </Card>
          </Col>
          <Col xs={24} md={12} lg={6}>
            <Card className="bg-orange-50 border-orange-200 shadow-lg rounded-lg">
              <Card.Meta
                title="Market Conditions"
                description={
                  <>
                    <div className="text-2xl font-bold text-orange-600">Stable</div>
                    <p className="text-xs text-gray-600">No significant changes</p>
                  </>
                }
                avatar={<BarChartOutlined className="text-orange-500" />}
              />
            </Card>
          </Col>
        </Row>

        <div className="mt-10">
          <Card title="Crop Investments" className="shadow-lg rounded-lg border-gray-200">
            <Table dataSource={cropData} pagination={false}>
              <Table.Column title="Crop" dataIndex="crop" key="crop" />
              <Table.Column title="Value" dataIndex="value" key="value" />
              <Table.Column
                title="Profit/Loss"
                dataIndex="profitLoss"
                key="profitLoss"
                render={(text, record) => (
                  <span className={record.profitLossClass}>{text}</span>
                )}
              />
              <Table.Column title="Percentage" dataIndex="percentage" key="percentage" />
            </Table>
          </Card>
        </div>

        <Card title="Investment Visualizations" className="mt-6 shadow-lg rounded-lg border-gray-200">
          <div className="flex flex-wrap gap-6">
            <div className="flex-1">
              <h3 className="mb-4 text-lg font-semibold">Investments by Crop</h3>
              <div className="w-full h-64">
                <PiechartcustomChart />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="mb-4 text-lg font-semibold">Portfolio Performance</h3>
              <div className="w-full h-64">
                <LinechartChart />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="mb-4 text-lg font-semibold">Profit/Loss by Crop</h3>
              <div className="w-full h-64">
                <BarchartChart />
              </div>
            </div>
          </div>
        </Card>

        <h1 className="font-bold mt-8 mb-4 text-3xl">Trending News</h1>

        <div className="flex flex-wrap gap-6">
          {cardData.map((card, index) => (
            <Card title={card.title} className="flex-1 shadow-lg rounded-lg border-gray-200" key={index}>
              <div className="grid gap-4">
                {card.content.map((item, idx) => (
                  <div className="grid gap-2" key={idx}>
                    <div className="text-sm font-medium text-gray-600">{item.label}</div>
                    <div className={`text-2xl font-bold ${item.valueClass}`}>{item.value}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-xs text-gray-600">{card.date}</div>
            </Card>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}
