import React from 'react'
import { Button,Card,Table,Row, Col } from 'antd'
import {Link} from 'react-router-dom'
import PiechartcustomChart from './Piechartcustomchart';
import LinechartChart from './LinechartChart';
import BarchartChart from './BarchartChart';
import { DollarCircleOutlined, UserOutlined, MenuOutlined,ArrowUpOutlined, SmileOutlined, BarChartOutlined } from '@ant-design/icons';
import Footer from './Footer';



export default function Portfolio() {
    const cropData = [
        {
          key: '1',
          crop: 'Corn',
          value: '$80,000',
          profitLoss: '+$5,000',
          percentage: '32%',
          profitLossClass: 'text-green-500',
        },
        {
          key: '2',
          crop: 'Soybeans',
          value: '$60,000',
          profitLoss: '+$3,000',
          percentage: '24%',
          profitLossClass: 'text-green-500',
        },
        {
          key: '3',
          crop: 'Wheat',
          value: '$40,000',
          profitLoss: '-$2,000',
          percentage: '16%',
          profitLossClass: 'text-red-500',
        },
        {
          key: '4',
          crop: 'Cotton',
          value: '$35,000',
          profitLoss: '+$4,000',
          percentage: '14%',
          profitLossClass: 'text-green-500',
        },
        {
          key: '5',
          crop: 'Rice',
          value: '$35,000',
          profitLoss: '-$1,000',
          percentage: '14%',
          profitLossClass: 'text-red-500',
        },
      ];
      const cardData = [
        {
          title: "Market Insights",
          content: [
            {
              label: "Commodity Prices",
              value: "+2.5% this week",
              valueClass: "text-green-500"
            },
            {
              label: "Weather Forecast",
              value: "Sunny with mild temperatures",
            },
            {
              label: "Industry News",
              value: "New government subsidies announced",
            },
          ],
          date: "just posted"
        },
        {
          title: "Market Trends",
          content: [
            {
              label: "Stock Market",
              value: "-1.2% this week",
              valueClass: "text-red-500"
            },
            {
              label: "Economic Growth",
              value: "Stable with slight increase",
            },
            {
              label: "Global Markets",
              value: "Positive outlook",
            },
          ],
          date: "2 days ago"
        },
        {
          title: "Agricultural Updates",
          content: [
            {
              label: "Crop Yields",
              value: "+3.0% this month",
              valueClass: "text-green-500"
            },
            {
              label: "Pest Control",
              value: "Effective measures in place",
            },
            {
              label: "Market Demand",
              value: "High demand for organic produce",
            },
          ],
          date: "a week ago"
        }
      ];
    
  return (
    <div>
  <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-md px-4 py-3 sm:px-6">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="rounded-full bg-white p-2 text-blue-600 shadow">
          {/* <UserOutlined className="h-6 w-6" /> */}
        </div>
        <div>
          <h1 className="text-xl font-bold">John Doe</h1>
        </div>
      </div>
      <nav className="hidden space-x-6 sm:flex">
        <Link href="#" className="text-sm font-medium hover:text-yellow-300 transition">
          Dashboard
        </Link>
        <Link href="#" className="text-sm font-medium hover:text-yellow-300 transition">
          Investments
        </Link>
        <Link href="#" className="text-sm font-medium hover:text-yellow-300 transition">
          Analytics
        </Link>
        <Link href="#" className="text-sm font-medium hover:text-yellow-300 transition">
          Settings
        </Link>
      </nav>
      <Button variant="outline" size="icon" className="sm:hidden bg-white text-blue-600">
        {/* <MenuOutlined className="h-6 w-6" /> */}
        <span className="sr-only">Toggle menu</span>
      </Button>
    </div>
  </header>

      <Row gutter={[16, 16]} style={{ padding: '20px' }}>
    <Col xs={24} md={12} lg={6}>
      <Card style={{ backgroundColor: '#e3f2fd', borderColor: '#42a5f5' }}>
        <Card.Meta
          title="Total Investment"
          description={
            <>
              <div className="text-2xl font-bold" style={{ color: '#1976d2' }}>$125,231.89</div>
              <p className="text-xs" style={{ color: '#555' }}>+10.2% from last quarter</p>
            </>
          }
          avatar={<DollarCircleOutlined className="w-4 h-4" style={{ color: '#42a5f5' }} />}
        />
      </Card>
    </Col>
    <Col xs={24} md={12} lg={6}>
      <Card style={{ backgroundColor: '#fff3e0', borderColor: '#ff9800' }}>
        <Card.Meta
          title="Total Returns"
          description={
            <>
              <div className="text-2xl font-bold" style={{ color: '#fb8c00' }}>$15,231.89</div>
              <p className="text-xs" style={{ color: '#555' }}>+15.1% from last quarter</p>
            </>
          }
          avatar={<ArrowUpOutlined className="w-4 h-4" style={{ color: '#ff9800' }} />}
        />
      </Card>
    </Col>
    <Col xs={24} md={12} lg={6}>
      <Card style={{ backgroundColor: '#e8f5e9', borderColor: '#66bb6a' }}>
        <Card.Meta
          title="Yield"
          description={
            <>
              <div className="text-2xl font-bold" style={{ color: '#388e3c' }}>12.5%</div>
              <p className="text-xs" style={{ color: '#555' }}>+2.1% from last quarter</p>
            </>
          }
          avatar={<SmileOutlined className="w-4 h-4" style={{ color: '#66bb6a' }} />}
        />
      </Card>
    </Col>
    <Col xs={24} md={12} lg={6}>
      <Card style={{ backgroundColor: '#fffde7', borderColor: '#ffd54f' }}>
        <Card.Meta
          title="Market Conditions"
          description={
            <>
              <div className="text-2xl font-bold" style={{ color: '#fbc02d' }}>Stable</div>
              <p className="text-xs" style={{ color: '#555' }}>No significant changes</p>
            </>
          }
          avatar={<BarChartOutlined className="w-4 h-4" style={{ color: '#ffd54f' }} />}
        />
      </Card>
    </Col>
  </Row>





      <div className='mt-10' style={{ display: 'flex', gap: '16px' }}>
      
      <Card title="Crop Investments" style={{ flex: 2 }}>
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

    <Card title="Investment Visualizations">
      <div style={{ display: 'flex', gap: '16px' }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>Investments by Crop</h3>
          <div style={{ width: '100%', height: '300px' }}>
            <PiechartcustomChart />
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>Portfolio Performance</h3>
          <div style={{ width: '100%', height: '300px' }}>
            <LinechartChart />
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>Profit/Loss by Crop</h3>
          <div style={{ width: '100%', height: '300px' }}>
            <BarchartChart />
          </div>
        </div>
      </div>
    </Card>

<h1 className='font-bold mt-4 mb-4 text-3xl'>Trending News</h1>

    <div style={{ display: 'flex', gap: '16px' }}>
      {cardData.map((card, index) => (
        <Card title={card.title} style={{ flex: 1 }} key={index}>
          <div style={{ display: 'grid', gap: '16px' }}>
            {card.content.map((item, idx) => (
              <div style={{ display: 'grid', gap: '4px' }} key={idx}>
                <div style={{ fontSize: '14px', fontWeight: '500', color: '#8c8c8c' }}>{item.label}</div>
                <div style={{ fontSize: '24px', fontWeight: 'bold' }} className={item.valueClass}>{item.value}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '16px', fontSize: '12px', color: '#8c8c8c' }}>{card.date}</div>
        </Card>
      ))}
    </div>
    <Footer/>
      
      
    </div>
  )
}
