// App.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiSun, 
  FiMoon, 

  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiPhone,
  FiMail,
  FiMapPin,

} from 'react-icons/fi';
import { 
  FaDesktop, 
  FaMobileAlt, 
  FaChartLine, 
  FaShieldAlt,
  FaLanguage,

} from 'react-icons/fa';
import styles from './App.module.css';

// i18n setup
type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  en: {
    home: "Home",
    services: "Services",
    portfolio: "Portfolio",
    about: "About Us",
    contact: "Contact",
    heroTitle: "We Specialize in Digital Solutions",
    heroSubtitle: "We help businesses shine in the digital world",
    ctaButton: "Start Collaboration",
    servicesTitle: "Our Services",
    servicesSubtitle: "What We Offer",
    webDevelopment: "Web Development",
    webDesc: "Custom website design and development with the latest technologies",
    mobileDevelopment: "Mobile App Development",
    mobileDesc: "Building high-performance iOS and Android applications",
    dataAnalysis: "Data Analysis",
    dataDesc: "Business intelligence and data analysis for better decision making",
    cybersecurity: "Cybersecurity",
    cyberDesc: "Protecting your business against cyber threats",
    portfolioTitle: "Our Portfolio",
    portfolioSubtitle: "Some of Our Recent Projects",
    ecommerce: "E-commerce Website",
    ecommerceDesc: "Design and development of an e-commerce platform",
    financeApp: "Finance App",
    financeDesc: "Personal finance management application",
    cms: "Content Management System",
    cmsDesc: "Custom CMS platform for content publishers",
    clientsTitle: "Our Clients",
    clientsSubtitle: "Companies Who Trusted Us",
    aboutTitle: "About Us",
    aboutText1: "Navaran Company was established in 2011 with the aim of providing innovative digital solutions.",
    aboutText2: "Our mission is to deliver innovative and high-quality solutions that help our clients grow and succeed.",
    address: "Tehran, Azadi Street, No. 123",
    phone: "021-12345678",
    mobile: "09123456789",
    email: "info@navaran.com",
    quickLinks: "Quick Links",
    copyright: "© Navaran Company. All rights reserved.",
    darkMode: "Dark Mode",
    language: "Language"
  },
  fa: {
    home: "صفحه اصلی",
    services: "خدمات",
    portfolio: "نمونه کارها",
    about: "درباره ما",
    contact: "تماس با ما",
    heroTitle: "تخصص ما در ایجاد راهکارهای دیجیتال",
    heroSubtitle: "ما به کسب‌وکارها کمک می‌کنیم تا در دنیای دیجیتال بدرخشند",
    ctaButton: "شروع همکاری",
    servicesTitle: "خدمات ما",
    servicesSubtitle: "آنچه ارائه می‌دهیم",
    webDevelopment: "توسعه وب",
    webDesc: "طراحی و توسعه وبسایت‌های سفارشی با آخرین تکنولوژی‌ها",
    mobileDevelopment: "توسعه اپلیکیشن موبایل",
    mobileDesc: "ساخت اپلیکیشن‌های iOS و Android با عملکرد عالی",
    dataAnalysis: "تحلیل داده",
    dataDesc: "راهکارهای هوش تجاری و تحلیل داده برای تصمیم‌گیری بهتر",
    cybersecurity: "امنیت سایبری",
    cyberDesc: "محافظت از کسب‌وکار شما در برابر تهدیدات سایبری",
    portfolioTitle: "نمونه کارهای ما",
    portfolioSubtitle: "برخی از پروژه‌های اخیر",
    ecommerce: "وبسایت فروشگاهی",
    ecommerceDesc: "طراحی و توسعه یک پلتفرم تجارت الکترونیک",
    financeApp: "اپلیکیشن مالی",
    financeDesc: "اپلیکیشن مدیریت مالی شخصی",
    cms: "سیستم مدیریت محتوا",
    cmsDesc: "پلتفرم سفارشی CMS برای ناشران محتوا",
    clientsTitle: "همکاران ما",
    clientsSubtitle: "شرکت‌هایی که به ما اعتماد کرده‌اند",
    aboutTitle: "درباره ما",
    aboutText1: "شرکت نوآوران در سال ۱۳۹۰ با هدف ارائه راهکارهای دیجیتال خلاقانه تأسیس شد.",
    aboutText2: "مأموریت ما ارائه راهکارهای نوآورانه و با کیفیت است که به رشد و موفقیت مشتریانمان کمک کند.",
    address: "تهران، خیابان آزادی، پلاک ۱۲۳",
    phone: "۰۲۱-۱۲۳۴۵۶۷۸",
    mobile: "۰۹۱۲۳۴۵۶۷۸۹",
    email: "info@navaran.com",
    quickLinks: "لینک‌های سریع",
    copyright: "© شرکت نوآوران. تمام حقوق محفوظ است.",
    darkMode: "حالت تاریک",
    language: "زبان"
  }
};

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<'en' | 'fa'>('fa');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const t = (key: string) => translations[language][key] || key;

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fa' ? 'en' : 'fa');
  };

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const serviceItems = [
    {
      icon: <FaDesktop className={styles.serviceIconInner} />,
      title: t('webDevelopment'),
      desc: t('webDesc'),
      color: '#FFD700'
    },
    {
      icon: <FaMobileAlt className={styles.serviceIconInner} />,
      title: t('mobileDevelopment'),
      desc: t('mobileDesc'),
      color: '#1E90FF'
    },
    {
      icon: <FaChartLine className={styles.serviceIconInner} />,
      title: t('dataAnalysis'),
      desc: t('dataDesc'),
      color: '#FFD700'
    },
    {
      icon: <FaShieldAlt className={styles.serviceIconInner} />,
      title: t('cybersecurity'),
      desc: t('cyberDesc'),
      color: '#1E90FF'
    }
  ];

  const portfolioItems = [
    {
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: t('ecommerce'),
      desc: t('ecommerceDesc')
    },
    {
      img: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: t('financeApp'),
      desc: t('financeDesc')
    },
    {
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      title: t('cms'),
      desc: t('cmsDesc')
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <div className={`${styles.app} ${darkMode ? styles.dark : ''}`}>
      {/* Navigation */}
      <nav className={styles.navbar}>
        <motion.div 
          className={styles.logo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {language === 'fa' ? 'شرکت نوآوران' : 'Navaran Co.'}
        </motion.div>

        <div className={styles.navControls}>
          <button onClick={toggleDarkMode} className={styles.themeToggle}>
            {darkMode ? <FiSun /> : <FiMoon />}
            <span>{t('darkMode')}</span>
          </button>

          <button onClick={toggleLanguage} className={styles.languageToggle}>
            <FaLanguage />
            <span>{t('language')}</span>
          </button>

          <button 
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        <AnimatePresence>
          {(isMenuOpen || window.innerWidth > 768) && (
            <motion.ul 
              className={styles.navLinks}
              initial={{ opacity: 0, x: language === 'fa' ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: language === 'fa' ? 100 : -100 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <li><a href="#home">{t('home')}</a></li>
              <li><a href="#services">{t('services')}</a></li>
              <li><a href="#portfolio">{t('portfolio')}</a></li>
              <li><a href="#about">{t('about')}</a></li>
              <li><a href="#contact">{t('contact')}</a></li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className={styles.hero}>
        <motion.div 
          className={styles.heroContent}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants}>{t('heroTitle')}</motion.h1>
          <motion.p variants={itemVariants}>{t('heroSubtitle')}</motion.p>
          <motion.button 
            className={styles.ctaButton}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('ctaButton')}
          </motion.button>
        </motion.div>
        
        <motion.div 
          className={styles.heroImage}
          initial={{ opacity: 0, x: language === 'fa' ? 100 : -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        ></motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className={styles.services}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className={styles.sectionTitle}>{t('servicesTitle')}</h2>
          <p className={styles.sectionSubtitle}>{t('servicesSubtitle')}</p>
        </motion.div>
        
        <motion.div 
          className={styles.servicesGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {serviceItems.map((service, index) => (
            <motion.div 
              key={index}
              className={styles.serviceCard}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div 
                className={styles.serviceIcon}
                style={{backgroundColor: service.color}}
              >
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className={styles.portfolio}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className={styles.sectionTitle}>{t('portfolioTitle')}</h2>
          <p className={styles.sectionSubtitle}>{t('portfolioSubtitle')}</p>
        </motion.div>
        
        <motion.div 
          className={styles.portfolioGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {portfolioItems.map((item, index) => (
            <motion.div 
              key={index}
              className={styles.portfolioItem}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <img src={item.img} alt={item.title} />
              <div className={styles.portfolioOverlay}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Clients Section */}
      <section className={styles.clients}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className={styles.sectionTitle}>{t('clientsTitle')}</h2>
          <p className={styles.sectionSubtitle}>{t('clientsSubtitle')}</p>
        </motion.div>
        
        <motion.div 
          className={styles.clientLogos}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {[1, 2, 3, 4].map((item) => (
            <motion.img 
              key={item}
              src={`https://via.placeholder.com/150x80/${darkMode ? '333333' : 'FFFFFF'}/1E90FF?text=Client+${item}`} 
              alt={`Client ${item}`}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            />
          ))}
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <motion.div 
          className={styles.aboutImage}
          initial={{ opacity: 0, x: language === 'fa' ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        ></motion.div>
        
        <motion.div 
          className={styles.aboutContent}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className={styles.sectionTitle}>{t('aboutTitle')}</h2>
          <p>{t('aboutText1')}</p>
          <p>{t('aboutText2')}</p>
          
          <motion.ul 
            className={styles.aboutStats}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.li variants={itemVariants}>
              <span>100+</span>
              <p>{language === 'fa' ? 'پروژه تکمیل شده' : 'Completed Projects'}</p>
            </motion.li>
            <motion.li variants={itemVariants}>
              <span>50+</span>
              <p>{language === 'fa' ? 'مشتری راضی' : 'Happy Clients'}</p>
            </motion.li>
            <motion.li variants={itemVariants}>
              <span>30+</span>
              <p>{language === 'fa' ? 'متخصص' : 'Experts'}</p>
            </motion.li>
          </motion.ul>
        </motion.div>
      </section>

      {/* Footer */}
      <footer id="contact" className={styles.footer}>
        <motion.div 
          className={styles.footerContent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className={styles.footerSection} variants={itemVariants}>
            <h3>{language === 'fa' ? 'شرکت نوآوران' : 'Navaran Company'}</h3>
            <p>{language === 'fa' ? 'ارائه دهنده راهکارهای دیجیتال و خدمات فناوری اطلاعات' : 'Provider of digital solutions and IT services'}</p>
            <div className={styles.socialLinks}>
              <a href="#"><FiLinkedin /></a>
              <a href="#"><FiTwitter /></a>
              <a href="#"><FiInstagram /></a>
            </div>
          </motion.div>
          
          <motion.div className={styles.footerSection} variants={itemVariants}>
            <h3>{t('contact')}</h3>
            <ul className={styles.contactInfo}>
              <li><FiMapPin /> {t('address')}</li>
              <li><FiPhone /> {t('phone')}</li>
              <li><FiPhone /> {t('mobile')}</li>
              <li><FiMail /> {t('email')}</li>
            </ul>
          </motion.div>
          
          <motion.div className={styles.footerSection} variants={itemVariants}>
            <h3>{t('quickLinks')}</h3>
            <ul className={styles.quickLinks}>
              <li><a href="#home">{t('home')}</a></li>
              <li><a href="#services">{t('services')}</a></li>
              <li><a href="#portfolio">{t('portfolio')}</a></li>
              <li><a href="#about">{t('about')}</a></li>
              <li><a href="#contact">{t('contact')}</a></li>
            </ul>
          </motion.div>
        </motion.div>
        
        <div className={styles.footerBottom}>
          <p>{t('copyright')}</p>
        </div>
      </footer>
    </div>
  );
};

export default App;