import { connect } from 'react-redux';
import { Typography, Button } from 'antd';

const Question = ({ title, id, children, next, confirm, condition = true, testActive }) => {
  return (testActive >= id && condition) && (
    <div className={`entry-test_question ${id !== testActive ? 'disabled' : ''}`}>
      <Typography.Title level={4}>{title}</Typography.Title>
      {children}
      {testActive === id && (
      <div className="entry-test_next">
        <Button type="primary" onClick={() => confirm(next)}>
          { (next === false || (next instanceof Array && next.includes(false))) ? 'Submit' : 'Next'}
        </Button>
      </div>
      )}
    </div>
  )
}

export default connect(state => ({
  testActive: state.testActive,
  testAnswers: state.testAnswers
}))(Question);