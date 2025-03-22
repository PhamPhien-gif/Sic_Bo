import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      'nav.home': 'Home',
      'nav.aboutUs': 'About Us',
      'nav.project': 'Project',
      'nav.timeline': 'Timeline',
      'nav.contactUs': 'Contact us',

      // Hero Section
      'hero.title1': 'Great',
      'hero.title2': 'Product',
      'hero.title3': 'is',
      'hero.title4': 'built by great',
      'hero.title5': 'teams',
      'hero.description': 'We help build and manage a team of world-class developers to bring your vision to life',

      // Footer
      'footer.companyDesc': 'Building world-class development teams for your digital success.',
      'footer.quickLinks': 'Quick Links',
      'footer.services': 'Services',
      'footer.webDev': 'Web Development',
      'footer.mobileDev': 'Mobile Development',
      'footer.cloudSolutions': 'Cloud Solutions',
      'footer.devOps': 'DevOps',
      'footer.contactUs': 'Contact Us',
      'footer.email': 'Email: contact@pmit.com',
      'footer.phone': 'Phone: +1 (555) 123-4567',
      'footer.address': 'Address: 123 Tech Street, Digital City, 12345',
      'footer.copyright': '© 2025 PMIT. All rights reserved.',
    },
  },
  vi: {
    translation: {
      // Navigation
      'nav.home': 'Trang chủ',
      'nav.aboutUs': 'Về chúng tôi',
      'nav.project': 'Dự án',
      'nav.timeline': 'Tiến độ',
      'nav.contactUs': 'Liên hệ',

      // Hero Section
      'hero.title1': 'Sản phẩm',
      'hero.title2': 'Tuyệt vời',
      'hero.title3': 'được',
      'hero.title4': 'xây dựng bởi',
      'hero.title5': 'đội ngũ xuất sắc',
      'hero.description': 'Chúng tôi giúp xây dựng và quản lý đội ngũ phát triển đẳng cấp thế giới để hiện thực hóa tầm nhìn của bạn',

      // Footer
      'footer.companyDesc': 'Xây dựng đội ngũ phát triển đẳng cấp thế giới cho sự thành công kỹ thuật số của bạn.',
      'footer.quickLinks': 'Liên kết nhanh',
      'footer.services': 'Dịch vụ',
      'footer.webDev': 'Phát triển Web',
      'footer.mobileDev': 'Phát triển Mobile',
      'footer.cloudSolutions': 'Giải pháp Đám mây',
      'footer.devOps': 'DevOps',
      'footer.contactUs': 'Liên hệ',
      'footer.email': 'Email: contact@pmit.com',
      'footer.phone': 'Điện thoại: +1 (555) 123-4567',
      'footer.address': 'Địa chỉ: 123 Tech Street, Digital City, 12345',
      'footer.copyright': '© 2025 PMIT. Đã đăng ký bản quyền.',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;