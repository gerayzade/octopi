import { connect } from 'react-redux';
import useUser from '~/utils/auth/hooks';
import AuthPage from '~/components/layout/AuthPage';
import { Col, Row, Typography, Button } from 'antd';

const { Title, Paragraph, Text } = Typography;

const courses = [
  { title: 'German Language', description: 'Level: B1', platform: 'Duolingo', progress: 65 },
  { title: 'Italian Cooking', description: 'Level: Beginner', platform: 'Skillshare', progress: 49 },
  { title: 'Data Science', description: 'Level: Beginner', platform: 'Coursera', progress: 87 },
  { title: 'Meditation', description: 'Online Meditation', platform: 'Glo', progress: 23 }
]

const topics = [
  'Arts & Humanities','Business','Computer Science','Data Science','Information Technologies',
  'Health','Math & Logic','Personal Development'
]

const MyCourses = () => {
  const user = useUser({ redirectTo: '/' });
  const [active, setCourse] = React.useState({...courses[0], i: 0});
  return(
    <AuthPage title="Current Boost Status" user={user}>
      <Row gutter={{xs: 16, md: 24}}>
        <Col span={24} md={9}>
          <div className="course-list">
            {courses.map((course, i) => (
            <div key={i}
              className={`pane course-list_item ${active.i === i ? 'active' : ''}`} 
              onClick={() => setCourse({...course, i})}
            >
              <img src={`/img/course-${i+1}.jpg`} alt={course.title} />
              <div>
                <Title level={4}>{course.title}</Title>
                <Paragraph>{course.description}</Paragraph>
                <Paragraph>{course.platform}</Paragraph>
              </div>
            </div>
            ))}
          </div>
        </Col>
        <Col span={24} md={10}>
          <div className="pane course-active">
            <img src={`/img/course-${active.i+1}.jpg`} alt={active.title} />
            <Title level={2}>{active.title}</Title>
            <div className="course-active_info">
              <Paragraph>{active.description}</Paragraph>
              <Paragraph><strong>{active.platform}</strong></Paragraph>
            </div>
            <Text type="secondory">
              {['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              'Ut enim ad minim veniam, quis nostrud exercitation et dolore ullamco laboris nisi ut aliquip ex ea commodo consequat.',
              'Duis aute irure dolor in reprehenderit in et dolore voluptate velit esse cillum dolore eu fugiat nulla et dolore pariatur.',
              'Excepteur sint occaecat cupidatat non proident, et dolore sunt in culpa qui officia deserunt mollit anim id est laborum.'][active.i]}
            </Text>
            <div className="course-active_summary">
              <Button type="primary" ghost>GO TO COURSE</Button>
              <span className="course-active_weight">
                Course weight: <strong>0.3</strong>
                <Button type="link">(change)</Button>
              </span>
            </div>
          </div>
          <div className="pane course-active_progress">
            <div style={{width: `${active.progress}%`}}>
              <span>{active.progress}% done</span>
            </div>
          </div>
        </Col>
        <Col span={24} md={5}>
          <div className="courses-explore">
            <Title level={4}>Explore</Title>
            <ul>{topics.map((li, i) => (
              <li key={i}>
                <Button type="link" href="#0">{li}</Button>
              </li>
            ))}
            </ul>
            <Button type="link" href="#0">
              <strong>Explore All</strong>
            </Button>
          </div>
        </Col>
      </Row>
    </AuthPage>
  )
}

export default connect()(MyCourses);