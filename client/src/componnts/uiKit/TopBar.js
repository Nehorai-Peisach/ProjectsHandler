import { useDispatch, useSelector } from 'react-redux';
import { VscAdd, VscHome } from 'react-icons/vsc';
import { setTitle } from 'redux/reducers/title';
import { Link } from 'react-router-dom';

const TopBar = (props) => {
  const dispatch = useDispatch();
  const currentPageName = useSelector((state) => state.currentPage.value);

  return (
    <div className="top_bar">
      <h1 className="top_bar__title">{currentPageName}</h1>
      <div className="top_bar__icons">
        <Link to="/addProject">
          <VscAdd className="icon" />
        </Link>
        <Link to="/">
          <VscHome className="icon" />
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
