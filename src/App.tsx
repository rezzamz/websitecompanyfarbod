// App.tsx
import React, { useState } from 'react';
import './App.css';
import barakatLogo from './assest/image/logob.png';
import adminpanel from './assest/image/adminp.png';
import mobileapp from './assest/image/mobileap.png';
import websitedesign from './assest/image/web d.png';
import Logof from './assest/image/logo123.png';
import abus from './assest/image/about.png';
type Language = 'fa' | 'en';
type Theme = 'light' | 'dark';

interface Service {
  title: { fa: string; en: string };
  description: { fa: string; en: string };
  icon: string;
}

interface PortfolioItem {
  title: { fa: string; en: string };
  category: { fa: string; en: string };
  image: string;
}

interface Partner {
  name: string;
  logo: string;
}

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('fa');
  const [theme, setTheme] = useState<Theme>('light');

  const toggleLanguage = () => {
    setLanguage(language === 'fa' ? 'en' : 'fa');
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const services: Service[] = [
    {
      title: { fa: 'طراحی وب', en: 'Web Design' },
      description: {
        fa: 'طراحی وبسایت های مدرن و واکنش گرا برای کسب و کار شما',
        en: 'Modern and responsive website design for your business'
      },
      icon: '💻'
    },
    {
      title: { fa: 'توسعه نرم افزار', en: 'Software Development' },
      description: {
        fa: 'توسعه نرم افزارهای سفارشی متناسب با نیازهای شما',
        en: 'Custom software development tailored to your needs'
      },
      icon: '📱'
    },
    {
      title: { fa: 'مشاوره فناوری', en: 'Tech Consulting' },
      description: {
        fa: 'مشاوره تخصصی در زمینه فناوری اطلاعات و راهکارهای دیجیتال',
        en: 'Expert consulting in IT and digital solutions'
      },
      icon: '🔍'
    }
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      title: { fa: 'طراحی وبسایت', en: 'website designt' },
      category: { fa: 'وبسایت', en: 'Website' },
      image: websitedesign
    },
    {
      title: { fa: 'اپلیکیشن موبایل', en: 'Mobile App' },
      category: { fa: 'موبایل', en: 'Mobile' },
      image: mobileapp
    },
    
    {
      title: { fa: 'سیستم مدیریت', en: 'Management System' },
      category: { fa: 'نرم افزار', en: 'Software' },
      image: adminpanel
    }

    
  ];

  const partners: Partner[] = [
    { name: ' بنیاد برکت', logo: barakatLogo },

  ];

  const textDirection = language === 'fa' ? 'rtl' : 'ltr';
  const textAlign = language === 'fa' ? 'right' : 'left';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

