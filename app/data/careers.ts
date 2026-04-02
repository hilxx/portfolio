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
        title: "AI 디지털 교과서 플랫폼 1차 운영",
        period: "2024.10 - 2025.02",
        description:
          "AI 디지털 교과서 플랫폼 웹 접근성(KWCAG 2.2) 심사 통과 기여",
        techStack: ["Vue", "Pinia", "SCSS"],
        role: ["Web Publisher"],
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
