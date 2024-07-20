import React,{useState,useEffect} from 'react';
import { Layout, Menu,Modal,  Button, Card, Row, Col,Tag } from 'antd';
import { UserOutlined,  } from '@ant-design/icons';
import { PiPlant } from "react-icons/pi";
import wheat from '../assets/wheat.jpeg';
import corn from '../assets/corn.jpeg';
import tomato from '../assets/tomato.jpeg';
import maize from '../assets/maize.jpeg';


const colors = {
    headerBackground: '#6dbf6d', 
    linkHover: '#1b4332', // Darker Green
    cardBackground: '#eaf4e0', // Light Green
    buttonBackground: '#4caf50', // Green
    buttonText: '#ffffff', // White
    textPrimary: '#2e7d32', // Medium Green 
    textSecondary: '#4b4b4b', // Dark Grey
    borderColor: '#a5d6a7', // Light Green Border
    cardShadow: '#c5e1a5' // Light Green Shadow
  };
const { Header, Content } = Layout;

const FarmerDashboard = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const [phase, setPhase] = useState('Seeding');
    const [phase_one, setPhase_one] = useState('Seeding');
    const [phase_two, setPhase_two] = useState('Seeding'); 
    
    
    const statuses = [
        { id: 1, label: 'Germination' },
        { id: 2, label: 'Seedling Development' },
        { id: 3, label: 'Vegetative Growth' },
        { id: 4, label: 'Harvesting' },
        { id: 5, label: 'Sell' },
        
    ];
    const statuses_one = [
        { id: 1, label: 'Germination' },
        { id: 2, label: 'Seedling Development' },
        { id: 3, label: 'Vegetative Growth' },
        { id: 4, label: 'Harvesting' },
        { id: 5, label: 'Sell' },
       
    ];
  
    const [selectedStatus_one, setSelectedStatus_one] = useState(statuses_one);
    const [selectedStatus, setSelectedStatus] = useState(statuses);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const showModal2 = () => {
      setIsModalVisible2(true);
    };
   

    const handleCancel = () => {
      setIsModalVisible(false);
      setIsModalVisible2(false);
   
    };

    const handleStatusChange = (statusId) => {
      const selected = statuses.find(status => status.id === statusId);
      setSelectedStatus(statusId);
      setPhase(selected.label);
      console.log(selected.label);
      localStorage.setItem('selectedStatus', statusId);
    };
  
    const handleStatusChange_one = (statusId) => {
      const selected = statuses_one.find(status => status.id === statusId);
      setSelectedStatus_one(statusId);
      setPhase_one(selected.label);
      localStorage.setItem('selectedStatus_one', statusId);
    };

    useEffect(() => {
      const savedStatus = localStorage.getItem('selectedStatus');
      if (savedStatus) {
        const statusId = parseInt(savedStatus, 10);
        setSelectedStatus(statusId);
        const selected = statuses.find(status => status.id === statusId);
        if (selected) {
          setPhase(selected.label);
        }
      }
  
      const savedStatus_one = localStorage.getItem('selectedStatus_one');
      if (savedStatus_one) {
        const statusId = parseInt(savedStatus_one, 10);
        setSelectedStatus_one(statusId);
        const selected = statuses_one.find(status => status.id === statusId);
        if (selected) {
          setPhase_one(selected.label);
        }
      }
    }, []);
      

   
       
    
        
    return (
    <Layout className="min-h-screen bg-muted/40">
  <Header className="flex h-20 ml-10 mr-10 w-auto border rounded-xl items-center px-4 bg-teal-600">
  <a href="#" className="flex items-center gap-2">
    <span className="text-2xl font-serif font-bold text-white">Farmer Dashboard</span>
  </a>
  <Menu mode="horizontal" className="ml-auto flex items-center bg-teal-600">
    <Menu.Item key="dashboard">
      <UserOutlined style={{ fontSize: '1.5rem' }} className="text-white" />
    </Menu.Item>
  </Menu>
</Header>


    <Content className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
  <div className="max-w-6xl w-full mx-auto grid gap-8">
    <div className="flex flex-col gap-8">
      {/* Crop Listing Header */}
      <div className="flex items-center justify-between p-4 rounded-lg ">
        <div className="flex items-center">
          <PiPlant className="h-8 w-8 mt-1 mr-3" />
          <h1 className="font-bold text-4xl">Crop Listed</h1>
        </div>
       
      </div>

      {/* Crop Cards */}
      <Row gutter={[16, 16]} justify="space-around">
  <Col span={12}>
    <Card
    className='shadow-xl'
      hoverable
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '16px', borderRadius: '8px' }}
      cover={<img src={wheat} alt="Crop Image" width={160} height={160} style={{ borderRadius: '8px', objectFit: 'cover' }} />}
    >
      <div style={{ flex: 1, display: 'grid', gap: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600' }}>Wheat</h3>
          <Tag color="blue" style={{ padding: '4px 12px', borderRadius: '16px', fontSize: '14px', fontWeight: '500',marginLeft:'70px' }}>
            {phase}
          </Tag>
        </div>
        <p style={{ color: '#888', fontSize: '14px',fontWeight:"500" }}>Yield:500 kg</p>
        <p style={{ color: '#888', fontSize: '14px',fontWeight:"500" }}>TimeLine: 2 month</p>
        <Button onClick={showModal} className='border rounded-xl bg-teal-500 text-white hover:bg-teal-600'  style={{ justifySelf: 'end' }}>
          View More
        </Button>
      </div>
    </Card>
  </Col>
  <Col span={12}>
    <Card
    className='shadow-xl'
      hoverable
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', padding: '16px', borderRadius: '8px' }}
      cover={<img src={tomato} alt="Crop Image" width={140} height={160} style={{ borderRadius: '8px', objectFit: 'cover' }} />}
    >
      <div style={{ flex: 1, display: 'grid', gap: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600' }}>Tomato</h3>
          <Tag color="blue" style={{ padding: '4px 12px', borderRadius: '16px', fontSize: '14px', fontWeight: '500',marginLeft:'100px' }}>
            {phase_one}
          </Tag>
        </div>
        <p style={{ color: '#888', fontSize: '14px',fontWeight:"500" }}>Yield:800 kg</p>
        <p style={{ color: '#888', fontSize: '14px',fontWeight:"500" }}>TimeLine: 4 month</p>        <Button onClick={showModal2} className='border rounded-xl bg-teal-500 text-white hover:bg-teal-600'  style={{ justifySelf: 'end' }}>
          View More
        </Button>
      </div>
    </Card>
  </Col>
</Row>
<Row gutter={[16, 16]} justify="space-around">
  <Col span={12}>
    <Card
    className='shadow-xl'
      hoverable
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '16px', borderRadius: '8px' }}
      cover={<img src={corn} alt="Crop Image" width={160} height={160} style={{ borderRadius: '8px', objectFit: 'cover' }} />}
    >
      <div style={{ flex: 1, display: 'grid', gap: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600' }}>Corn</h3>
          <Tag color="blue" style={{ padding: '4px 12px', borderRadius: '16px', fontSize: '14px', fontWeight: '500',marginLeft:'120px' }}>
            Sell
          </Tag>
        </div>
        <p style={{ color: '#888', fontSize: '14px',fontWeight:"500" }}>Yield:200 kg</p>
        <p style={{ color: '#888', fontSize: '14px',fontWeight:"500" }}>TimeLine: 6 month</p>

        <Button className='border rounded-xl bg-teal-500 text-white hover:bg-teal-600'  style={{ justifySelf: 'end' }}>
          View More 
        </Button>
      </div>
    </Card>
  </Col>
  <Col span={12}>
    <Card
    className='shadow-xl'
      hoverable
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', padding: '16px', borderRadius: '8px' }}
      cover={<img src={maize} alt="Crop Image" width={160} height={10} style={{ borderRadius: '8px', objectFit: 'cover' }} />}
    >
      <div style={{ flex: 1, display: 'grid', gap: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontSize: '18px', fontWeight: '600' }}>Maize</h3>
          <Tag color="blue" style={{ padding: '4px 12px', borderRadius: '16px', fontSize: '14px', fontWeight: '500' ,marginLeft:'70px' }}>
            Harvesting
          </Tag>
        </div>
        <p style={{ color: '#888', fontSize: '14px' ,fontWeight:'500' }}>Yield: 100kg</p>
        <p style={{ color: '#888', fontSize: '14px' ,fontWeight:'500' }}>Timeline: 3 months</p>

        <Button  className='border rounded-xl bg-teal-500 text-white hover:bg-teal-600'  style={{ justifySelf: 'end' }}>
          View More
        </Button>
      </div>
    </Card>
  </Col>
</Row>

    </div>

    {/* Modals */}
    <Modal
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
        width={800}
        className="custom-modal"
      >
        <div className="flex flex-col md:flex-row p-4 bg-gray-100 rounded-lg shadow-lg">
          {/* Image Section */}
          <div className="bg-muted rounded-2xl overflow-hidden mb-6 md:mb-0 md:w-1/2">
            <img
              src={wheat}
              alt="Investor Profile"
              className="w-full mt-8 h-auto max-w-xs mx-auto rounded-3xl"
            />
          </div>

          {/* Details Section */}
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-muted rounded-lg p-2">
              <h2 className="text-2xl text-center font-bold mb-4">Investor Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="font-bold">Name</div>
                <div className="font-bold">Investment</div>
                <div className="font-bold">Ownership</div>
                {/* Example Entries */}
                <div>Akshat</div>
                <div>$250,000</div>
                <div>10%</div>
                <div>Aman</div>
                <div>$150,000</div>
                <div>5%</div>
                <div>Harsh</div>
                <div>$100,000</div>
                <div>3%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Section */}
        <div className="p-6 rounded-lg shadow-xl mt-6 bg-gray-100">
          <h2 className="mb-4 text-xl font-bold text-gray-800">Crop Status</h2>
          <div className="flex flex-wrap items-center justify-center w-full max-w-4xl relative">
            {statuses.map((status, index) => (
              <div key={status.id} className="relative flex flex-col items-center mx-4 my-2">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full ${selectedStatus >= status.id ? 'bg-green-500' : 'bg-gray-400'} text-white text-lg cursor-pointer`}
                  onClick={() => handleStatusChange(status.id)}
                >
                  {status.id}
                </div>
                <span className={`mt-2 text-base ${selectedStatus >= status.id ? 'text-green-500' : 'text-gray-700'}`}>
                  {status.label}
                </span>
                {index < statuses.length - 1 && (
                  <div  />
                )}
              </div>
            ))}
          </div>
        </div>
      </Modal>

      <Modal
        visible={isModalVisible2}
        onCancel={() => setIsModalVisible2(false)}
        footer={null}
        width={800}
        className="custom-modal"
      >
        <div className="flex flex-col md:flex-row p-4 bg-gray-100 rounded-lg shadow-lg">
          {/* Image Section */}
          <div className="bg-muted rounded-2xl overflow-hidden mb-6 md:mb-0 md:w-1/2">
            <img
              src={tomato}
              alt="Investor Profile"
              className="w-full mt-8 h-auto max-w-xs mx-auto rounded-3xl"
            />
          </div>

          {/* Details Section */}
          <div className="w-full md:w-1/2 p-4">
            <div className="bg-muted rounded-lg p-2">
              <h2 className="text-2xl text-center font-bold mb-4">Investor Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="font-bold">Name</div>
                <div className="font-bold">Investment</div>
                <div className="font-bold">Ownership</div>
                {/* Example Entries */}
                <div>John Doe</div>
                <div>$250,000</div>
                <div>10%</div>
                <div>Jane Smith</div>
                <div>$150,000</div>
                <div>5%</div>
                <div>Robert Brown</div>
                <div>$100,000</div>
                <div>3%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Section */}
        <div className="p-6 rounded-lg shadow-xl mt-6 bg-gray-100">
          <h2 className="mb-4 text-xl font-bold text-gray-800">Crop Status</h2>
          <div className="flex flex-wrap items-center justify-center w-full max-w-4xl relative">
            {statuses_one.map((status, index) => (
              <div key={status.id} className="relative flex flex-col items-center mx-4 my-2">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full ${selectedStatus_one >= status.id ? 'bg-green-500' : 'bg-gray-400'} text-white text-lg cursor-pointer`}
                  onClick={() => handleStatusChange_one(status.id)}
                >
                  {status.id}
                </div>
                <span className={`mt-2 text-base ${selectedStatus_one >= status.id ? 'text-green-500' : 'text-gray-700'}`}>
                  {status.label}
                </span>
                {index < statuses_one.length - 1 && (
                  <div className="" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Modal>
  </div>
</Content>



         </Layout>

)};

export default FarmerDashboard;
