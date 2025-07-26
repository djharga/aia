import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">شفاء كير</h3>
                <p className="text-sm text-gray-400">نسخة ديمو</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              نظام متكامل لإدارة مراكز علاج الإدمان مع الذكاء الاصطناعي
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-400 hover:text-white transition-colors">
                  المميزات
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-gray-400 hover:text-white transition-colors">
                  الديمو
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">خدماتنا</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  تثبيت النظام
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  تدريب الموظفين
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  دعم فني متواصل
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  تحديثات مجانية
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">معلومات التواصل</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400 text-sm">info@shifa-care.com</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400 text-sm">+20 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400 text-sm">القاهرة، مصر</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} شفاء كير. جميع الحقوق محفوظة.
            </p>
            <div className="flex space-x-6 space-x-reverse text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                شروط الاستخدام
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                خريطة الموقع
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 