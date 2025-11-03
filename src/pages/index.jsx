import Layout from "./Layout.jsx";

import Home from "./Home";

import BookDemo from "./BookDemo";

import Services from "./Services";

import HumanAssist from "./HumanAssist";

import HumanDesign from "./HumanDesign";

import HumanCulture from "./HumanCulture";

import HumanInsight from "./HumanInsight";

import PrivacyPolicy from "./PrivacyPolicy";

import TermsOfService from "./TermsOfService";

import Blog from "./Blog";

import BlogPost from "./BlogPost";

import BlogAdmin from "./BlogAdmin";

import BlogEditor from "./BlogEditor";

import AdminDashboard from "./AdminDashboard";

import HumanDesigncopy from "./HumanDesigncopy";

import BuilderPage from "@/components/BuilderPage";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    BookDemo: BookDemo,
    
    Services: Services,
    
    HumanAssist: HumanAssist,
    
    HumanDesign: HumanDesign,
    
    HumanCulture: HumanCulture,
    
    HumanInsight: HumanInsight,
    
    PrivacyPolicy: PrivacyPolicy,
    
    TermsOfService: TermsOfService,
    
    Blog: Blog,
    
    BlogPost: BlogPost,
    
    BlogAdmin: BlogAdmin,
    
    BlogEditor: BlogEditor,
    
    AdminDashboard: AdminDashboard,
    
    HumanDesigncopy: HumanDesigncopy,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/BookDemo" element={<BookDemo />} />
                
                <Route path="/Services" element={<Services />} />
                
                <Route path="/HumanAssist" element={<HumanAssist />} />
                
                <Route path="/HumanDesign" element={<HumanDesign />} />
                
                <Route path="/HumanCulture" element={<HumanCulture />} />
                
                <Route path="/HumanInsight" element={<HumanInsight />} />
                
                <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
                
                <Route path="/TermsOfService" element={<TermsOfService />} />
                
                <Route path="/Blog" element={<Blog />} />
                
                <Route path="/BlogPost" element={<BlogPost />} />
                
                <Route path="/BlogAdmin" element={<BlogAdmin />} />
                
                <Route path="/BlogEditor" element={<BlogEditor />} />
                
                <Route path="/AdminDashboard" element={<AdminDashboard />} />
                
                <Route path="/HumanDesigncopy" element={<HumanDesigncopy />} />

                {/* Builder.io catch-all route - add any Builder.io created pages here */}
                <Route path="/builder/*" element={<BuilderPage />} />

            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}