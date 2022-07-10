import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'assets/scss/style.scss';

import Homepage from 'components/Homepage/index';
import CaseStudy from 'components/CaseStudy';
import Blog from 'components/Blog';
import About from 'components/About';
import DetailCaseStudy from 'components/CaseStudy/Detail';
import ComingStudy from 'components/CaseStudy/ComingSoon';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/case-study' element={<CaseStudy />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail-case-study' element={<DetailCaseStudy />} />
        <Route path='/coming-case-study' element={<ComingStudy />} />
      </Routes>
    </Router>
  );
}

export default App;
