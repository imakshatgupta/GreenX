import React,{useState} from 'react';
import { Layout, Menu, Avatar, Dropdown,Modal,  Button, Card, Row, Col } from 'antd';
import { Link } from 'react-router-dom'; // Adjust based on your routing library
import { UserOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import { PiPlant } from "react-icons/pi";
import { LuLeaf } from "react-icons/lu";
import { LuWallet } from "react-icons/lu";

const colors = {
    headerBackground: '#90EE90', 
    linkHover: '#1b4332', // Darker Green
    cardBackground: '#eaf4e0', // Light Green
    buttonBackground: '#4caf50', // Green
    buttonText: '#ffffff', // White
    textPrimary: '#2e7d32', // Medium Green
    textSecondary: '#4b4b4b', // Dark Grey
    borderColor: '#a5d6a7', // Light Green Border
    cardShadow: '#c5e1a5' // Light Green Shadow
  };



const menu = (
    <Menu>
    <Menu.Item key="profile" icon={<UserOutlined />}>
      <a href="#" className="flex items-center gap-2">
        Profile
      </a>
    </Menu.Item>
    <Menu.Item key="settings" icon={<SettingOutlined />}>
      <a href="#" className="flex items-center gap-2">
        Settings
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="signout" icon={<LogoutOutlined />}>
      <a href="#" className="flex items-center gap-2">
        Sign out
      </a>
    </Menu.Item>
  </Menu>
);





const { Header, Content } = Layout;

const FarmerDashboard = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalVisible2, setIsModalVisible2] = useState(false);
    const [isModalVisible3, setIsModalVisible3] = useState(false);
    const [investormodal, setInvestormodal] = useState(false);
    const [investormodal2, setInvestormodal2] = useState(false);
    const [investormodal3, setInvestormodal3] = useState(false);

    
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
    const statuses_two = [
        { id: 1, label: 'Germination' },
        { id: 2, label: 'Seedling Development' },
        { id: 3, label: 'Vegetative Growth' },
        { id: 4, label: 'Harvesting' },
        { id: 5, label: 'Sell' },
        
    ];
    
    const [selectedStatus_one, setSelectedStatus_one] = useState(statuses_one);
    const [selectedStatus_two, setSelectedStatus_two] = useState(statuses_two);
    const [selectedStatus, setSelectedStatus] = useState(statuses);

    const showModal = () => {
      setIsModalVisible(true);
    };
    const showModal2 = () => {
      setIsModalVisible2(true);
    };
    const showModal3 = () => {
      setIsModalVisible3(true);
    };

    const showInvestorModal = () => {
        setInvestormodal(true);
    }
    const showInvestorModal2 = () => {
        setInvestormodal2(true);
    }
    const showInvestorModal3 = () => {
        setInvestormodal3(true);
    }
  
    const handleCancel = () => {
      setIsModalVisible(false);
      setIsModalVisible2(false);
    setIsModalVisible3(false);
    setInvestormodal(false);
    setInvestormodal2(false);
    setInvestormodal3(false);
    };

    const handleStatusChange = (statusId) => {
        const selected = statuses.find(status => status.id === statusId);
        setSelectedStatus(statusId);
        setPhase(selected.label);
        console.log(selected.label);
      };

      const handleStatusChange_one = (statusId) => {
        const selected = statuses_one.find(status => status.id === statusId);
        setSelectedStatus_one(statusId);
        setPhase_one(selected.label);
      }
        const handleStatusChange_two = (statusId) => {
            const selected = statuses_two.find(status => status.id === statusId);
            setSelectedStatus_two(statusId);
            setPhase_two(selected.label);
        }
        
    return (
    <Layout className="min-h-screen bg-muted/40">
    <Header className="flex h-20 w-full items-center px-4 md:px-6" style={{ backgroundColor: colors.headerBackground }}>
      <a href="#" className="flex items-center gap-2">
        <span className="text-2xl font-serif font-bold text-white">Farmer Dashboard</span>
      </a>
      <Menu mode="horizontal" className="ml-auto flex items-center gap-4 md:gap-6" style={{ backgroundColor: colors.headerBackground }}>
        <Menu.Item key="dashboard">
          <a href="#" className="group inline-flex h-9 w-max items-center justify-center rounded-md text-white py-2 text-sm font-medium transition-colors hover:bg-[#1b4332]">
            Dashboard
          </a>
        </Menu.Item>
        <Menu.Item key="investments">
          <a href="#" className="group inline-flex h-9 w-max items-center justify-center rounded-md py-2 text-sm font-medium transition-colors hover:bg-[#1b4332]">
            Investments
          </a>
        </Menu.Item>
        <Menu.Item key="crops">
          <a href="#" className="group inline-flex h-9 w-max items-center justify-center rounded-md py-2 text-sm font-medium transition-colors hover:bg-[#1b4332]">
            Crops
          </a>
        </Menu.Item>
        <Menu.Item key="settings">
          <a href="#" className="group inline-flex h-9 w-max items-center justify-center rounded-md py-2 text-sm font-medium transition-colors hover:bg-[#1b4332]">
            Settings
          </a>
        </Menu.Item>
      </Menu>
      <Dropdown overlay={menu} trigger={['click']} className="ml-4">
        <a onClick={(e) => e.preventDefault()} className="ant-dropdown-link" href="#">
          <Avatar size="large" src="/placeholder-user.jpg" className="h-9 w-9" />
          <span className="sr-only">Toggle user menu</span>
        </a>
      </Dropdown>
    </Header>

    <Content className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
      <div className="max-w-6xl w-full mx-auto grid gap-8">
        <Card style={{ backgroundColor: colors.cardBackground, borderColor: colors.borderColor, boxShadow: `0 4px 8px ${colors.cardShadow}` }}>
          <div className='flex'>
            <PiPlant className='h-8 w-8 mt-1 mr-3'/>
           <h1 className='font-bold text-2xl'>Crop Listing</h1> 
          </div>
          <h1 className='text-left ml-8 mb-10'>Manage your crop listings and track their growth.</h1>
          <Row gutter={[16, 16]} justify="space-around">
            <Col xs={24} md={12} lg={8}>
              <Card 
                title={
                  <div className="flex items-center">
                    <LuLeaf className="h-6 w-6 mr-2" style={{ color: colors.textPrimary }} />
                    <span className="text-left font-bold text-xl">{/* Crop Name */}Tomatoes</span>
                  </div>
                } 
                extra={<span className='font-semibold text-xs'>Phase: {phase}</span>}
              >
                <p className='text-left text-lg mb-4'><strong>Expected Yield:</strong> 2,000 kg</p>
                <p className='text-lg text-left mb-4'><strong>Timeline:</strong> 2 months</p>
                <Button className='bg-black text-white mt-4' size="medium" onClick={showModal}>Update</Button>
                {/* <Button className='bg-black text-white ml-4' size="medium" type="default" >View Details</Button> */}
              </Card>
            </Col>
        <Modal
        title="Update Crop Status"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={900} // Increase modal width
        className="custom-modal"
      >
        <div className="flex flex-col items-center justify-center w-full p-6 bg-white rounded-lg shadow-lg">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">Crop Status</h2>
          <div className="flex items-center justify-between w-full max-w-4xl relative">
            {statuses.map((status, index) => (
              <div key={status.id} className="relative flex flex-col items-center">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full ${selectedStatus>= status.id ? 'bg-green-500' : 'bg-gray-400'} text-white text-lg`}
                  onClick={() => handleStatusChange(status.id)}
                >
                  {status.id}
                </div>
                <span className={`mt-2 text-base ${selectedStatus >= status.id ? 'text-green-500' : 'text-gray-700'}`}>
                  {status.label}
                </span>
                {index < statuses.length - 1 && (
                  <div
                    className="absolute top-1/2 w-10 h-1 "
                    style={{ left: 'calc(50% - 0.5px)' }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </Modal>


            <Col xs={24} md={12} lg={8}>
        <Card
          title={
            <div className="flex items-center">
              <LuLeaf className="h-6 w-6 mr-2" />
              <span className="text-left font-bold text-xl">Tomatoes</span>
            </div>
          }
          extra={<span className='font-semibold'> Phase: {phase_one}</span>}
        >
          <p className='text-left text-lg mb-4'><strong>Expected Yield:</strong> 2,000 kg</p>
          <p className='text-lg text-left mb-4'><strong>Timeline:</strong> 2 months</p>
          <Button className='bg-black text-white mt-4' size="medium" onClick={showModal2}>
            Update
          </Button>
          {/* <Button className='bg-black text-white ml-4' size="medium" type="default">
            View Details
          </Button> */}
        </Card>
      </Col>

      <Modal
        title="Update Crop Status"
        visible={isModalVisible2}
        onCancel={handleCancel}
        footer={null}
        width={900} // Increase modal width
        className="custom-modal"
      >
        <div className="flex flex-col items-center justify-center w-full p-6 bg-white rounded-lg shadow-lg">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">Crop Status</h2>
          <div className="flex items-center justify-between w-full max-w-4xl relative">
            {statuses_one.map((status, index) => (
              <div key={status.id} className="relative flex flex-col items-center">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full ${selectedStatus_one >= status.id ? 'bg-green-500' : 'bg-gray-400'} text-white text-lg`}
                  onClick={() => handleStatusChange_one(status.id)}
                >
                  {status.id}
                </div>
                <span className={`mt-2 text-base ${selectedStatus >= status.id ? 'text-green-500' : 'text-gray-700'}`}>
                  {status.label}
                </span>
                {index < statuses.length - 1 && (
                 <div
                 className="absolute top-1/2 w-10 h-1 "
                 style={{ left: 'calc(50% - 0.5px)' }}
               />
                )}
              </div>
            ))}
          </div>
        </div>
      </Modal>


            <Col xs={24} md={12} lg={8}>
            <Card 
    title={
      <div className="flex items-center">
        <LuLeaf className="h-6 w-6 mr-2" />
        <span className="text-left font-bold text-xl">Wheat</span>
      </div>
    } 
    extra={<span className='font-semibold'> Phase:{phase_two}</span>}
  >                <p className='text-left text-lg mb-4'><strong>Expected Yield:</strong> 3,500 kg</p>
                <p className='text-lg text-left mb-4'><strong>Timeline:</strong> 3 months</p>
                <Button className='bg-black text-white mt-4' onClick={showModal3} size="medium">Update</Button>
                {/* <Button className='bg-black text-white ml-4' size="medium" type="default" >View Details</Button> */}
              </Card>
            </Col>
            <Modal
        title="Update Crop Status"
        visible={isModalVisible3}
        onCancel={handleCancel}
        footer={null}
        width={900} // Increase modal width
        className="custom-modal"
      >
        <div className="flex flex-col items-center justify-center w-full p-6 bg-white rounded-lg shadow-lg">
          <h2 className="mb-6 text-3xl font-bold text-gray-800">Crop Status</h2>
          <div className="flex items-center justify-between w-full max-w-4xl relative">
            {statuses_two.map((status, index) => (
              <div key={status.id} className="relative flex flex-col items-center">
                <div
                  className={`flex items-center justify-center w-12 h-12 rounded-full ${selectedStatus_two >= status.id ? 'bg-green-500' : 'bg-gray-400'} text-white text-lg`}
                  onClick={() => handleStatusChange_two(status.id)}
                >
                  {status.id}
                </div>
                <span className={`mt-2 text-base ${selectedStatus >= status.id ? 'text-green-500' : 'text-gray-700'}`}>
                  {status.label}
                </span>
                {index < statuses.length - 1 && (
                 <div
                 className="absolute top-1/2 w-10 h-1 "
                 style={{ left: 'calc(50% - 0.5px)' }}
               />
                )}
              </div>
            ))}
          </div>
        </div>
      </Modal>
          </Row>
        </Card>
      </div>
      <Card style={{ backgroundColor: colors.cardBackground, borderColor: colors.borderColor, boxShadow: `0 4px 8px ${colors.cardShadow}` }}>
          <div className='flex'>
            <LuWallet className='h-8 w-8 mt-1 mr-3'/>
           <h1 className='font-bold text-2xl'>Investor Details</h1> 
          </div>
          <h1 className='text-left ml-8 mb-10'>View the investments made by investors in your crops.</h1>
          <Row gutter={[16, 16]} justify="space-around">
            <Col xs={24} md={12} lg={8}>
              <Card 
                title={
                  <div className="flex items-center">
                    <UserOutlined className="h-8 w-8 mr-2"  />
                    <span className="text-left font-bold text-xl">John Doe</span>
                  </div>
                } 
                extra={<span className='font-semibold' >Investor</span>}
                className="border-green-500 shadow-lg"
              >                
                <p className='text-left text-lg mb-4' >
                  <strong>Invested Crops:</strong> Tomatoes, Corn
                </p>
                <p className='text-lg text-left mb-4' >
                  <strong>Total Investment:</strong> $10,000
                </p>
                <Button className='bg-black text-white ml-4 mt-8' size="medium" onClick={showInvestorModal} type="default">View Details</Button>
              </Card>
            </Col>

            <Modal
             visible={investormodal}
             onCancel={handleCancel}
             footer={null}
             width={900} // Increase modal width
             className="custom-modal">
            <div className="grid gap-6 py-6">
          
          <div className="grid gap-2">
            <p className="font-bold text-xl ">Investment Breakdown</p>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <p className='font-bold'>Corn</p>
                <p className='font-bold'>$5,000</p>
              </div>
              <div className="flex items-center justify-between">
                <p className='font-bold'>Tomatos</p>
                <p className='font-bold'>$5,000</p>
              </div>
              
            </div>
          </div>
          <div className="grid gap-2">
            <p className="text-muted-foreground">Current Investment Value</p>
            <p className="text-2xl font-bold">$10,000</p>
          </div>
          <div className="grid gap-2">
            <p className="text-muted-foreground font-bold text-xl">Projected Returns</p>
            <p>
              Based on current market conditions, your investment is projected to yield a 15% return over the next 6
              months.
            </p>
          </div>
        </div>
            </Modal>
            <Col xs={24} md={12} lg={8}>
            <Card 
    title={
      <div className="flex items-center">
        <UserOutlined className="h-6 w-6 mr-2" />
        <span className="text-left font-bold text-xl">Jane Smith</span>
      </div>
    } 
    extra={<span className='font-semibold'> Investor</span>}
  >                <p className='text-left text-lg mb-4'><strong>Invested Crops:
