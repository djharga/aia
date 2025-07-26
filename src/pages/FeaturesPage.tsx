import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Users, 
  Calendar, 
  Shield, 
  BarChart3, 
  Heart,
  MessageSquare,
  Settings,
  FileText,
  Smartphone,
  Globe,
  Zap,
  CheckCircle,
  Star
} from 'lucide-react';

const FeaturesPage = () => {
  const features = [
    {
      category: 'الذكاء الاصطناعي',
      items: [
        {
          icon: Brain,
          title: 'تحليل ذكي للمرضى',
          description: 'تحليل متقدم لحالة المرضى وتوصيات علاجية مخصصة',
          color: 'from-purple-500 to-pink-500'
        },
        {
          icon: Heart,
          title: 'توصيات علاجية',
          description: 'خطط علاجية ذكية بناءً على تحليل البيانات',
          color: 'from-red-500 to-pink-500'
        },
        {
          icon: MessageSquare,
          title: 'مساعد ذكي',
          description: 'مساعد ذكي للموظفين باللغة العربية',
          color: 'from-blue-500 to-cyan-500'
        }
      ]
    },
    {
      category: 'إدارة المرضى',
      items: [
        {
          icon: Users,
          title: 'قاعدة بيانات شاملة',
          description: 'إدارة كاملة لبيانات المرضى والمقيمين',
          color: 'from-green-500 to-emerald-500'
        },
        {
          icon: FileText,
          title: 'السجلات الطبية',
          description: 'سجلات طبية مفصلة وتاريخ العلاج',
          color: 'from-indigo-500 to-purple-500'
        },
        {
          icon: Shield,
          title: 'الخصوصية والأمان',
          description: 'حماية كاملة للبيانات الطبية',
          color: 'from-orange-500 to-red-500'
        }
      ]
    },
    {
      category: 'الجلسات العلاجية',
      items: [
        {
          icon: Calendar,
          title: 'جدولة الجلسات',
          description: 'جدولة وإدارة الجلسات العلاجية بسهولة',
          color: 'from-teal-500 to-blue-500'
        },
        {
          icon: BarChart3,
          title: 'متابعة التقدم',
          description: 'متابعة تقدم العلاج والإنجازات',
          color: 'from-yellow-500 to-orange-500'
        },
        {
          icon: Settings,
          title: 'إعدادات مخصصة',
          description: 'إعدادات مرنة تناسب كل مركز علاجي',
          color: 'from-gray-500 to-slate-500'
        }
      ]
    }
  ];

  const benefits = [
    'تحسين كفاءة العمل بنسبة 80%',
    'تقليل الأخطاء البشرية بنسبة 90%',
    'توفير الوقت والجهد للموظفين',
    'تحسين جودة الرعاية الصحية',
    'تقارير مفصلة وشفافة',
    'دعم متواصل على مدار الساعة'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              مميزات شفاء كير
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
              اكتشف كيف يمكن لشفاء كير تحويل إدارة مركزك العلاجي
              إلى تجربة سهلة ومتطورة
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {features.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="mb-20"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    >
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center mb-6`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              فوائد النظام
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              شفاء كير يحقق نتائج ملموسة لمراكز علاج الإدمان
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4 space-x-reverse"
              >
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              التقنيات المستخدمة
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              أحدث التقنيات لضمان الأداء المثالي والأمان العالي
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Globe, title: 'React 18', desc: 'واجهة مستخدم متطورة' },
              { icon: Zap, title: 'TypeScript', desc: 'كود آمن ومحسن' },
              { icon: Smartphone, title: 'Responsive', desc: 'متوافق مع جميع الأجهزة' },
              { icon: Shield, title: 'Supabase', desc: 'قاعدة بيانات آمنة' }
            ].map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
                  <p className="text-gray-300">{tech.desc}</p>
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
              اكتشف بنفسك كيف يمكن لشفاء كير تحسين إدارة مركزك العلاجي
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              ابدأ التجربة المجانية
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage; 