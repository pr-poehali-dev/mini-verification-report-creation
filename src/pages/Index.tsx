import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  // Состояние для данных отчета
  const [reportData, setReportData] = useState({
    // Шапка
    checkDate: new Date().toLocaleDateString('ru-RU'),
    reportNumber: 'В/П 06842-25',
    clientInfo: '',
    
    // Общая информация
    fullName: '',
    phones: '',
    emails: '',
    documents: '',
    addresses: '',
    vehicles: '',
    socialAccounts: '',
    additionalVkAccount: `Краткий цифровой анализ найденного дополнительного профиля ВК и сравнение его с основным профилем ВК: Основание для цифрового анализа найденного профиля ВК – В ходе поиска дополнительных профилей и аккаунтов в социальных сетях второй половины заказчика, был найден аккаунт ВК, в котором выявлены совпадения в цифровых параметрах учетных записей и устройств проверяемого лица.

Сведения о проверяемом профиле ВК:
Ссылка на профиль: https://vk.com/id362****24;
Дата регистрации профиля: 23.01.2025;

В ходе анализа профиля зафиксированы следующие совпадающие параметры:
- Совпадения синхронизированного почтового адреса;
- Совпадения цифровых параметров устройства при входе в профиль;
- Идентичность MAC-адреса DNS-адреса IP-адреса.

Результата цифрового анализа профиля id362****24 и сравнения с основным профилем ВК:
- Активность: фиксируется с периодичностью несколько раз в месяц;
- Друзья: 18 пользователей, из которых 2 совпадают с друзьями основного профиля;
- Сообщества: 24 сообщества с разными тематиками, из них 4 совпадают с сообществами основного профиля;
- Последняя зафиксированная активность 21.08.2025 года.

Вывод: Выявленные совпадения (почтовый адрес, цифровые характеристики устройств, MAC-адрес, DNS-адрес IP-адрес), а также пересечения в списках друзей и сообществ с основным профилем, позволяют предположить принадлежность данного профиля одному и тому же пользователю.

Полный цифровой анализ профилей ВК с расширенными параметрами предоставляется в отчете «Полная проверка на верность», который включает в себя:
- ссылки на дополнительные найденные профили ВКонтакте;
- выгрузка списка друзей, в том числе скрытых;
- выгрузка перечня сообществ;
- детализированный отчет о цифровой активности профиля;
- сравнительный анализ активности профиля и его друзей;
- синхронизацию временных меток совместной активности пользователя и его друзей.`,
    
    // Дополнительная информация ВК
    vkHistory: '',
    hiddenFriends: 'В основном аккаунте ВК найдены скрытые друзья. К сожалению мини-проверка не предусматривает выгрузку скрытых друзей. Для выгрузки всех друзей профиля, в том числе и скрытых закажите услугу «Полная проверка на верность» и получите полный подробный отчет о всех друзьях вашей второй половины.',
    vkActivity: 'К сожалению, мини-проверка не предусматривает выгрузку информации об активности основного профиля ВК с другими профилями. Для полной выгрузки всей цифровой активности профиля ВК вашей второй половины с другими пользователями ВК, в том числе и скрытыми друзьями, закажите услугу «Полная проверка на верность» и получите полный подробный отчет и узнайте, кому больше всего уделяет время в общении ваша половина ВКонтакте.',
    
    // Telegram анализ
    telegramAnalysis: 'Закажите услугу «Полная проверка на верность» и получите детальный отчёт о цифровой активности вашей второй половины в мессенджере Telegram.\n\nВ отчёте будет представлена информация о скрытых интересах, включая:\n- на каких каналах и в каких группах пользователь проводит наибольшее количество времени;\n- подробные сведения о взаимодействии с другими пользователями, с указанием их Username;\n- расширенный анализ цифровой активности в Telegram.',
    
    // Сайты знакомств
    datingAnalysis: `В ходе проведённого поиска была зафиксирована удалённая анкета пользователя на сайте знакомств и флирта Mamba.ru, зарегистрированная 12.04.2023 года по идентичному номеру телефона проверяемого.

Ссылка на удалённую анкету в архив сайта с загруженными 2 фотографиями:
http://www.mamba.ru/anketa.phtml?oid=826****

Дата удаления анкеты в архив: 09.06.2025 года.

Имеются технические ограничения проверки данного аккаунта, а именно: так как анкета на текущий момент удалена (переведена в архив), идентифицировать дополнительные совпадения и цифровые параметры (по загруженным фотографиям, синхронизированным почтовым адресам, характеристикам устройства при входе, MAC-адресу, DNS- и IP-адресам) стандартным упрощенным способом, предусмотренным при проведении мини-проверки на верность не представилось возможным.

Однако, с учётом того, что анкета удалена только в архив сайта и отсутствует подтверждение на полное удаления аккаунта с сайта Mamba.ru, которое приходит как правило на электронную почту, представляется техническая возможность проведение более детального цифрового анализа аккаунта с использованием специализированных сервисов и инструментов. Такой анализ позволит установить точную причастность указанного аккаунта к проверяемому партнёру.

Рекомендации Верность.Про:
Для более углублённого исследования найденного удалённого профиля на сайте Mamba.ru закажите отчёт по услуге «Полная проверка на верность», который включает в себя:
- просмотр анкет на сайтах знакомств с опубликованными фотографиями пользователей, в том числе архивных анкет;
- полный цифровой отчёт о найденных профилях с детальным анализом возможной причастности проверяемого лица ко всем обнаруженным страницам и учетным записям на сайтах и сервисах знакомств и флирта.`,
    
    // Записи в телефонной книге
    phoneBookRecords: '',
    
    // Покупки
    purchases: 'Закажи полную проверку на верность и получите подробный отчет с информацией о покупках вашей второй половина за последние пол года в розничных магазинах и интернет-ресурсах.',
    
    // Промокод
    promoCode: 'PROMO-03136-25',
    promoDiscount: '50%'
  });

  const [activeTab, setActiveTab] = useState('report');

  // Функция обновления данных
  const updateField = (field: string, value: string) => {
    setReportData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Экспорт в PDF
  const exportToPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Заголовок страницы */}
      <div className="text-center py-6 no-print">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 via-pink-600 to-purple-700 bg-clip-text text-transparent">
          Результат проведённой мини-проверки на верность
        </h1>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="container mx-auto px-4 py-6 max-w-6xl">
          
          {/* Шапка */}
          <div className="mb-8 bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex items-center gap-4">
                <Button 
                  variant="ghost" 
                  onClick={() => setActiveTab(activeTab === 'report' ? 'settings' : 'report')}
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700 px-6 py-2 rounded-lg font-semibold shadow-lg"
                >
                  <Icon name="Heart" className="mr-2" size={18} />
                  Верность.Про
                </Button>
                
                <Button 
                  onClick={exportToPDF}
                  variant="outline"
                  className="bg-gray-500 hover:bg-gray-600 text-white border-gray-500 hover:border-gray-600"
                >
                  <Icon name="Heart" className="mr-2" size={18} />
                  Мини проверка на верность
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Icon name="Calendar" size={16} />
                  <span>Дата проверки: {reportData.checkDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="FileText" size={16} />
                  <span>№ {reportData.reportNumber}</span>
                </div>
              </div>
            </div>
            
            {/* Информация о заказчике */}
            <div className="mt-6 pt-6 border-t border-slate-200">
              <h3 className="font-semibold text-slate-800 mb-2">Информация о заказчике</h3>
              <div className="text-slate-600 min-h-[20px]">
                {reportData.clientInfo || 'Не указана'}
              </div>
            </div>
          </div>

          <TabsContent value="report" className="space-y-8">
            {/* Основные разделы отчета */}
            
            {/* Общая информация */}
            <Card className="shadow-lg border-slate-200">
              <CardHeader className="bg-gradient-to-r from-slate-800 to-slate-900 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="User" size={20} />
                  Общая информация о второй половине
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {[
                  { label: 'ФИО и дата рождения', value: reportData.fullName },
                  { label: 'Найденные номера телефонов', value: reportData.phones },
                  { label: 'Найденные E-mail адреса', value: reportData.emails },
                  { label: 'Найденные документы', value: reportData.documents },
                  { label: 'Найденные адреса', value: reportData.addresses },
                  { label: 'Найденные автомобили', value: reportData.vehicles },
                  { label: 'Найденные аккаунты соцсетей и мессенджеров', value: reportData.socialAccounts }
                ].map((item, index) => (
                  <div key={index} className="border-b border-slate-100 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-slate-700 mb-2">{item.label}</h4>
                    <div className="text-slate-600 whitespace-pre-wrap min-h-[20px]">
                      {item.value || 'Информация не найдена'}
                    </div>
                  </div>
                ))}
                
                {/* Дополнительный аккаунт ВК - выделенный */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="AlertTriangle" size={18} className="text-red-600" />
                    <h4 className="font-bold text-red-800">Найден дополнительный аккаунт ВК</h4>
                    <Badge variant="destructive" className="text-xs">ВАЖНО</Badge>
                  </div>
                  <div className="text-slate-700 text-sm whitespace-pre-wrap">
                    {reportData.additionalVkAccount}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Дополнительная информация ВК */}
            <Card className="shadow-lg border-slate-200">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Users" size={20} />
                  Дополнительная информация об основном профиле ВК проверяемого
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">История изменения основного профиля ВК с момента создания</h4>
                  <div className="text-slate-600 whitespace-pre-wrap min-h-[20px]">
                    {reportData.vkHistory || 'Информация не найдена'}
                  </div>
                </div>
                
                {/* Скрытые друзья */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-yellow-500">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="EyeOff" size={18} className="text-yellow-600" />
                    <h4 className="font-bold text-yellow-800">Скрытые друзья</h4>
                    <Badge variant="outline" className="text-xs border-yellow-500 text-yellow-700">ОГРАНИЧЕНО</Badge>
                  </div>
                  <div className="text-slate-700 text-sm whitespace-pre-wrap">
                    {reportData.hiddenFriends}
                  </div>
                </div>
                
                {/* Цифровая активность */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Activity" size={18} className="text-blue-600" />
                    <h4 className="font-bold text-blue-800">Отчет и анализ цифровой активности основного профиля ВК с другими пользователями</h4>
                    <Badge variant="outline" className="text-xs border-blue-500 text-blue-700">ОГРАНИЧЕНО</Badge>
                  </div>
                  <div className="text-slate-700 text-sm whitespace-pre-wrap">
                    {reportData.vkActivity}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Telegram анализ */}
            <Card className="shadow-lg border-slate-200">
              <CardHeader className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={20} />
                  Цифровой анализ аккаунта Телеграм
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-lg border-l-4 border-cyan-500">
                  <div className="text-slate-700 whitespace-pre-wrap">
                    {reportData.telegramAnalysis}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Сайты знакомств */}
            <Card className="shadow-lg border-slate-200">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Heart" size={20} />
                  Отчёт о зарегистрированных аккаунтах на сайтах знакомств и флирта, включая удалённые
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <h4 className="font-semibold text-slate-700 mb-4">Аналитическое заключение по результатам проверки</h4>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <div className="text-slate-700 text-sm whitespace-pre-wrap">
                    {reportData.datingAnalysis}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Телефонная книга */}
            <Card className="shadow-lg border-slate-200">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Phone" size={20} />
                  Отчет о том как записана ваша вторая половина у других людей в телефонной книги
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-slate-600 whitespace-pre-wrap min-h-[40px]">
                  {reportData.phoneBookRecords || 'Информация не найдена'}
                </div>
              </CardContent>
            </Card>

            {/* Покупки */}
            <Card className="shadow-lg border-slate-200">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="CreditCard" size={20} />
                  Отчет о совершенных последних покупках вашей второй половины в розничных магазинах и интернет-ресурсах
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border-l-4 border-indigo-500">
                  <div className="text-slate-700 whitespace-pre-wrap">
                    {reportData.purchases}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Промокод и CTA */}
            <Card className="shadow-2xl border-red-200 bg-gradient-to-br from-red-50 to-pink-50">
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Icon name="Gift" size={24} />
                  Успей получить скидку {reportData.promoDiscount} на полную проверку на верность!
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="bg-white p-4 rounded-xl shadow-md border-2 border-red-200">
                    <h3 className="text-lg font-bold text-red-800 mb-2">Ваш индивидуальный промокод</h3>
                    <div className="text-2xl font-mono font-bold text-red-600 bg-red-100 p-3 rounded-lg inline-block">
                      {reportData.promoCode}
                    </div>
                    <p className="text-xs text-slate-600 mt-2">Скидка {reportData.promoDiscount} действует только сегодня!</p>
                  </div>
                  
                  <div className="text-slate-700 space-y-4">
                    <p className="text-lg">
                      Уведомляем, что бесплатный мини-отчет по проверке верности, как правило, содержит ограниченную информацию, которой недостаточно для полного развеивания сомнений и получения ответов на все интересующие вопросы.
                    </p>
                    <p>
                      Мы предлагаем вам воспользоваться услугой полной проверки верности вашей второй половины. В полном отчете вы получите исчерпывающую и точную информацию, которая позволит вам принять обоснованные решения и окончательно развеять все сомнения.
                    </p>
                    <p className="text-sm bg-blue-50 p-3 rounded-lg">
                      📝 <strong>Что нужно сделать:</strong> Напишите в наше сообщество ВК номер выданного промокода с пометкой "Полная проверка на верность". 
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <Button 
                      asChild 
                      size="lg"
                      className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-4 text-xl font-bold rounded-2xl shadow-2xl transform transition-all hover:scale-105"
                    >
                      <a 
                        href="https://vk.com/vernostpro" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3"
                      >
                        <Icon name="MousePointer" size={24} />
                        Нажми здесь что бы узнать всю правду прямо сейчас
                      </a>
                    </Button>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-slate-600">Наше сообщество:</p>
                      <a 
                        href="https://vk.com/vernostpro" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-800 font-medium underline"
                      >
                        https://vk.com/vernostpro
                      </a>
                      <br />
                      <p className="text-sm font-semibold text-slate-600">Официальный сайт:</p>
                      <a 
                        href="https://vk.link/vernostpro" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-800 font-medium underline"
                      >
                        https://vk.link/vernostpro
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Что получите */}
            <Card className="shadow-lg border-slate-200">
              <CardHeader className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="CheckCircle" size={20} />
                  Что вы получите при заказе полной проверки на верность
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4 text-slate-700">
                  <p className="font-semibold text-lg">Что вы получите воспользовавшись услугой «Полная проверка на верность»:</p>
                  <ul className="space-y-3">
                    {[
                      'Профессиональную проверку на верность онлайн: Мы собираем и анализируем информацию из множества источников, предоставляя вам максимально полный и точный отчет о проведенной проверке на верность.',
                      'Глубокий анализ цифровой жизни вашего партнера: Мы тщательно исследуем цифровой след вашего партнера, включая все действующие и актуальные соцсети, мессенджеры и сообщества.',
                      'Информацию о скрытых аккаунтах: Мы обнаруживаем скрытые и удаленные профили в социальных сетях и на сайтах знакомств. Мы найдем все, что скрыто от ваших глаз!',
                      'Подробный анализ активности в социальных сетях и мессенджерах: Вы узнаете, с кем, как часто и в какое время общается ваш партнер.',
                      'Понятный и структурированный отчет: Вся собранная информация проходит многоуровневую проверки на актуальность и достоверность.',
                      'Отчет о покупках вашей второй половины за последние полгода: Найдем и структурируем подробный отчет о совершенных покупках.',
                      'Конфиденциальность и анонимность 100%! Ваши подозрения и вся информация о проведенной проверки на верность останутся гарантированно только между вами и нами.'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Icon name="Check" size={20} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Финальный CTA */}
            <Card className="shadow-lg border-red-200 bg-gradient-to-br from-red-600 to-red-700 text-white">
              <CardContent className="p-6 text-center">
                <h2 className="text-xl font-bold mb-4">Узнайте полную информацию, которую скрывает ваша вторая половина прямо сейчас!</h2>
                <Button 
                  asChild 
                  size="lg"
                  variant="secondary"
                  className="bg-white text-red-700 hover:bg-red-50 px-12 py-4 text-xl font-bold rounded-2xl shadow-lg transform transition-all hover:scale-105"
                >
                  <a 
                    href="https://vk.com/vernostpro" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3"
                  >
                    <Icon name="ExternalLink" size={24} />
                    Получить полный отчет!
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Политика конфиденциальности */}
            <Card className="shadow-lg border-slate-200">
              <CardHeader className="bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Shield" size={20} />
                  Политика конфиденциальности и обеспечения анонимности клиентов
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-slate-700 space-y-4">
                  <p>
                    В целях обеспечения максимальной конфиденциальности и полной анонимности наших клиентов данный отчет передается исключительно заказчику и не сохраняется в наших системах в виде копий. После успешной отправки, отчет автоматически удаляется с сервера отправителя, что исключает его дальнейшее хранение.
                  </p>
                  <p>
                    Мы придерживаемся строгой политики конфиденциальности и гарантируем полную анонимность наших клиентов! Вся информация, связанная с заказом, не сохраняется на наших серверах после его выполнения и не передается третьим лицам с нашей стороны ни при каких обстоятельствах.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Подвал */}
            <div className="text-center text-xs text-slate-400 py-4">
              © All Rights Reserved. Vernost.Pro 2025.
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card className="shadow-lg border-slate-200">
              <CardHeader className="bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Settings" size={20} />
                  Параметры отчета
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-8">
                
                {/* Шапка */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2">Шапка отчета</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Дата проверки
                    </label>
                    <Input
                      value={reportData.checkDate}
                      onChange={(e) => updateField('checkDate', e.target.value)}
                      placeholder="дд.мм.гг"
                    />
                    <p className="text-xs text-slate-500 mt-1">Текущая дата автоматически подставляется</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Номер проверки
                    </label>
                    <Input
                      value={reportData.reportNumber}
                      onChange={(e) => updateField('reportNumber', e.target.value)}
                      placeholder="В/П 06842-25"
                    />
                    <p className="text-xs text-slate-500 mt-1">Формат: В/П XXXXX-XX</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Информация о заказчике
                    </label>
                    <Textarea
                      value={reportData.clientInfo}
                      onChange={(e) => updateField('clientInfo', e.target.value)}
                      placeholder="Номер телефона, id VK или username Telegram"
                      rows={3}
                    />
                    <p className="text-xs text-slate-500 mt-1">Контактные данные заказчика для связи</p>
                  </div>
                </div>

                <Separator />

                {/* Общая информация */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2">Общая информация о второй половине</h3>
                  
                  {[
                    { field: 'fullName', label: 'ФИО и дата рождения', placeholder: 'Иванов Иван Иванович, 15.03.1990', help: 'Полные ФИО и дата рождения проверяемого' },
                    { field: 'phones', label: 'Найденные номера телефонов', placeholder: '+7(999)123-45-67, +7(495)987-65-43', help: 'Все найденные номера телефонов, через запятую' },
                    { field: 'emails', label: 'Найденные E-mail адреса', placeholder: 'example@mail.ru, test@gmail.com', help: 'Все найденные email адреса, через запятую' },
                    { field: 'documents', label: 'Найденные документы', placeholder: 'Паспорт: 1234 567890, ИНН: 123456789012', help: 'Найденные документы с номерами' },
                    { field: 'addresses', label: 'Найденные адреса', placeholder: 'г. Москва, ул. Ленина д.1 кв.10', help: 'Все найденные адреса проживания/регистрации' },
                    { field: 'vehicles', label: 'Найденные автомобили', placeholder: 'А123БВ777, В456ГД123', help: 'Государственные номера найденных автомобилей' },
                    { field: 'socialAccounts', label: 'Найденные аккаунты соцсетей и мессенджеров', placeholder: 'Instagram: @username, Telegram: @username', help: 'Ссылки и никнеймы в социальных сетях' }
                  ].map((item) => (
                    <div key={item.field}>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        {item.label}
                      </label>
                      <Textarea
                        value={reportData[item.field as keyof typeof reportData] as string}
                        onChange={(e) => updateField(item.field, e.target.value)}
                        placeholder={item.placeholder}
                        rows={2}
                      />
                      <p className="text-xs text-slate-500 mt-1">{item.help}</p>
                    </div>
                  ))}
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Дополнительный аккаунт ВК <Badge variant="destructive" className="text-xs ml-2">ВАЖНО</Badge>
                    </label>
                    <Textarea
                      value={reportData.additionalVkAccount}
                      onChange={(e) => updateField('additionalVkAccount', e.target.value)}
                      rows={15}
                    />
                    <p className="text-xs text-slate-500 mt-1">Подробный анализ найденного дополнительного профиля ВК. Этот блок выделяется особо для привлечения внимания клиента.</p>
                  </div>
                </div>

                <Separator />

                {/* Дополнительная информация ВК */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2">Дополнительная информация ВК</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      История изменения основного профиля ВК
                    </label>
                    <Textarea
                      value={reportData.vkHistory}
                      onChange={(e) => updateField('vkHistory', e.target.value)}
                      placeholder="Профиль создан 12.01.2020, последние изменения..."
                      rows={4}
                    />
                    <p className="text-xs text-slate-500 mt-1">Хронология изменений профиля с момента создания</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Скрытые друзья <Badge variant="outline" className="text-xs ml-2">ШАБЛОН</Badge>
                    </label>
                    <Textarea
                      value={reportData.hiddenFriends}
                      onChange={(e) => updateField('hiddenFriends', e.target.value)}
                      rows={4}
                    />
                    <p className="text-xs text-slate-500 mt-1">Шаблонный текст о ограничениях мини-проверки. Можно корректировать для создания интриги.</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Цифровая активность ВК <Badge variant="outline" className="text-xs ml-2">ШАБЛОН</Badge>
                    </label>
                    <Textarea
                      value={reportData.vkActivity}
                      onChange={(e) => updateField('vkActivity', e.target.value)}
                      rows={4}
                    />
                    <p className="text-xs text-slate-500 mt-1">Шаблонный текст о ограничениях анализа активности. Мотивирует к заказу полной проверки.</p>
                  </div>
                </div>

                <Separator />

                {/* Telegram */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2">Telegram анализ</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Цифровой анализ аккаунта Telegram
                    </label>
                    <Textarea
                      value={reportData.telegramAnalysis}
                      onChange={(e) => updateField('telegramAnalysis', e.target.value)}
                      rows={8}
                    />
                    <p className="text-xs text-slate-500 mt-1">Добавьте найденную информацию перед шаблонным текстом. Пример: "Часто посещает каналы @channelname, общается с @username". Шаблонный текст в конце остается.</p>
                  </div>
                </div>

                <Separator />

                {/* Сайты знакомств */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2">Сайты знакомств</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Аналитическое заключение <Badge variant="outline" className="text-xs ml-2">ШАБЛОН</Badge>
                    </label>
                    <Textarea
                      value={reportData.datingAnalysis}
                      onChange={(e) => updateField('datingAnalysis', e.target.value)}
                      rows={15}
                    />
                    <p className="text-xs text-slate-500 mt-1">Подробный шаблонный анализ найденной анкеты на Mamba.ru. Создает интригу и мотивирует к заказу полной проверки.</p>
                  </div>
                </div>

                <Separator />

                {/* Остальные поля */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2">Дополнительная информация</h3>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Записи в телефонной книге
                    </label>
                    <Textarea
                      value={reportData.phoneBookRecords}
                      onChange={(e) => updateField('phoneBookRecords', e.target.value)}
                      placeholder="Записан как: Маша Любимая, Ваня Мамба, Катя кафе с Мамбы"
                      rows={3}
                    />
                    <p className="text-xs text-slate-500 mt-1">ВАЖНО: Для интриги добавьте имена с подозрительными приставками типа "Мамба", "кафе с Мамбы"</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Отчет о покупках
                    </label>
                    <Textarea
                      value={reportData.purchases}
                      onChange={(e) => updateField('purchases', e.target.value)}
                      rows={4}
                    />
                    <p className="text-xs text-slate-500 mt-1">Если найден номер карты - добавьте подозрительную покупку: "Покупка в феврале в магазине 585 - золотое украшение на 13 499₽ по карте №**** **** 2562 3630"</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Промокод
                    </label>
                    <Input
                      value={reportData.promoCode}
                      onChange={(e) => updateField('promoCode', e.target.value)}
                      placeholder="PROMO-03136-25"
                    />
                    <p className="text-xs text-slate-500 mt-1">Индивидуальный промокод клиента</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Размер скидки
                    </label>
                    <Input
                      value={reportData.promoDiscount}
                      onChange={(e) => updateField('promoDiscount', e.target.value)}
                      placeholder="50%"
                    />
                    <p className="text-xs text-slate-500 mt-1">Процент скидки по промокоду</p>
                  </div>
                </div>

                <div className="pt-6">
                  <Button 
                    onClick={() => setActiveTab('report')} 
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
                  >
                    <Icon name="Eye" className="mr-2" size={18} />
                    Предварительный просмотр отчета
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>

      <style jsx>{`
        @media print {
          .no-print { display: none !important; }
          body { -webkit-print-color-adjust: exact; }
        }
      `}</style>
    </div>
  );
}