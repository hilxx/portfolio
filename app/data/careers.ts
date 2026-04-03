import type {Career} from "../types/career";

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
        period: "2026.02 - 2026.04",
        techStack: {
          frontend: ["Vue", "Pinia", "SCSS", "Nuxt", "TypeScript"],
          backend: ["Spring Boot", "Docker", "Naver VPN", "Java"],
          automation: ["Gradle"],
        },
        role: ["Frontend Developer"],
        summary: "AI 저작도구 2차 기획 및 프론트엔드 개발 및 UI 시스템 설계",
        summaryList: [
          "컴포넌트 주도 개발(CDD): 템플릿 및 요소별 UI를 원자 단위로 분리하여 재사용성을 극대화하고, 복잡한 에디터 화면의 데이터 바인딩 구조 개선.",
          "라우팅 및 상태 관리 최적화: 동적 라우팅 이슈 해결 및 고도화된 UI 상태 관리 로직 설계.",
          "협업 프로세스 최적화: Docker 기반의 백엔드 로컬 개발 환경(Spring Boot) 구축 및 API 연동 협업 경험 보유.",
        ],
        details: [
          {
            title: "1. 대규모 스타일 및 마크업 시스템 리팩토링",
            contribution:
              "무분별한 클래스명 및 중복 SCSS 구조를 개선하기 위한 스타일 시스템을 리팩토링하여 유지보수성 향상과 온보딩 시간 단축에 기여했습니다.",
            contents: [
              "AI로 생성된 무분별한 중복 SCSS 구조와 파편화된 클래스 체계를 BEM 방법론 기반으로 전면 재설계",
              "Vite 빌드 설정(additionalData) 최적화 및 Sass 모듈 시스템(@use, @forward) 도입으로 전역 스타일 의존성 문제 해결",
              "컴포넌트 1:1 매칭 전략을 통한 스타일 추적성 확보 및 <style scoped> 내 인라인 스타일을 외부 파일로 분리하여 코드 가독성 개선",
              "중복된 Mixin 및 Color 변수 체계를 정규화하여 디자인 시스템의 일관성 및 테마 확장성 강화",
              "불필요한 레거시 컴포넌트 및 미사용 SCSS 파일 제거를 통한 프로젝트 빌드 최적화 및 유지보수 공수 효율화",
            ],
          },
          {
            title: "2. AI 에디터 플랫폼 UI/UX 고도화",
            contribution:
              "복잡한 교육용 콘텐츠 에디터의 UI 컴포넌트 시스템을 구축하고 속성 패널의 로직을 설계했습니다.",
            contents: [
              "BaseButton과 CustomButton으로 파편화된 컴포넌트를 단일화하고, Record/Variant Map 패턴을 도입하여 무분별한 Props 증가 없이 확장 가능한 버튼 시스템 구축.",
              "반복되는 마크업을 공통 컴포넌트화하여 개발 효율성 증가.",
              "공용 소형 컴포넌트와 Slot을 활용하여 URL 입력 패널 등 반복되는 마크업 구조를 공통화하여 코드 중복 60% 제거.",
              "조건별 UI 제어: 특정 Key(explain, incorrect)에 따른 영역 노출 로직을 설정값(config) 기반으로 정교화하여 복잡한 사용자 설정 시나리오 대응.",
              "피드백 시스템 고도화: 이미지/효과음 업로드 로직을 v-for와 행 설정 배열로 추상화하여 유지보수성 향상",
            ],
          },
          {
            title: "3. 커스텀 오디오 플레이어 모듈 개발",
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
            title: "4. 시스템 아키텍처 및 라우팅 최적화",
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
        period: "2025.04 - 2025.12",
        techStack: {
          frontend: [
            "Vue3",
            "Javascript",
            "SCSS",
            "Primevue",
            "Vue Router",
            "Vite",
            "MathLive",
            "svg-sprite",
          ],
          visualization: ["Chart.js", "amCharts5"],
          qa: ["Jira"],
          automation: ["npm script (automation)", "GitLab CI/CD"],
        },
        role: ["Web Publisher", "Frontend Developer"],
        summary: "AI 디지털 교과서 플랫폼 2차 구축",
        summaryList: [
          "반응형 및 크로스 브라우징 최적화",
          "문법검사/하위 모듈 구축/UDL을 통해 AI 디지털 교과서 플랫폼 웹 접근성(KWCAG 2.2) 심사 통과 기여",
          "파라미터를 통한 상태 제어로 다양한 사용자 시나리오에 유연하게 대응",
        ],
        details: [
          {
            title: "1. 사용자 경험(UX) 고도화",
            contents: [
              "문법검사 및 다국어 대응 UI 개발",
              "UDL 적용하여 문서 구조화 및 접근성 향상",
              "zoom 효과에 따른 svg 이미지 크기 조절 및 화면 비율 유지",
              "플로팅 AI 챗봇 캐릭터에 인라인 SVG와 CSS @keyframes를 조합해 눈·표정 순차 애니메이션을 구현하고, 교육 단계별 mixin 기반 스타일 분기로 시각 스펙을 맞춤.",
            ],
          },
          {
            title: "2. 시스템 효율성 및 코드 재사용성에 기여",
            contents: [
              "공통 상태 안내 페이지(Error/Notice) 통합 아키텍처 설계",
              "상황별(로그인 필요, 불안정, 404 등)로 파편화된 안내 페이지를 URL 파라미터 기반의 단일 공통 컴포넌트로 통합",
              "Computed 기반의 동적 메시지 매핑 로직을 구현하여 코드 중복을 80% 이상 제거하고 유지보수 편의성 증대",
              "파라미터 쿼리 스트링(URLSearchParams)을 활용한 상태 제어로 별도의 라우트 추가 없이 다양한 사용자 시나리오에 유연하게 대응",
            ],
          },
          {
            title: "3. Jira를 이용한 프로젝트 관리 및 이슈 추적",
            contents: [
              "Jira 티켓 시스템을 활용하여 배포 일정 수립 및 스프린트 단위의 Task 가시화로 개발 병목 구간 사전 차단",
              "이슈 우선순위 정책에 따른 작업 스케줄링 최적화 및 긴급 버그(Hotfix) 발생 시 즉각적인 티켓 생성 및 대응 프로세스 수립",
              "백엔드/기획/디자인 파트와 티켓 내 코멘트 기능을 통한 비동기 소통으로 의사결정 이력 기록 및 커뮤니케이션 비용 절감",
              "대시보드를 활용한 히스토리 및 진행 상황 공유로 프로젝트 목표 달성률 및 품질 관리 표준화",
            ],
          },
          {
            type: "troubleshooting",
            title: "4. 로딩 애니메이션 테마 변수 적용 및 마크업 구조 최적화",
            contents: [
              "Sass 함수를 이용한 box-shadow 색상 변환 시 발생하는 변수 이중 관리 및 유지보수 복잡성 문제 분석",
              "복잡한 스타일 연산 대신 background-color 제어가 가능한 마크업 구조로 개편하여 테마 대응 유연성 확보",
              "SCSS 커스텀 함수 의존성을 제거하고 렌더링 성능 및 코드 가독성을 동시에 개선",
            ],
          },
          {
            type: "troubleshooting",
            title: "5. 공통 컴포넌트(ViewHeader) 내 동적 툴팁 시스템 설계",
            contribution:
              "공통 컴포넌트의 획일화된 구조로 인한 페이지별 커스텀 콘텐츠 삽입 제약",
            contents: [
              "페이지별로 상이한 안내 문구 및 강조 스타일 대응을 위해 Vue Router Meta 기반의 동적 툴팁 엔진 설계",
              "문자열/배열 등 다양한 데이터 포맷을 자동 감지하여 리스트 또는 텍스트 레이아웃으로 렌더링하는 전처리 로직 구현",
              "정규표현식 기반의 Highlight 함수를 통해 특정 키워드에 대한 실시간 스타일 치환(v-html) 및 시인성 개선",
              "공통 컴포넌트와 비즈니스 로직을 분리하여 코드 재사용성을 극대화하고 유지보수 공수 대폭 절감",
              "라우터 메타데이터 활용하여 각 페이지의 route.meta에 툴팁 데이터를 정의하고, 공통 컴포넌트가 현재 경로에 따라 데이터를 스스로 구독하도록 설계",
              "이터 정규화 로직(Helper & Computed): isObject 체크 및 computed 가공을 통해 문자열, 배열, 객체 등 다양한 데이터 포맷을 수용하는 유연한 인터페이스 구축",
              "동적 하이라이트 엔진: RegExp를 활용한 highlightText 함수를 구현하여, 특정 기호(예: *)나 키워드에 실시간으로 스타일(v-html)을 입히는 가공 로직 적용.",
            ],
          },
        ],
      },
      // AIDT 1차 운영
      {
        title: "AI 디지털 교과서 플랫폼 1차 고도화 및 운영",
        period: "2024.10 - 2025.11",
        techStack: {
          frontend: [
            "Vue3",
            "Javascript",
            "SCSS",
            "Primevue",
            "Vue Router",
            "Vite",
          ],
          visualization: ["Chart.js", "amCharts5"],
          qa: ["BrowserStack (qa)"],
          automation: ["npm script (automation)", "GitLab CI/CD"],
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
              "모든 페이지의 다국어, 반응형, 문법검사 qa를 통한 크로스 브라우징 및 레이아웃 결함 0건 달성",
            ],
          },
          {
            title: "2. 퍼블리싱-개발 협업 프로세스 최적화",
            contents: [
              "초/중고등 별 퍼블리싱 파일(SCSS, Images)의 독립적 관리를 위한 에셋 동기화 스크립트(ux:dev) 활용 및 레포지토리 간 코드 간섭 최소화",
              "유동적 콘텐츠 대응을 위한 반응형 팝업 가이드 모델 설계 및 개발용 UI 가이드라인 제공",
              "로컬·개발·스테이징·운영 서버 간 깃랩 브랜치 관리 및 동기화 자동화",
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
          {
            type: "troubleshooting",
            title: "4. 환경 간 마크업 불일치 이슈 해결",
            contents: [
              "로컬 가이드와 개발 실서버 간의 마크업 구조 차이로 발생하는 레이아웃 결함 분석 및 해결",
              "개발 환경 특성상 추가되는 Wrapper 요소에 영향받지 않는 유연한 CSS 선택자 체계 설계",
              "환경별 코드 동기화의 한계를 기술적 로직(CSS 변수 및 유동적 레이아웃)으로 극복하여 UI 일관성 유지",
            ],
          },
        ],
      },
    ],
  },
  {
    type: "Agency",
    company: "한국홍보디자인센터",
    role: ["Web Publisher", "Web Designer"],
    period: "2023.07 - 2024.10",
    link: "/career",
    projects: [
      {
        title: "AI 디지털 교과서 플랫폼",
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
