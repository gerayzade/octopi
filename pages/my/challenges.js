import { connect } from 'react-redux';
import AuthPage from '~/components/layout/AuthPage';
import { Row, Col, Typography, Button } from 'antd';

const { Title, Text } = Typography;

const challenges = [
  {}
];

const MyChallenges = ({ isLoggedIn }) => {
  return(
    <AuthPage isLoggedIn={isLoggedIn} title="Challenges">
      <div className="challenges">
        <Title level={4}>Challenge your friends</Title>
        <Text>You can do it both in groups and separetely!</Text>
        <Title level={4}>Your Participation:</Title>
        <Row gutter={8} className="challenges_list">
          {challenges.map((challenge, i) => (
          <Col span={24} md={12} xl={12} key={i}>
            <div className="pane challenges_active">
              <img src="https://www.hackcov19.com/assets/img/wallpaper.jpg" alt="hackcov19" />
              <div className="challenges_active-inner">
                <Title level={4}><strong>Hack-Cov-19</strong> Group Challenge</Title>
                <div>
                  <Text>Boosting startup skills during lockdown period</Text><br/>
                  <Text>Created by: <strong>SUP.VC</strong></Text>
                </div>
                <Button type="primary" ghost>Leave</Button>
              </div>
            </div>
          </Col>
          ))}
        </Row>
      </div> 
    </AuthPage>
  )
}

export default connect(state => ({
  isLoggedIn: state.isLoggedIn
}))(MyChallenges);