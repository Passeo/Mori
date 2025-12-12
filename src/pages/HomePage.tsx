import Navbar from '../component/navbar/Navbar'
import Hero from '../component/dashboard/Hero'
import BundleSpecial from '../component/dashboard/BundleSpecial'
import Collections from '../component/dashboard/Collections'
import Feature from '../component/dashboard/Feature'
import Review from '../component/dashboard/Review'
import CTA from '../component/dashboard/CTA'
import Available from '../component/dashboard/Available'
import ContactUs from '../component/dashboard/ContactUs'
import Footer from '../component/dashboard/Footer'
import { useNavigate } from 'react-router-dom'

import { motion } from 'motion/react'

function HomePage() {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            <Navbar onLoginClick={() => navigate('/login')} />
            <div className="h-[158px]" />
            <Hero />
            <BundleSpecial />
            <Collections />
            <Feature />
            <Review />
            <CTA />
            <Available />
            <ContactUs />
            <Footer />
        </motion.div>
    )
}

export default HomePage
