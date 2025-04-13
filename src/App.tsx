import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt, 
  faEnvelope, 
  faPhone,
  faLightbulb,
  faLaptopCode,
  faCode
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Logo from './12345.jpeg';
import "animate.css";
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="logo">
            <img 
             src={Logo}
            alt="Company Logo" 
            className="logo"
            />
          </div>
          <ul className="nav-links">
            <li><a href="#services">خدمات</a></li>
            <li><a href="#about">درباره ما</a></li>
          </ul>
        </nav>
        <div className="hero animate__animated animate__fadeInUp">
  <h1 className="animate__animated animate__fadeIn animate__delay-1s">به وبسایت رسمی ایده پرداز فربود آران خوش آمدید!</h1>
  <p className="animate__animated animate__fadeIn animate__delay-2s">ما ارائه‌دهنده بهترین خدمات در حوزه کسب‌وکار شما هستیم.</p>
</div>
      </header>

      <main>
        {/* سکشن خدمات */}
        <section id="services" className="services">
          <h2>خدمات ما</h2>
          <div className="service-cards">
            <div className="card">
              <FontAwesomeIcon icon={faLightbulb} className="card-icon" />
              <h3>مشاوره</h3>
              <p>با بهره‌گیری از تجربه‌ی متخصصان ما، راهکارهای هوشمندانه و کاربردی برای توسعه‌ی کسب‌وکار خود دریافت کنید. از تحلیل بازار و استراتژی‌های فروش تا بهینه‌سازی فرآیندها، همراه شما هستیم تا به اهداف تجاری‌تان برسید.</p>
            </div>
            <div className="card">
              <FontAwesomeIcon icon={faLaptopCode} className="card-icon" />
              <h3>طراحی وب</h3>
              <p>طراحی وبسایت حرفه‌ای و جذاب
با طراحی وبسایت‌های مدرن، ریسپانسیو و سازگار با سئو، حضور آنلاین کسب‌وکارتان را متحول کنید. ما از آخرین فناوری‌ها و استانداردهای طراحی استفاده می‌کنیم تا کاربران شما تجربه‌ی بی‌نظیری داشته باشند.

</p>
            </div>
            <div className="card">
              <FontAwesomeIcon icon={faCode} className="card-icon" />
              <h3>توسعه نرم‌افزار</h3>
              <p>با راه‌حل‌های نرم‌افزاری سفارشی‌سازی‌شده، دقیقاً متناسب با نیازهای کسب‌وکارتان، عملکرد سازمانی خود را ارتقا دهید. از اپلیکیشن‌های موبایل تا سیستم‌های تحت وب، ما بهترین راهکارهای فناوری را برای شما پیاده‌سازی می‌کنیم.</p>
            </div>
          </div>
        </section>

        {/* سکشن درباره ما */}
        <section id="about" className="about">
          <h2>درباره ما</h2>
          <p>
          شرکت ایده پرداز فربود آران از سال ۱۳۹۶ با هدف پیشرفت در زمینه فناوری اطلاعات و الکترونیک تأسیس شده است. ما به‌عنوان یک شرکت نوآور و پیشرو، به طراحی و توسعه راه‌حل‌های الکترونیکی و نرم‌افزاری متنوع مشغول هستیم که به بهبود کیفیت زندگی و کارکرد صنایع مختلف کمک می‌کند.
تیم ما متشکل از متخصصان با تجربه و جوان است که با بهره‌گیری از آخرین فناوری‌های روز، پروژه‌های خلاقانه و کارآمد را در زمینه‌های مختلف طراحی و پیاده‌سازی می‌کنند. ما به کیفیت، نوآوری و رضایت مشتریان خود اهمیت ویژه‌ای می‌دهیم و همواره در تلاشیم تا بهترین خدمات ممکن را ارائه دهیم.
با ایده پرداز فربود آران، شما می‌توانید به آینده‌ای پر از امکانات و نوآوری‌های دیجیتال امیدوار باشید. بیایید با هم دنیای جدیدی از فناوری را بسازیم!
          </p>
        </section>

        
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-about">
          <div className="footer-links">
            <h3>ایده پرداز فربود آران</h3></div>
            <p>ما ارائه‌دهنده بهترین خدمات در حوزه فناوری اطلاعات و طراحی وب هستیم.</p>
            <div className="footer-social">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3>لینک‌های سریع</h3>
            <ul>
              <li><a href="#services">خدمات</a></li>
              <li><a href="#about">درباره ما</a></li>
              <li><a href="#contact">تماس با ما</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>اطلاعات تماس</h3>
            <div className="contact-item">

              <span> استان یزد, شهر یزد , خیابان شهید چمران ,کارخانه نوآوری درخشان
              </span>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
            </div>
            <div className="contact-item">

              <span>0 999 105 69 99</span>
              <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            </div>
            <div className="contact-item">

              <span>farbodaran@company.com</span>
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 تمامی حقوق محفوظ است. شرکت ما</p>
        </div>
      </footer>
    </div>
  );
};

export default App;