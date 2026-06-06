export interface Course {
  id: number
  title: string
  description: string
  thumbnail: string
  duration: string
  enrolled: number
  status: 'active' | 'upcoming' | 'completed'
  instructor: string
  startDate: string
  completionRate?: number
}

export interface Job {
  id: number
  title: string
  company: string
  description: string
  requirements: string[]
  location: string
  type: 'full-time' | 'part-time' | 'contract'
  postedDate: string
  applicants?: number
}

export interface User {
  id: number
  name: string
  email: string
  phone: string
  position: string
  suggestedCourses: string[]
  status: 'pending' | 'approved' | 'rejected'
  appliedDate: string
}

export interface Certificate {
  id: number
  code: string
  studentName: string
  courseName: string
  completionDate: string
  issueDate: string
  valid: boolean
}

export interface Candidate {
  id: number
  name: string
  email: string
  phone: string
  applicationDate: string
  cvUrl: string
  status: 'new' | 'reviewed' | 'shortlisted' | 'rejected'
  jobId: number
}

export function useMockData() {
  const courses: Course[] = [
    {
      id: 1,
      title: 'تطوير الويب المتقدم',
      description: 'إتقان تقنيات الويب الحديثة بما في ذلك Vue و Nuxt و TypeScript. بناء تطبيقات جاهزة للإنتاج بأفضل الممارسات.',
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      duration: '8 أسابيع',
      enrolled: 45,
      status: 'active',
      instructor: 'د. سارة ميتشل',
      startDate: '2026-07-01',
      completionRate: 78
    },
    {
      id: 2,
      title: 'علوم البيانات والتحليلات',
      description: 'تعلم تحليل البيانات والتعلم الآلي وتقنيات التصور. العمل مع Python و pandas و scikit-learn.',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      duration: '10 أسابيع',
      enrolled: 38,
      status: 'active',
      instructor: 'أ. جيمس تشن',
      startDate: '2026-06-15',
      completionRate: 85
    },
    {
      id: 3,
      title: 'استراتيجية التسويق الرقمي',
      description: 'دورة شاملة في التسويق الرقمي تغطي SEO ووسائل التواصل الاجتماعي والتسويق بالمحتوى والتحليلات.',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      duration: '6 أسابيع',
      enrolled: 52,
      status: 'active',
      instructor: 'ماريا رودريغيز',
      startDate: '2026-07-10',
      completionRate: 92
    },
    {
      id: 4,
      title: 'الدورة الشاملة لتصميم واجهات المستخدم',
      description: 'تصميم واجهات مستخدم جميلة وسهلة الاستخدام. تعلم Figma وأنظمة التصميم ومنهجيات بحث المستخدم.',
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
      duration: '7 أسابيع',
      enrolled: 41,
      status: 'upcoming',
      instructor: 'أليكس تيرنر',
      startDate: '2026-08-01',
      completionRate: 0
    },
    {
      id: 5,
      title: 'الحوسبة السحابية وDevOps',
      description: 'إتقان منصات السحابة (AWS، Azure)، والحاويات باستخدام Docker، وخطوط CI/CD.',
      thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
      duration: '9 أسابيع',
      enrolled: 34,
      status: 'active',
      instructor: 'ديفيد كومار',
      startDate: '2026-06-20',
      completionRate: 71
    }
  ]

  const jobs: Job[] = [
    {
      id: 1,
      title: 'مطور واجهات أمامية أول',
      company: 'تك كورب سوليوشنز',
      description: 'نبحث عن مطور واجهات أمامية ذو خبرة للانضمام إلى فريقنا وبناء تطبيقات ويب متطورة.',
      requirements: ['خبرة +5 سنوات', 'إتقان Vue.js/React', 'إتقان TypeScript', 'مهارات CSS قوية'],
      location: 'عن بعد',
      type: 'full-time',
      postedDate: '2026-05-25',
      applicants: 12
    },
    {
      id: 2,
      title: 'محلل بيانات',
      company: 'مركز التحليلات',
      description: 'انضم إلى فريق البيانات لدينا لتحليل مقاييس الأعمال وإنشاء لوحات المعلومات وتقديم رؤى قابلة للتنفيذ.',
      requirements: ['خبرة +3 سنوات', 'إتقان SQL', 'مهارات Python/R', 'أدوات ذكاء الأعمال'],
      location: 'هجين - نيويورك',
      type: 'full-time',
      postedDate: '2026-05-28',
      applicants: 8
    },
    {
      id: 3,
      title: 'أخصائي تسويق رقمي',
      company: 'شركة التسويق النمائي',
      description: 'قيادة حملات التسويق الرقمي عبر قنوات متعددة ودفع اكتساب العملاء.',
      requirements: ['خبرة +2 سنة', 'معرفة SEO/SEM', 'خبرة وسائل التواصل', 'إتقان التحليلات'],
      location: 'عن بعد',
      type: 'full-time',
      postedDate: '2026-06-01',
      applicants: 15
    },
    {
      id: 4,
      title: 'مصمم واجهات المستخدم',
      company: 'استوديوهات الإبداع',
      description: 'تصميم تجارب مستخدم جميلة وعملية لتطبيقات الويب والهاتف المحمول.',
      requirements: ['محفظة مطلوبة', 'إتقان Figma/Sketch', 'خبرة بحث المستخدم', 'معرفة أنظمة التصميم'],
      location: 'حضوري - سان فرانسيسكو',
      type: 'full-time',
      postedDate: '2026-05-30',
      applicants: 10
    },
    {
      id: 5,
      title: 'مهندس DevOps',
      company: 'أنظمة السحابة التقنية',
      description: 'بناء وصيانة بنية تحتية قابلة للتوسع وتنفيذ خطوط CI/CD وضمان موثوقية النظام.',
      requirements: ['خبرة AWS/Azure', 'Docker وKubernetes', 'Terraform/IaC', 'البرمجة النصية (Bash/Python)'],
      location: 'عن بعد',
      type: 'contract',
      postedDate: '2026-06-03',
      applicants: 6
    }
  ]

  const users: User[] = [
    {
      id: 1,
      name: 'أحمد عبدالله',
      email: 'ahmed.abdullah@email.com',
      phone: '+966 55 123 4567',
      position: 'مطور مبتدئ',
      suggestedCourses: ['تطوير الويب المتقدم', 'الحوسبة السحابية وDevOps'],
      status: 'pending',
      appliedDate: '2026-06-05'
    },
    {
      id: 2,
      name: 'فاطمة محمد',
      email: 'fatima.mohammed@email.com',
      phone: '+966 55 234 5678',
      position: 'منسقة تسويق',
      suggestedCourses: ['استراتيجية التسويق الرقمي'],
      status: 'pending',
      appliedDate: '2026-06-04'
    },
    {
      id: 3,
      name: 'محمد خالد',
      email: 'mohammed.khaled@email.com',
      phone: '+966 55 345 6789',
      position: 'متدرب بيانات',
      suggestedCourses: ['علوم البيانات والتحليلات'],
      status: 'approved',
      appliedDate: '2026-06-01'
    },
    {
      id: 4,
      name: 'سارة علي',
      email: 'sara.ali@email.com',
      phone: '+966 55 456 7890',
      position: 'مصممة جرافيك',
      suggestedCourses: ['الدورة الشاملة لتصميم واجهات المستخدم'],
      status: 'pending',
      appliedDate: '2026-06-06'
    }
  ]

  const certificates: Certificate[] = [
    {
      id: 1,
      code: 'LMS-2026-A1B2C3',
      studentName: 'محمد خالد',
      courseName: 'علوم البيانات والتحليلات',
      completionDate: '2026-05-15',
      issueDate: '2026-05-20',
      valid: true
    },
    {
      id: 2,
      code: 'LMS-2026-D4E5F6',
      studentName: 'جنيفر ويليامز',
      courseName: 'استراتيجية التسويق الرقمي',
      completionDate: '2026-04-28',
      issueDate: '2026-05-01',
      valid: true
    },
    {
      id: 3,
      code: 'LMS-2026-G7H8I9',
      studentName: 'روبرت تايلور',
      courseName: 'تطوير الويب المتقدم',
      completionDate: '2026-05-10',
      issueDate: '2026-05-12',
      valid: true
    }
  ]

  const candidates: Candidate[] = [
    {
      id: 1,
      name: 'ألكساندرا مارتينيز',
      email: 'alex.martinez@email.com',
      phone: '+966 55 111 2222',
      applicationDate: '2026-06-02',
      cvUrl: '/documents/alex-martinez-cv.pdf',
      status: 'reviewed',
      jobId: 1
    },
    {
      id: 2,
      name: 'دانيال كيم',
      email: 'daniel.kim@email.com',
      phone: '+966 55 222 3333',
      applicationDate: '2026-06-03',
      cvUrl: '/documents/daniel-kim-cv.pdf',
      status: 'shortlisted',
      jobId: 1
    },
    {
      id: 3,
      name: 'ليزا جونسون',
      email: 'lisa.johnson@email.com',
      phone: '+966 55 333 4444',
      applicationDate: '2026-06-01',
      cvUrl: '/documents/lisa-johnson-cv.pdf',
      status: 'new',
      jobId: 2
    },
    {
      id: 4,
      name: 'ماركوس براون',
      email: 'marcus.brown@email.com',
      phone: '+966 55 444 5555',
      applicationDate: '2026-06-04',
      cvUrl: '/documents/marcus-brown-cv.pdf',
      status: 'reviewed',
      jobId: 3
    }
  ]

  return {
    courses,
    jobs,
    users,
    certificates,
    candidates
  }
}
