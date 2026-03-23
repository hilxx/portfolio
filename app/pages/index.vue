<template>
  <main class="portfolio">
    <section class="hero section">
      <p class="hero__eyebrow">Frontend Developer</p>
      <h1>{{ profile.name }}</h1>
      <p class="hero__summary">{{ profile.summary }}</p>
    </section>

    <section class="section">
      <h2>경력</h2>
      <ul class="timeline">
        <li v-for="career in careers" :key="career.company" class="timeline__item">
          <div class="timeline__header">
            <strong>{{ career.company }}</strong>
            <span>{{ career.period }}</span>
          </div>
          <p>{{ career.role }}</p>
        </li>
      </ul>
    </section>

    <section class="section">
      <h2>프로젝트</h2>
      <div class="projects">
        <article v-for="project in projects" :key="project.title" class="project-card">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <ul>
            <li v-for="tech in project.techStack" :key="tech">{{ tech }}</li>
          </ul>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
interface Career {
  company: string
  role: string
  period: string
}

interface Project {
  title: string
  description: string
  techStack: string[]
}

const profile = {
  name: 'hilee',
  summary:
    'UI 디테일과 코드 구조화 능력을 동시에 갖춘 웹 서비스를 만드는 프론트엔드 개발자입니다.'
}

const careers: Career[] = [
  {
    company: 'In-house 천재교육',
    role: 'Web Publisher / Frontend Developer',
    period: '2024.10 - 재직중'
  },
  {
    company: 'Agency 한국홍보디자인세터',
    role: 'Web Publisher / Web Designer',
    period: '2023.07 - 2024.10'
  }
]

const projects: Project[] = [
  {
    title: '재사용 가능한 컴포넌트 작업',
    description: 'PrimeVue 커스터마이징이나 공통 UI 관리를 통해 동료 개발자들의 작업 속도 향상에 기여',
    techStack: ['Vue', 'Nuxt', 'JavaScript', 'SCSS']
  },
  {
    title: '웹 접근성 및 UDL 가이드라인 기반 마크업 개선',
    description: 'AI 디지털 교과서 플랫폼 1차 운영 및 유지보수 / 2차 구축 프로젝트 참여하면서 웹 접근성에 기여',
    techStack: ['Vue', 'Pinia', 'SCSS']
  },
  {
    title: '스타일 리팩토링을 통한 전체 프로젝트 유지보수/운영에 생산성 기여',
    description: 'AI 디지털 교과서 플랫폼 1차 운영 및 유지보수 / 2차 구축 프로젝트 참여하면서 웹 접근성에 기여',
    techStack: ['Vue', 'Pinia', 'SCSS', 'Nuxt', 'TypeScript']
  }
]
</script>
