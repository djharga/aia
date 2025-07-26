import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Brain, 
  Users, 
  Calendar, 
  Shield, 
  BarChart3, 
  ArrowRight,
  Star,
  CheckCircle,
  Zap,
  Globe,
  Smartphone
} from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Brain,
      title: 'الذكاء الاصطناعي',
      description: 'تحليل ذكي للمرضى وتوصيات علاجية متقدمة',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'إدارة المرضى',
      description: 'نظام شامل لإدارة بيانات المرضى والمقيمين',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Calendar,
      title: 'الجلسات العلاجية',
      description: 'جدولة وإدارة الجلسات العلاجية بسهولة',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'الأمان والخصوصية',
      description: 'حماية كاملة للبيانات والخصوصية',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: BarChart3,
      title: 'التقارير والإحصائيات',
      description: 'تقارير مفصلة وإحصائيات شاملة',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Globe,
      title: 'متوافق مع جميع الأجهزة',
      description: 'يعمل على الهواتف والأجهزة اللوحية والحواسيب',
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'مريض تم علاجهم' },
    { number: '50+', label: 'جلسة يومياً' },
    { number: '95%', label: 'معدل النجاح' },
    { number: '24/7', label: 'دعم متواصل' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <Heart className="h-16 w-16 text-white mr-4" />
              <h1 className="text-5xl lg:text-7xl font-bold">شفاء كير</h1>
            </div>
            <p className="text-xl lg:text-2xl mb-8 opacity-90">
              نظام متكامل لإدارة مراكز علاج الإدمان مع الذكاء الاصطناعي
            </p>
            <p className="text-lg mb-12 opacity-80">
              نسخة ديمو دعائية تظهر مميزات النظام المتقدمة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                  جرب النسخة الديمو
                </motion.button>
              </Link>
              <Link to="/features">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  تعرف على المميزات
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              مميزات النظام
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              نظام شفاء كير يوفر حلول متكاملة لإدارة مراكز علاج الإدمان
              مع أحدث تقنيات الذكاء الاصطناعي
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              جرب النظام الآن
            </h2>
            <p className="text-xl mb-8 opacity-90">
              اكتشف كيف يمكن لشفاء كير تحسين إدارة مركزك العلاجي
            </p>
            <Link to="/demo">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors flex items-center mx-auto"
              >
                ابدأ التجربة المجانية
                <ArrowRight className="mr-2 h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 