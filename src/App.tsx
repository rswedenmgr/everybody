import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AcademicsPage from './pages/AcademicsPage';
import AdmissionsPage from './pages/AdmissionsPage';
import CampusLifePage from './pages/CampusLifePage';
import ResearchPage from './pages/ResearchPage';
import ContactPage from './pages/ContactPage';
import AcademicCalendarPage from './pages/QuickLinks/AcademicCalendarPage';
import AnnouncementsPage from './pages/QuickLinks/AnnouncementsPage';
import CourseCatalogPage from './pages/QuickLinks/CourseCatalogPage';
import StudentPortalPage from './pages/QuickLinks/StudentPortalPage';
import AlumniNetworkPage from './pages/QuickLinks/AlumniNetworkPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/academics" element={<AcademicsPage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/campus-life" element={<CampusLifePage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/academic-calendar" element={<AcademicCalendarPage />} />
          <Route path="/announcements" element={<AnnouncementsPage />} />
          <Route path="/course-catalog" element={<CourseCatalogPage />} />
          <Route path="/student-portal" element={<StudentPortalPage />} />
          <Route path="/alumni-network" element={<AlumniNetworkPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App