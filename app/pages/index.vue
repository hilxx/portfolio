<template>
  <main class="portfolio portfolio--main">
    <section class="intro">
      <p class="intro__tag">Frontend Developer</p>
      <h1 class="intro__name">{{ profile.name }}:&#41;</h1>
      <p class="intro__summary">{{ profile.summary }}</p>
    </section>

    <section class="career">
      <h2 class="section__title">경력</h2>
      <ul class="timeline">
        <li
          v-for="career in careers"
          :key="career.company"
          class="timeline__item"
        >
          <a :href="career.link" target="_blank" rel="noopener noreferrer">
            <div class="timeline__header">
              <span class="company_type">{{ career.type }}</span>
              <p>{{ career.company }}</p>
              <span>{{ career.period }}</span>
            </div>
            <ul>
              <li v-for="role in career.role" :key="role">{{ role }}</li>
            </ul>
          </a>
        </li>
      </ul>
    </section>

    <section class="projects">
      <h2 class="section__title">주요 프로젝트</h2>
      <Swiper
        class="projects-carousel"
        :modules="[Navigation]"
        :slides-per-view="4"
        :space-between="12"
        :slides-per-group="1"
        :navigation="true"
        :breakpoints="breakpoints"
      >
        <SwiperSlide v-for="project in projects" :key="project.title">
          <article class="project-card">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <ul>
              <li v-for="tech in project.techStack" :key="tech">{{ tech }}</li>
            </ul>
          </article>
        </SwiperSlide>
      </Swiper>
    </section>
  </main>
</template>

<script setup lang="ts">
import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import { careers } from "@/data/careers";
import { projects } from "@/data/projects";

const profile = {
  name: "hilee",
  summary:
    "UI 디테일과 코드 구조화 능력을 동시에 갖춘 웹 서비스를 만드는 프론트엔드 개발자입니다.",
};

// 반응형: 기본 4개, 모바일에서 2/1개로 변경
const breakpoints = {
  0: { slidesPerView: 1 },
  640: { slidesPerView: 2 },
  1024: { slidesPerView: 4 },
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/common.scss";
@use "@/assets/scss/pages/main.scss";
</style>
