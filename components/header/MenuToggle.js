import { connect } from 'react-redux';
import { toggleMenu } from '~/store/actions';

const MenuToggle = ({ dispatch, menuOpened }) => {
  return (
    <button type="button" className={menuOpened ? ' active' : ''} 
      onClick={() => dispatch(toggleMenu(!menuOpened))}
    >
      Menu
    </button>
  );
}

export default connect(state => ({ 
  menuOpened: state.menuOpened 
}))(MenuToggle);