</strong> Wheat</p>
                <p className='text-lg text-left mb-4'><strong>Total Investment:
                </strong> $5,000
                </p>
                <Button className='bg-black text-white ml-4 mt-8' size="medium" type="default" onClick={showInvestorModal2} >View Details</Button>
              </Card>
            </Col>
            <Modal
             visible={investormodal2}
             onCancel={handleCancel}
             footer={null}
             width={900} // Increase modal width
             className="custom-modal">
            <div className="grid gap-6 py-6">
          
          <div className="grid gap-2">
            <p className="font-bold text-xl ">Investment Breakdown</p>
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <p className='font-bold'>Wheat</p>
                <p className='font-bold'>$5,000</p>
              </div>
             
              
            </div>
          </div>
          <div className="grid gap-2">
            <p className="text-muted-foreground">Current Investment Value</p>
            <p className="text-2xl font-bold">$5,000</p>
          </div>
          <div className="grid gap-2">
            <p className="text-muted-foreground font-bold text-xl">Projected Returns</p>
            <p>
              Based on current market conditions, your investment is projected to yield a 15% return over the next 6
              months.
            </p>
          </div>
        </div>
            </Modal>
            <Col xs={24} md={12} lg={8}>
            <Card 
    title={
      <div className="flex items-center">
        <LuLeaf className="h-6 w-6 mr-2" />
        <span className="text-left font-bold text-xl">Sarah Lee
        </span>
      </div>
    } 
    extra={<span className='font-semibold'> Investor</span>}
  >                <p className='text-left text-lg mb-4'><strong>Invested Crops:
