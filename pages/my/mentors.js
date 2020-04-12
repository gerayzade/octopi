import { connect } from 'react-redux';
import AuthPage from '~/components/layout/AuthPage';
import { Row, Col, Typography, Button } from 'antd';

const { Title, Text } = Typography;

const addStrong = (str) => str.split(' ').map((w,i) => i === 0 ? `<strong>${w}</strong>` : w).join(' ');

const mentors = [
  { name: 'Rayan Copeland', title: 'Head of Product at SeaCon' },
  { name: 'Aroush Dillard', title: 'Creative Director at Zolt Corp.' },
  { name: 'Chante Cano', title: 'CEO at DeVito Comp' },
  { name: 'Emilie Mercado', title: 'IT Expert at MacJohnson\'s' },
  { name: 'Aarush Whitaker', title: 'Data Science Expert at Bond' },
  { name: 'Naseem Massey', title: 'Head of IT at Greenway Studio' }
]

const MyMentors = ({ isLoggedIn }) => {
  return(
    <AuthPage isLoggedIn={isLoggedIn} title="Growth Mentors">
      <div className="mentors">
        <Title level={4}>Connect with Great People</Title>
        <Text>Who will shair their personal experiences and knowledge</Text>
        <div className="mentors_find">
          <Button type="primary">Find Mentors</Button>
        </div>
        <Title level={4}>My Mentors:</Title>
        <Row gutter={8}>
          {mentors.map((mentor, i) => (
          <Col span={24} md={8} xl={6} key={i}>
            <div className="pane mentors_person">
              <img src={`https://randomuser.me/api/portraits/${[5,6,8,10].includes(i) ? 'women' : 'men'}/${i+1}.jpg`} alt={mentor.name} />
              <Title level={4}>
                <span dangerouslySetInnerHTML={{__html: addStrong(mentor.name)}} />
              </Title>
              <Text>{mentor.title}</Text>
              <Button type="primary" ghost>View Profile</Button>
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
}))(MyMentors);