import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Calendar, 
  Brain, 
  BarChart3, 
  Heart,
  MessageSquare,
  Settings,
  FileText,
  Plus,
  Search,
  Filter,
  ArrowRight,
  Star,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const DemoPage = () => {
  const [activeTab, setActiveTab] = useState('patients');

  const demoData = {
    patients: [
      { id: 1, name: 'أحمد محمد', age: 28, status: 'نشط', progress: 75, type: 'مخدرات' },
      { id: 2, name: 'علي حسن', age: 32, status: 'مكتمل', progress: 100, type: 'كحول' },
      { id: 3, name: 'محمد أحمد', age: 25, status: 'نشط', progress: 45, type: 'مخدرات' },
      { id: 4, name: 'حسن علي', age: 35, status: 'معلق', progress: 30, type: 'كحول' }
    ],
    sessions: [
      { id: 1, patient: 'أحمد محمد', type: 'جلسة فردية', date: '2025-01-26', status: 'مكتملة' },
      { id: 2, patient: 'علي حسن', type: 'جلسة جماعية', date: '2025-01-26', status: 'قيد التنفيذ' },
      { id: 3, patient: 'محمد أحمد', type: 'جلسة AI', date: '2025-01-27', status: 'مجدولة' },
      { id: 4, patient: 'حسن علي', type: 'جلسة تقييم', date: '2025-01-27', status: 'مجدولة' }
    ],
    ai: [
      { id: 1, type: 'تحليل المشاعر', patient: 'أحمد محمد', result: 'إيجابي', confidence: 85 },
      { id: 2, type: 'توصية علاجية', patient: 'علي حسن', result: 'مقترح', confidence: 92 },
      { id: 3, type: 'توقع الانتكاس', patient: 'محمد أحمد', result: 'منخفض', confidence: 78 },
      { id: 4, type: 'تحليل التقدم', patient: 'حسن علي', result: 'متوسط', confidence: 65 }
    ]
  };

  const tabs = [
    { id: 'patients', name: 'المرضى', icon: Users },
    { id: 'sessions', name: 'الجلسات', icon: Calendar },
    { id: 'ai', name: 'الذكاء الاصطناعي', icon: Brain }
  ];

  const renderPatientsTable = () => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">قائمة المرضى</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            إضافة مريض
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">الاسم</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">العمر</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">النوع</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">الحالة</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">التقدم</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {demoData.patients.map((patient) => (
              <tr key={patient.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{patient.name}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{patient.age}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{patient.type}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    patient.status === 'نشط' ? 'bg-green-100 text-green-800' :
                    patient.status === 'مكتمل' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {patient.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${patient.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500">{patient.progress}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderSessionsTable = () => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">الجلسات العلاجية</h3>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
            <Plus className="h-4 w-4 mr-2" />
            جدولة جلسة
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">المريض</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">نوع الجلسة</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">التاريخ</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">الحالة</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {demoData.sessions.map((session) => (
              <tr key={session.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{session.patient}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{session.type}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{session.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    session.status === 'مكتملة' ? 'bg-green-100 text-green-800' :
                    session.status === 'قيد التنفيذ' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {session.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderAITable = () => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">تحليلات الذكاء الاصطناعي</h3>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center">
            <Brain className="h-4 w-4 mr-2" />
            تحليل جديد
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">نوع التحليل</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">المريض</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">النتيجة</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-500">الثقة</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {demoData.ai.map((analysis) => (
              <tr key={analysis.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{analysis.type}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{analysis.patient}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    analysis.result === 'إيجابي' ? 'bg-green-100 text-green-800' :
                    analysis.result === 'مقترح' ? 'bg-blue-100 text-blue-800' :
                    analysis.result === 'منخفض' ? 'bg-green-100 text-green-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {analysis.result}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                      <div 
                        className="bg-purple-600 h-2 rounded-full" 
                        style={{ width: `${analysis.confidence}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-500">{analysis.confidence}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              نسخة الديمو
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              جرب النظام بنفسك واكتشف كيف يمكن لشفاء كير تحسين إدارة مركزك العلاجي
            </p>
          </motion.div>
        </div>
      </section>

      {/* Demo Interface */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'patients' && renderPatientsTable()}
            {activeTab === 'sessions' && renderSessionsTable()}
            {activeTab === 'ai' && renderAITable()}
          </motion.div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              مميزات إضافية
            </h2>
            <p className="text-xl text-gray-600">
              هذه مجرد لمحة من مميزات النظام الكاملة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: BarChart3, title: 'تقارير مفصلة', desc: 'تقارير شاملة وإحصائيات متقدمة' },
              { icon: MessageSquare, title: 'شات داخلي', desc: 'تواصل آمن بين الموظفين' },
              { icon: Settings, title: 'إعدادات مرنة', desc: 'تخصيص النظام حسب احتياجاتك' },
              { icon: FileText, title: 'وثائق شاملة', desc: 'دليل مستخدم مفصل ووثائق تقنية' }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              جرب النظام الكامل
            </h2>
            <p className="text-xl mb-8 opacity-90">
              احصل على النسخة الكاملة من شفاء كير مع جميع المميزات
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors flex items-center mx-auto"
            >
              احصل على النسخة الكاملة
              <ArrowRight className="mr-2 h-5 w-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage; 