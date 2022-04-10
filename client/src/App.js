import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'componnts/home/Home';
import TopBar from 'componnts/uiKit/TopBar';
import AddProject from 'componnts/addProject/AddProject';
import EditProject from 'componnts/editProdect/EditProject';
import ViewProject from 'componnts/viewProject/ViewProject';
import FullPagePopup from 'componnts/uiKit/FullPagePopup';
import { useState } from 'react';

const App = () => {
  const [popup, setPopup] = useState(<div />);
  const [fullPopupClassname, setFullPopupClassname] = useState('full_popup__hidden');

  const showFullPopup = (popup) => {
    setPopup(popup);
    setFullPopupClassname('full_popup__display');
  };
  const closeFullPopup = () => {
    setPopup(<div />);
    setFullPopupClassname('full_popup__hidden');
  };
  const openClosePopup = [showFullPopup, closeFullPopup];

  return (
    <Router>
      <div className="app">
        <TopBar />
        <div className="page">
          <Routes>
            <Route path="/" exact element={<Home openClosePopup={openClosePopup} />} />
            <Route path="/addProject" element={<AddProject />} />
            <Route path="/editProject" element={<EditProject />} />
            <Route path="/viewProject" element={<ViewProject />} />
          </Routes>
        </div>
      </div>
      <FullPagePopup popup={popup} close={closeFullPopup} className={fullPopupClassname} />
    </Router>
  );
};

export default App;