</strong> Tomatoes, Corn, Wheat
</p>
                <p className='text-lg text-left mb-4'><strong>Total Investment:
                :</strong> $15,000
                </p>
                <Button className='bg-black text-white ml-4' size="medium" type="default" onClick={showInvestorModal3} >View Details</Button>
              </Card>
            </Col>
            <Modal
             visible={investormodal3}
             onCancel={handleCancel}
             footer={null}
             width={900} // Increase modal width
             className="custom-modal">
            <div className="grid gap-6 py-6">
          
          <div className="grid gap-2">
            <p className="font-bold text-xl ">Investment Breakdown</p>
            <div className="grid gap-2">
             
              <div className="flex items-center justify-between">
                <p className='font-bold'>Tomatos</p>
                <p className='font-bold'>$5,000</p>
              </div>
              <div className="flex items-center justify-between">
                <p className='font-bold'>Corn</p>
                <p className='font-bold'>$7,000</p>
              </div>
              <div className="flex items-center justify-between">
                <p className='font-bold'>Wheat</p>
                <p className='font-bold'>$3,000</p>
              </div>
              
            </div>
          </div>
          <div className="grid gap-2">
            <p className="text-muted-foreground">Current Investment Value</p>
            <p className="text-2xl font-bold">$15,000</p>
          </div>
          <div className="grid gap-2">
            <p className="text-muted-foreground font-bold text-xl">Projected Returns</p>
            <p>
              Based on current market conditions, your investment is projected to yield a 15% return over the next 6
              months.
            </p>
          </div>
        </div>
            </Modal>
          </Row>
        </Card>
    </Content>
  </Layout>
)};

export default FarmerDashboard;
