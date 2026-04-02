import type { Career } from "../types/career";

export const careers: Career[] = [
  {
    type: "In-house",
    company: "천재교육",
    role: ["Web Publisher", "Frontend Developer"],
    period: "2024.10 - 재직중",
    link: "/career",
    projects: [
      {
        title: "AI 저작도구 2차 개발",
        period: "2026.03 - 2026.04",
        description: "AI 저작도구 2차 기획 및 개발 진행",
        techStack: ["Vue", "Pinia", "SCSS", "Nuxt", "TypeScript"],
        role: ["Frontend Developer"],
        summary: "프론트엔드 개발 및 UI 시스템 설계",
        summaryList: [
          "컴포넌트 주도 개발(CDD): 템플릿 및 요소별 UI를 원자 단위로 분리하여 재사용성을 극대화하고, 복잡한 에디터 화면의 데이터 바인딩 구조 개선.",
          "라우팅 및 상태 관리 최적화: 동적 라우팅 이슈 해결 및 고도화된 UI 상태 관리 로직 설계.",
          "협업 프로세스 최적화: Docker 기반의 백엔드 로컬 개발 환경(Spring Boot) 구축 및 API 연동 협업 경험 보유.",
        ],
        details: [
          {
            title: "1. 지능형 에디터 플랫폼 UI/UX 고도화",
            contribution:
              "복잡한 교육용 콘텐츠 에디터의 UI 컴포넌트 시스템을 구축하고 속성 패널의 로직을 설계했습니다.",
            contents: [
              "BaseButton과 CustomButton으로 파편화된 컴포넌트를 단일화하고, Record/Variant Map 패턴을 도입하여 무분별한 Props 증가 없이 확장 가능한 버튼 시스템 구축.",
              "공용 소형 컴포넌트와 Slot을 활용하여 URL 입력 패널 등 반복되는 마크업 구조를 공통화하여 코드 중복 60% 제거.",
              "조건별 UI 제어: 특정 Key(explain, incorrect)에 따른 영역 노출 로직을 설정값(config) 기반으로 정교화하여 복잡한 사용자 설정 시나리오 대응.",
              "피드백 시스템 고도화: 이미지/효과음 업로드 로직을 v-for와 행 설정 배열로 추상화하여 유지보수성 향상 및 파일 규격(accept, MAX_SIZE) 유효성 검사 적용.",
            ],
          },
          {
            title: "2. 커스텀 오디오 플레이어 모듈 개발",
            contribution:
              "다양한 학습 환경에 대응하는 범용 오디오 플레이어 컴포넌트를 개발했습니다.",
            contents: [
              "HTMLAudioElement의 표준 명세에 없는 stop() 동작을 pause() + currentTime 초기화 로직으로 직접 구현하여 기능적 무결성 확보.",
              "재생 상태(is-playing)에 따른 실시간 게이지 색상 전환 및 인터랙션 강화.",
              "오디오 객체 미매칭 시 발생하던 런타임 에러를 옵셔널 체이닝 및 computed 안전화 로직으로 해결.",
              "잘못된 이벤트 리스너(stop)를 제거하고 pause 이벤트를 통한 상태 동기화로 메모리 누수 방지.",
            ],
          },
          {
            title: "3. 시스템 아키텍처 및 라우팅 최적화",
            contribution: "",
            contents: [
              '라우팅 이슈 해결: 동일 부모 라우트 내 URL 변경 시 화면 미갱신 문제를 router-view에 `:key="route.fullPath"`를 적용하여 컴포넌트 재마운트를 유도함으로써 해결.',
              "라우터 매칭 우선순위 설계: Catch-all 라우트보다 명시적 자식 라우트가 우선 매칭되도록 설계하고, Lazy import 패턴을 유지하여 초기 번들 크기 최적화.",
            ],
          },
        ],
      },
      {
        title: "AI 저작도구 1차 리팩토링",
        period: "2026.02 - 2026.03",
        description:
          "AI 저작도구 1차 리팩토링 및 공통 컴포넌트 개선으로 개발 진행률 20일 앞당김",
        techStack: ["Vue", "Pinia", "SCSS", "Nuxt", "TypeScript"],
        role: ["Frontend Developer"],
        summary:
          "AI 저작도구 1차 리팩토링 및 공통 컴포넌트 개선으로 개발 진행률 20일 앞당김",
        summaryList: [
          "AI 저작도구 1차 리팩토링 및 공통 컴포넌트 개선으로 개발 진행률 20일 앞당김",
        ],

        details: [
          {
            title: "🛠 1. 지능형 에디터 플랫폼 UI/UX 고도화",
            contents: [
              "BaseButton/CustomButton 단일화 및 Variant Map 패턴 도입",
              "config.key === 'explain' 등 조건부 UI 정교화",
            ],
          },
        ],
      },
      {
        title: "AI 디지털 교과서 플랫폼 2차 구축",
        period: "2024.10 - 재직중",
        description:
          "AI 디지털 교과서 플랫폼 웹 접근성(KWCAG 2.2) 심사 통과 기여",
        techStack: ["Vue", "Pinia", "SCSS"],
        role: ["Web Publisher", "Frontend Developer"],
        summary: "AI 디지털 교과서 플랫폼 웹 접근성(KWCAG 2.2) 심사 통과 기여",
        summaryList: [
          "공통 UI 컴포넌트 라이브러리(Vue 3, TS) 구축 및 재사용률 30% 증가",
          "AI 디지털 교과서 플랫폼 웹 접근성(KWCAG 2.2) 심사 통과 기여",
          "레거시 코드 리팩토링 및 빌드 속도 15% 개선",
        ],
        details: [
          {
            title: "🛠 1. 지능형 에디터 플랫폼 UI/UX 고도화",
            contents: [
              "BaseButton/CustomButton 단일화 및 Variant Map 패턴 도입",
              "config.key === 'explain' 등 조건부 UI 정교화",
            ],
          },
        ],
      },
      {
        title: "AI 디지털 교과서 플랫폼 1차 고도화 및 운영",
        period: "2024.10 - 2025.05",
        description:
          "AI 디지털 교과서 플랫폼 웹 접근성 심사 통과에 기여 및 크로스 브라우징 최적화",
        techStack: {
          frontend: ["Vue", "Javascript", "SCSS", "Primevue"],
          visualization: ["Chart.js"],
          QA: ["BrowserStack (QA)"],
          Automation: ["npm script (Automation)"],
        },
        role: ["Web Publisher"],
        summary:
          "AI 디지털 교과서 플랫폼 웹 접근성 심사 통과에 기여 및 크로스 브라우징 최적화",
        summaryList: [
          "4개국 다국어(영어·중국어·일본어·베트남어) 대응 및 유연한 반응형 레이아웃 구축",
          "구형 브라우저(Safari 11-14) 호환성 확보 및 CSS 신규 스펙 폴리필 적용(gap, :has)",
          "모든 페이지 문법 검사 및 수정 완료 (Primevue css 이슈, 웹 표준에 맞게 마크업 개선)",
          "npm script 기반 에셋 동기화 자동화로 퍼블리싱-개발 협업 프로세스 최적화",
          "2차 수정고시를 통한 홈페이지 고도화에 기여",
        ],
        details: [
          {
            title: "1. 글로벌 서비스 대응 및 브라우저 최적화",
            contents: [
              "4개국 다국어 대응 및 언어별 텍스트 길이에 따른 유동적 레이아웃(Flexible Layout) 구현",
              "Chart.js 활용 시 다국어/태블릿 환경에서 텍스트가 잘리는 이슈를 차트 옵션 최적화 및 동적 리사이징 로직으로 해결",
              "Safari 11~14 등 구형 브라우저에서의 CSS gap 미지원 이슈 분석 및 대체 스타일링(Margin/Padding) 적용",
              "크로스 브라우징 최적화: gap, :has 폴리필 적용 및 브라우저 호환성 확보",
              "모든 페이지의 다국어, 반응형, 문법검사 QA를 통한 크로스 브라우징 및 레이아웃 결함 0건 달성",
            ],
          },
          {
            title: "2. 퍼블리싱-개발 협업 프로세스 최적화",
            contents: [
              "초/중고등 별 퍼블리싱 파일(SCSS, Images)의 독립적 관리를 위한 에셋 동기화 스크립트(ux:dev) 활용 및 레포지토리 간 코드 간섭 최소화",
              "유동적 콘텐츠 대응을 위한 반응형 팝업 가이드 모델 설계 및 개발용 UI 가이드라인 제공",
            ],
          },
          {
            title: "3. 사용자 피드백 기반 UI/UX 고도화 (2차 수정고시 반영)",
            contents: [
              "실사용자 피드백 기반 2차 수정고시 기획안 반영을 통한 교육 플랫폼 UX 고도화 및 서비스 사용성 최적화",
              "현장적합성 오류/개선 및 사용자 피드백 반영 완료 - 홈 배치 변경, 실시간 모니터링 민감 정보 명확 제시, 챗봇 비활성화 설정 추가",
              "개인정보보호 안내 팝업 및 이용안내 페이지 추가",
            ],
          },
        ],
      },
    ],
  },
  {
    type: "Agency",
    company: "한국홍보디자인세터",
    role: ["Web Publisher", "Web Designer"],
    period: "2023.07 - 2024.10",
    link: "/career",
    projects: [
      {
        title: "AI 디지털 교과서 플랫폼",
        description:
          "AI 디지털 교과서 플랫폼 웹 접근성(KWCAG 2.2) 심사 통과 기여",
        techStack: ["Vue", "Pinia", "SCSS"],
        role: ["Web Publisher", "Frontend Developer"],
        period: "2023.07 - 2024.10",
        summary: "AI 디지털 교과서 플랫폼 웹 접근성(KWCAG 2.2) 심사 통과 기여",
        summaryList: [
          "공통 UI 컴포넌트 라이브러리(Vue 3, TS) 구축 및 재사용률 30% 증가",
          "AI 디지털 교과서 플랫폼 웹 접근성(KWCAG 2.2) 심사 통과 기여",
          "레거시 코드 리팩토링 및 빌드 속도 15% 개선",
        ],
        details: [
          {
            title: "🛠 1. 지능형 에디터 플랫폼 UI/UX 고도화",
            contents: [
              "BaseButton/CustomButton 단일화 및 Variant Map 패턴 도입",
              "config.key === 'explain' 등 조건부 UI 정교화",
            ],
          },
        ],
      },
      {
        title: "AI 디지털 교과서 플랫폼",
        description:
          "AI 디지털 교과서 플랫폼 웹 접근성(KWCAG 2.2) 심사 통과 기여",
        techStack: ["Vue", "Pinia", "SCSS"],
        role: ["Web Publisher", "Frontend Developer"],
        period: "2023.07 - 2024.10",
        summary: "AI 디지털 교과서 플랫폼 웹 접근성(KWCAG 2.2) 심사 통과 기여",
        summaryList: [
          "공통 UI 컴포넌트 라이브러리(Vue 3, TS) 구축 및 재사용률 30% 증가",
          "AI 디지털 교과서 플랫폼 웹 접근성(KWCAG 2.2) 심사 통과 기여",
        ],
        details: [
          {
            title: "🛠 1. 지능형 에디터 플랫폼 UI/UX 고도화",
            contents: [
              "BaseButton/CustomButton 단일화 및 Variant Map 패턴 도입",
              "config.key === 'explain' 등 조건부 UI 정교화",
            ],
          },
        ],
      },
    ],
  },
];