// تابع toggleMenu
const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};

  return (
    <div className={`app ${theme}`} dir={textDirection}>
      {/* Header */}
      <header className="header">
    <div className="container">
      <div className="logo">
        <span className="blue">{language === 'fa' ? 'فربود' : 'Farbod'}</span>
        <span className="yellow">{language === 'fa' ? 'آران' : 'Aran'}</span>
      </div>
      
      {/* دکمه همبرگر برای موبایل */}
      <div className="controls">
        <button onClick={toggleLanguage} className="language-toggle">
          {language === 'fa' ? 'EN' : 'FA'}
        </button>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <button 
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="منو"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* منوی اصلی - برای دسکتاپ */}
      <nav className="desktop-nav">
        <ul>
          <li><a href="#hero">{language === 'fa' ? 'صفحه اصلی' : 'Home'}</a></li>
          <li><a href="#services">{language === 'fa' ? 'خدمات' : 'Services'}</a></li>
          <li><a href="#portfolio">{language === 'fa' ? 'نمونه کارها' : 'Portfolio'}</a></li>
          <li><a href="#partners">{language === 'fa' ? 'همکاران' : 'Partners'}</a></li>
          <li><a href="#about">{language === 'fa' ? 'درباره ما' : 'About Us'}</a></li>
          <li><a href="#contact">{language === 'fa' ? 'تماس' : 'Contact'}</a></li>
        </ul>
      </nav>
      
      {/* منوی موبایل */}
      <div className={`mobile-menu-backdrop ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
      <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#hero" onClick={toggleMenu}>{language === 'fa' ? 'صفحه اصلی' : 'Home'}</a></li>
          <li><a href="#services" onClick={toggleMenu}>{language === 'fa' ? 'خدمات' : 'Services'}</a></li>
          <li><a href="#portfolio" onClick={toggleMenu}>{language === 'fa' ? 'نمونه کارها' : 'Portfolio'}</a></li>
          <li><a href="#partners" onClick={toggleMenu}>{language === 'fa' ? 'همکاران' : 'Partners'}</a></li>
          <li><a href="#about" onClick={toggleMenu}>{language === 'fa' ? 'درباره ما' : 'About Us'}</a></li>
          <li><a href="#contact" onClick={toggleMenu}>{language === 'fa' ? 'تماس' : 'Contact'}</a></li>
        </ul>
      </nav>
    </div>
  </header>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title" >
              {language === 'fa' ? 'راهکارهای دیجیتال برای کسب و کار شما' : 'Digital Solutions for Your Business'}
            </h1>
            <p className="hero-subtitle" style={{ textAlign }}>
              {language === 'fa' ? 'ما به رشد کسب و کار شما با فناوری های نوین کمک می کنیم' : 'We help grow your business with modern technologies'}
            </p>
            <button className="cta-button">
            <a href="#services">{language === 'fa' ? 'خدمات' : 'Services'}</a>
             
            </button>
          </div>
          <div className="hero-image">
            <img src={Logof}  alt="Hero" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title" style={{textAlign:'center' }}>
            {language === 'fa' ? 'خدمات ما' : 'Our Services'}
          </h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title" style={{ textAlign }}>
                  {service.title[language]}
                </h3>
                <p className="service-description" style={{ textAlign }}>
                  {service.description[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <h2 className="section-title" style={{ textAlign:'center'}}>
            {language === 'fa' ? 'نمونه کارهای ما' : 'Our Portfolio'}
          </h2>
          <div className="portfolio-grid">
            {portfolioItems.map((item, index) => (
              <div key={index} className="portfolio-item">
                <img src={item.image} alt={item.title[language]} />
                <div className="portfolio-overlay">
                  <h3 style={{ textAlign }}>{item.title[language]}</h3>
                  <p style={{ textAlign }}>{item.category[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="partners">
        <div className="container">
          <h2 className="section-title" style={{ textAlign:'center' }}>
            {language === 'fa' ? 'همکاران ما' : 'Our Partners'}
          </h2>
          <div className="partners-grid">
            {partners.map((partner, index) => (
              <div key={index} className="partner-logo">
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-image">
            <img src={abus} alt="About Us" />
          </div>
          <div className="about-content">
            <h2 className="section-title" style={{ textAlign:'center' }}>
              {language === 'fa' ? 'درباره ما' : 'About Us'}
            </h2>
            <p style={{ textAlign }}>
  {language === 'fa' ? 
    // Persian Text
    'معرفی برند: ایده پرداز فربود آران\n\nشرکت ایده پرداز فربود آران از سال ۱۳۹۶ با هدف پیشرفت در زمینه فناوری اطلاعات و الکترونیک تأسیس شده است. ما به‌عنوان یک شرکت نوآور و پیشرو، به طراحی و توسعه راه‌حل‌های الکترونیکی و نرم‌افزاری متنوع مشغول هستیم که به بهبود کیفیت زندگی و کارکرد صنایع مختلف کمک می‌کند.\n\nتیم ما متشکل از متخصصان با تجربه و جوان است که با بهره‌گیری از آخرین فناوری‌های روز، پروژه‌های خلاقانه و کارآمد را در زمینه‌های مختلف طراحی و پیاده‌سازی می‌کنند. ما به کیفیت، نوآوری و رضایت مشتریان خود اهمیت ویژه‌ای می‌دهیم و همواره در تلاشیم تا بهترین خدمات ممکن را ارائه دهیم.\n\nبا ایده پرداز فربود آران، شما می‌توانید به آینده‌ای پر از امکانات و نوآوری‌های دیجیتال امیدوار باشید. بیایید با هم دنیای جدیدی از فناوری را بسازیم!' : 
    
    // English Text
    'Brand Introduction: Ideh Pardaz Farbod Aran\n\nIdeh Pardaz Farbod Aran Company was established in 2017 with the goal of advancing in the fields of information technology and electronics. As an innovative and pioneering company, we specialize in designing and developing diverse electronic and software solutions that enhance the quality of life and improve operations across various industries.\n\nOur team consists of experienced and young professionals who leverage the latest technologies to design and implement creative and efficient projects in different domains. We place great emphasis on quality, innovation, and customer satisfaction, always striving to deliver the best possible services.\n\nWith Ideh Pardaz Farbod Aran, you can look forward to a future full of digital possibilities and innovations. Let’s build a new world of technology together!'}
</p>
            <div className="stats">
              <div className="stat">
                <h3>10+</h3>
                <p>{language === 'fa' ? 'سال تجربه' : 'Years Experience'}</p>
              </div>
              <div className="stat">
                <h3>20+</h3>
                <p>{language === 'fa' ? 'پروژه موفق' : 'Successful Projects'}</p>
              </div>
              <div className="stat">
                <h3>40+</h3>
                <p>{language === 'fa' ? 'مشتری راضی' : 'Happy Clients'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>{language === 'fa' ? 'تماس با ما' : 'Contact Us'}</h3>
              <p><span>📧</span> farbodaran@company.com</p>
              <p><span>📞</span> {language === 'fa' ? '۰۹۹۹۱۰۵۶۹۶۶' : '09991056966'}</p>
              <p><span>📍</span> {language === 'fa' ? 'یزد ,خیابان شهید چمران ,کارخانه نوآوری درخشان' : 'yazd, Chamran St,Noavari Darkhshan co.'}</p>
            </div>
            <div className="footer-section">
              <h3>{language === 'fa' ? 'لینک های مفید' : 'Quick Links'}</h3>
              <ul>
                <li><a href="#hero">{language === 'fa' ? 'صفحه اصلی' : 'Home'}</a></li>
                <li><a href="#services">{language === 'fa' ? 'خدمات' : 'Services'}</a></li>
                <li><a href="#portfolio">{language === 'fa' ? 'نمونه کارها' : 'Portfolio'}</a></li>
                <li><a href="#about">{language === 'fa' ? 'درباره ما' : 'About Us'}</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>{language === 'fa' ? 'شبکه های اجتماعی' : 'Social Media'}</h3>
              <div className="social-links">
                <a href="#linkedin">LinkedIn</a>
                <a href="#twitter">Twitter</a>
                <a href="#instagram">Instagram</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; {new Date().getFullYear()} {language === 'fa' ? 'تمامی حقوق محفوظ است' : 'All Rights Reserved'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;