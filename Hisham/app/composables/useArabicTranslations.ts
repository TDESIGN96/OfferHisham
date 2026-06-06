export function useArabicTranslations() {
  const statusLabels: Record<string, string> = {
    active: 'نشط',
    upcoming: 'قادمة',
    completed: 'مكتمل',
    pending: 'قيد الانتظار',
    approved: 'تمت الموافقة',
    rejected: 'مرفوض',
    new: 'جديد',
    reviewed: 'تمت المراجعة',
    shortlisted: 'قائمة مختصرة',
    inactive: 'غير نشط',
    'full-time': 'دوام كامل',
    'part-time': 'دوام جزئي',
    contract: 'عقد'
  }

  const translateStatus = (status: string) => statusLabels[status] || status

  return {
    projectName: 'جمعية مهارات',

    intro: {
      subtitle: 'نظام إدارة تعلم ومنصة توظيف متكاملة',
      disclaimer: 'إن هذا عرض تقديمي تفاعلي يشمل فهمنا للنظام الحالي وكيفية التعامل معه',
      startTour: 'ابدأ الجولة التفاعلية',
      navigationHint: 'استخدم أزرار الأسهم أو اسحب للتنقل بين الشرائح'
    },

    // Common UI
    submit: 'إرسال',
    cancel: 'إلغاء',
    save: 'حفظ',
    delete: 'حذف',
    edit: 'تعديل',
    add: 'إضافة',
    search: 'بحث',
    filter: 'تصفية',
    loading: 'جاري التحميل...',
    success: 'نجح!',
    error: 'خطأ',
    actions: 'الإجراءات',
    email: 'البريد الإلكتروني',
    position: 'الوظيفة',
    enrolledCount: 'مسجل',
    applicants: 'متقدم',
    more: 'المزيد',
    downloadCV: 'تحميل السيرة الذاتية',
    duration: 'المدة',
    durationPlaceholder: 'مثال: 8 أسابيع',
    courseTitlePlaceholder: 'مثال: تطوير الويب المتقدم',
    instructorPlaceholder: 'اسم المدرب',
    translateStatus,
    
    // Registration
    registration: {
      title: 'تسجيل الطالب',
      subtitle: 'تقدم بطلب للحصول على وصول للدورات واحصل على الموافقة من المسؤول',
      fullName: 'الاسم الكامل',
      phone: 'رقم الهاتف',
      email: 'البريد الإلكتروني',
      position: 'الوظيفة الحالية',
      suggestedCourses: 'الدورات المقترحة',
      submitApplication: 'إرسال الطلب',
      applicationSubmitted: 'تم إرسال الطلب!',
      sentToAdmin: 'تم الإرسال إلى المسؤول للموافقة',
      willReceiveEmail: 'ستتلقى رسالة بريد إلكتروني ببيانات الاعتماد الخاصة بك بمجرد الموافقة.'
    },
    
    // Approval
    approval: {
      title: 'تمت الموافقة على الحساب!',
      description: 'تمت الموافقة على تسجيلك من قبل المسؤول. استخدم بيانات الاعتماد هذه لتسجيل الدخول.',
      email: 'البريد الإلكتروني',
      temporaryPassword: 'كلمة المرور المؤقتة',
      changePasswordRequired: 'يجب تغيير كلمة المرور',
      changePasswordNote: 'يرجى تغيير كلمة المرور بعد أول تسجيل دخول للأمان.'
    },
    
    // Dashboard
    dashboard: {
      title: 'الدورات المتاحة',
      subtitle: 'تصفح والتسجيل في الدورات الحضورية',
      searchCourses: 'البحث عن الدورات...',
      enrolled: 'مسجل',
      duration: 'المدة',
      enrollNow: 'سجل الآن',
      enrolledSuccessfully: 'تم التسجيل بنجاح!'
    },
    
    // Calendar
    calendar: {
      title: 'تقويم الدورات',
      subtitle: 'عرض جداول الدورات القادمة',
      coursesOn: 'الدورات في'
    },
    
    // Certificate
    certificate: {
      title: 'نظام الشهادات',
      subtitle: 'عرض والتحقق من شهادات الدورات',
      certificateOfCompletion: 'شهادة إتمام',
      awardedTo: 'منحت إلى',
      completionDate: 'تاريخ الإتمام',
      verifyCertificate: 'التحقق من الشهادة',
      enterCertificateCode: 'أدخل رمز الشهادة',
      tryCode: 'جرب: LMS-2026-A1B2C3',
      genuineCertificate: 'شهادة أصلية تم التحقق منها ✓',
      invalidCertificate: 'شهادة غير صحيحة',
      cannotVerify: 'لا يمكن التحقق من رمز الشهادة الذي أدخلته.',
      student: 'الطالب',
      course: 'الدورة',
      completed: 'مكتمل'
    },
    
    // Jobs
    jobs: {
      title: 'فرص العمل',
      subtitle: 'تصفح وتقدم للوظائف المتاحة',
      searchJobs: 'البحث عن الوظائف...',
      applyNow: 'تقدم الآن',
      keyRequirements: 'المتطلبات الأساسية',
      fullTime: 'دوام كامل',
      partTime: 'دوام جزئي',
      contract: 'عقد',
      remote: 'عن بعد'
    },
    
    // Application
    application: {
      title: 'طلب التوظيف',
      applyFor: 'التقديم على',
      fullName: 'الاسم الكامل',
      fullNamePlaceholder: 'أحمد محمد',
      email: 'البريد الإلكتروني',
      emailPlaceholder: 'ahmad@example.com',
      phone: 'رقم الهاتف',
      phonePlaceholder: '+966 5XX XXX XXXX',
      coverLetter: 'خطاب التقديم',
      coverLetterPlaceholder: 'أخبرنا لماذا أنت مناسب لهذا الدور...',
      uploadCV: 'تحميل السيرة الذاتية',
      clickToUpload: 'انقر للتحميل',
      dragAndDrop: 'أو اسحب وأفلت',
      maxFileSize: 'PDF، DOC، DOCX (حد أقصى 5 ميجابايت)',
      submitApplication: 'إرسال الطلب',
      applicationSubmitted: 'تم إرسال الطلب!',
      applicationSent: 'تم إرسال طلبك إلى فريق التوظيف. سنراجعه ونتواصل معك قريباً.',
      whatsNext: 'ما التالي؟',
      adminWillReview: 'سيراجع المسؤول طلبك وسيرتك الذاتية. ستتلقى إشعاراً بالبريد الإلكتروني بشأن الخطوات التالية.'
    },
    
    // Privilege Toggle
    privilegeToggle: {
      switchToAdmin: 'التبديل إلى عرض المسؤول',
      switchToUser: 'التبديل إلى عرض المستخدم',
      adminDescription: 'استكشف لوحة تحكم المسؤول لإدارة المستخدمين والدورات والوظائف.',
      userDescription: 'العودة إلى رحلة المستخدم لمشاهدة تجربة الطالب والباحث عن عمل.',
      viewAdminDashboard: 'عرض لوحة تحكم المسؤول',
      viewUserJourney: 'عرض رحلة المستخدم'
    },
    
    // Admin Users
    adminUsers: {
      title: 'إدارة المستخدمين',
      subtitle: 'مراجعة والموافقة على تسجيلات الطلاب',
      pending: 'قيد الانتظار',
      approved: 'تمت الموافقة',
      total: 'الإجمالي',
      pendingRegistrations: 'التسجيلات قيد الانتظار',
      approve: 'موافقة',
      allProcessed: 'تمت معالجة جميع التسجيلات!',
      name: 'الاسم',
      status: 'الحالة',
      assignAlert: 'تعيين الدورات لـ:'
    },
    
    // Admin Courses
    adminCourses: {
      title: 'إدارة الدورات',
      subtitle: 'إدارة الدورات والتسجيل والشهادات',
      newCourse: 'دورة جديدة',
      totalCourses: 'إجمالي الدورات',
      active: 'نشطة',
      totalEnrolled: 'إجمالي المسجلين',
      avgCompletion: 'متوسط الإتمام',
      allCourses: 'جميع الدورات',
      courseTitle: 'عنوان الدورة',
      instructor: 'المدرب',
      completionRate: 'نسبة الإتمام',
      generateCodes: 'إنشاء الرموز',
      createNewCourse: 'إنشاء دورة جديدة',
      createCourse: 'إنشاء دورة',
      enrolled: 'المسجلون',
      status: 'الحالة',
      generateAlert: 'إنشاء رمز شهادة لـ:',
      courseTitlePlaceholder: 'مثال: تطوير الويب المتقدم'
    },
    
    // Admin Jobs
    adminJobs: {
      title: 'الوظائف والمرشحين',
      subtitle: 'إدارة إعلانات الوظائف ومراجعة الطلبات',
      postJob: 'نشر وظيفة',
      activeJobs: 'الوظائف النشطة',
      applications: 'الطلبات',
      shortlisted: 'القائمة المختصرة',
      candidates: 'المرشحون',
      noApplications: 'لا توجد طلبات بعد',
      new: 'جديد',
      reviewed: 'تمت المراجعة',
      rejected: 'مرفوض',
      applicantsCount: 'متقدم'
    },
    
    // Closing
    closing: {
      tourComplete: 'اكتملت الجولة!',
      thankYou: 'شكراً لاستكشاف جمعية مهارات',
      keyFeatures: 'الميزات الرئيسية المعروضة:',
      features: [
        'نظام إدارة تعلم كامل مع إدارة الدورات',
        'تكامل منصة التوظيف',
        'نظام التحقق من الشهادات',
        'لوحات تحكم المستخدم والمسؤول',
        'تتبع التسجيل في الوقت الفعلي',
        'سير عمل سلس لطلبات الوظائف'
      ],
      restartTour: 'إعادة تشغيل الجولة',
      readyToStart: 'هل أنت مستعد للبدء؟',
      contactUs: 'اتصل بنا',
      learnMore: 'اعرف المزيد'
    },
    
    // Days of week
    days: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت']
  }
}
