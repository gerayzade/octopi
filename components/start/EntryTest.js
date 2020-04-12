import { connect } from 'react-redux';
import { addTestAnswer, passTest } from '~/store/actions';
import { Typography, Radio, TimePicker, Cascader, Select } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import Question from './Question';
import { strToSlug } from '~/utils/helpers';
import categories from './categories.js';

const addValues = (arr) => (arr.map(o => ({...o, value: strToSlug(o.label)})));

const areas = addValues(categories).map(category => ({
  ...category,
  children: addValues(category.children).map(subcategory => ({
    ...subcategory,
    children: addValues([
      { label: 'Beginner' },
      { label: 'Intermediate' },
      { label: 'Professional' }
    ])
  }))
}));

const { Text, Title } = Typography;

const EntryTest = ({ dispatch, testActive, testAnswers, testPassed }) => {
  const [answers, setAnswer] = React.useState({});
  const answerQuestion = (id, value, key) => {
    if(key !== undefined)
      value = {...(answers[id] || {}), [key]: value };
    setAnswer({ ...answers, [id]: value });
  }
  const confirmAnswer = (nextActive) => {
    if(answers[testActive] === undefined) return;
    nextActive = nextActive instanceof Array ? nextActive[answers[testActive]] : nextActive;
    dispatch(addTestAnswer(testActive, answers[testActive], nextActive || 100));
    if(nextActive === false) {
      dispatch(passTest());
    }
  }
  return (
    <div className="entry-test">
      <Title level={2}>Hola, mi amigo! <SmileOutlined className="icon-primary"/></Title>
      <Text>Take this <Text mark>3-minute test</Text> to let us help you build your perfect day!</Text>

      <Question id={1} title="Do you work at the moment?" confirm={confirmAnswer} next={[3,2]}>
        <Radio.Group onChange={(e) => answerQuestion(1, e.target.value)} value={answers[1]}>
          <Radio value={1}>Yes</Radio>
          <Radio value={0}>No</Radio>
        </Radio.Group>
      </Question>

      <Question id={2} title="What are your working hours?" confirm={confirmAnswer} condition={answers[1] !== 0} next={4}>
        <TimePicker.RangePicker format="HH:mm" minuteStep={15} onChange={(_, time) => answerQuestion(2, time)} />
      </Question>
      <Question id={3} title="What time do you usually wake up at?" confirm={confirmAnswer} condition={answers[1] !== 1} next={4}>
        <TimePicker format="HH:mm" minuteStep={15} onChange={(_, time) => answerQuestion(3, time)} />
      </Question>

      <Question id={4} title="Choose 3 areas you want to develop:" confirm={confirmAnswer} next={5}>
        <Cascader options={areas} onChange={(value) => answerQuestion(4, value, 1)} changeOnSelect />
        <Cascader options={areas} onChange={(value) => answerQuestion(4, value, 2)} changeOnSelect />
        <Cascader options={areas} onChange={(value) => answerQuestion(4, value, 3)} changeOnSelect />
      </Question>

      <Question id={5} title="Do you work out?" confirm={confirmAnswer} next={[7,6]}>
        <Radio.Group onChange={(e) => answerQuestion(5, e.target.value)} value={answers[5]}>
          <Radio value={1}>Yes</Radio>
          <Radio value={0}>No</Radio>
        </Radio.Group>
      </Question>

      <Question id={6} title="What is your goal?" confirm={confirmAnswer} condition={answers[5] !== 0} next={8}>
        <Radio.Group onChange={(e) => answerQuestion(6, e.target.value)} value={answers[6]}>
          {['Stay in tonus','Calm down','Lose weight','Boost immune system','Build muscle','No preferences'].map(label => (
            <Radio value={strToSlug(label)} style={{display: 'block', marginBottom: 8}}>{label}</Radio>
          ))}
        </Radio.Group>
      </Question>
      <Question id={7} title="Would you like to get started?" confirm={confirmAnswer} condition={answers[5] !== 1} next={[false, 8]}>
        <Radio.Group onChange={(e) => answerQuestion(7, e.target.value)} value={answers[7]}>
          <Radio value={1}>Yes</Radio>
          <Radio value={0}>No</Radio>
        </Radio.Group>
      </Question>

      <Question id={8} title="Do you have specific time slots you have to keep available?" confirm={confirmAnswer} next={[false, 9]}>
        <Radio.Group onChange={(e) => answerQuestion(8, e.target.value)} value={answers[8]}>
          <Radio value={1}>Yes</Radio>
          <Radio value={0}>No</Radio>
        </Radio.Group>
      </Question>

      <Question id={9} title="Please specify" confirm={confirmAnswer} condition={answers[8] !== 0} next={false}>
        <TimePicker.RangePicker format="HH:mm" minuteStep={15} onChange={(_, time) => answerQuestion(9, time)} />
      </Question>
    </div>
  )
}

export default connect(state => ({
  testActive: state.testActive,
  testAnswers: state.testAnswers,
  testPassed: state.testPassed
}))(EntryTest);