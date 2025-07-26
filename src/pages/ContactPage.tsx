import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Send,
  CheckCircle
} from 'lucide-react';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      value: 'info@shifa-care.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'الهاتف',
      value: '+20 123 456 7890',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      title: 'العنوان',
      value: 'القاهرة، مصر',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      value: '24/7 - دعم متواصل',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const services = [
    'تثبيت النظام',
    'تدريب الموظفين',
    'دعم فني متواصل',
    'تحديثات مجانية',
    'نسخ احتياطية',
    'أمان عالي'
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
              تواصل معنا
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
              نحن هنا لمساعدتك في تحويل مركزك العلاجي إلى تجربة رقمية متطورة
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg text-center"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center mx-auto mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-gray-600">{info.value}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                أرسل لنا رسالة
              </h2>
              <p className="text-xl text-gray-600">
                أخبرنا عن احتياجاتك وسنقوم بالتواصل معك في أقرب وقت ممكن
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="أدخل بريدك الإلكتروني"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      الهاتف
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="أدخل رقم هاتفك"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      الرسالة
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="أخبرنا عن احتياجاتك"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    إرسال الرسالة
                  </button>
                </form>
              </motion.div>

              {/* Services */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    خدماتنا
                  </h3>
                  <div className="space-y-4">
                    {services.map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center space-x-4 space-x-reverse"
                      >
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{service}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    لماذا تختار شفاء كير؟
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li>• نظام متكامل ومتطور</li>
                    <li>• دعم فني متواصل</li>
                    <li>• أمان عالي للبيانات</li>
                    <li>• سهولة الاستخدام</li>
                    <li>• تحديثات مجانية</li>
                    <li>• تدريب شامل للموظفين</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              الأسئلة الشائعة
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: 'كيف يمكنني البدء باستخدام النظام؟',
                answer: 'يمكنك البدء بطلب نسخة تجريبية مجانية، وسيقوم فريقنا بمساعدتك في التثبيت والإعداد.'
              },
              {
                question: 'هل النظام آمن لحفظ البيانات الطبية؟',
                answer: 'نعم، النظام يستخدم أحدث تقنيات الأمان والتشفير لحماية البيانات الطبية.'
              },
              {
                question: 'هل يمكن تخصيص النظام حسب احتياجاتنا؟',
                answer: 'نعم، النظام قابل للتخصيص بالكامل ليتناسب مع احتياجات كل مركز علاجي.'
              },
              {
                question: 'ما هي تكلفة النظام؟',
                answer: 'نقدم خطط أسعار مرنة تناسب جميع أحجام المراكز العلاجية.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
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
              ابدأ رحلتك مع شفاء كير
            </h2>
            <p className="text-xl mb-8 opacity-90">
              تواصل معنا الآن واحصل على نسخة تجريبية مجانية
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              احصل على نسخة تجريبية مجانية
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage; 