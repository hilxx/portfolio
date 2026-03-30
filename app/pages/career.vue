<template>
  <main class="portfolio portfolio--subpage">
    <section class="company">
      <p class="intro__tag">Company</p>
      <div class="company__intro">
        <h1 class="company__name">{{ primaryCareer.company }}</h1>
        <div class="company__role">
          <ul class="company__role-list">
            <li v-for="role in primaryCareer.role" :key="role">{{ role }}</li>
          </ul>
        </div>
        <!-- <p class="company__period">{{ primaryCareer.period }}</p> -->
      </div>
    </section>

    <section class="timeline">
      <div class="company__summary">
        <h2 class="section__title">역할/기여 요약</h2>
        <div class="timeline-wrapper">
          <div class="timeline-line"></div>

          <div class="timeline-list">
            <div
              v-for="(career, index) in careers"
              :key="`${career.company}-${career.period}`"
              :ref="(el) => setTimelineItem(el, index)"
              class="timeline-item"
              :class="{ 'is-active': activeItemId === index }"
            >
              <div class="timeline-bullet"></div>

              <div class="career-card">
                <div class="career-card__header">
                  <span class="date">{{ career.period }}</span>
                  <span :class="['type-tag', career.type.toLowerCase()]">{{
                    career.type
                  }}</span>
                </div>

                <h2 class="role">{{ career.role.join(" / ") }}</h2>

                <div class="company-info">
                  <span class="company-name">{{ career.company }}</span>
                  <!-- <span class="location">{{ career.location }}</span> -->
                </div>

                <p class="summary">{{ career.summary }}</p>

                <ul class="bullet-list">
                  <li
                    v-for="(bullet, bIndex) in career.summaryList"
                    :key="`${career.company}-${bIndex}`"
                  >
                    {{ bullet }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="trouble-shooting">
      <div class="trouble-shooting__list"></div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { careers } from "~/assets/data/careers";
import type { Career } from "~/types/career";
import { ref, onMounted, onBeforeUnmount } from "vue";

const primaryCareer: Career = careers[0] ?? {
  type: "",
  company: "COMPANY",
  role: [],
  period: "YY.MM.DD",
  link: "",
  summary: "",
  summaryList: [],
};

// DOM 요소 참조를 위한 배열
const timelineItems = ref<(Element | null)[]>([]);
const setTimelineItem = (
  el: Element | { $el?: Element } | null,
  index: number,
) => {
  timelineItems.value[index] = el instanceof Element ? el : (el?.$el ?? null);
};

// 현재 활성화된(가장 크게 보일) 항목의 ID
const activeItemId = ref<number | null>(careers.length ? 0 : null);

// Intersection Observer 설정
let observer: IntersectionObserver | null = null;

onMounted(() => {
  // Observer 인스턴스 생성
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        // 요소가 화면의 지정된 영역에 들어왔을 때
        if (entry.isIntersecting) {
          // 해당 요소의 ID를 활성 ID로 설정
          const targetId = Number(entry.target.getAttribute("data-id"));
          if (!Number.isNaN(targetId)) activeItemId.value = targetId;
        }
      });
    },
    {
      // 감지 범위 설정 (중요!)
      // 화면 중앙 부근(상단 30% ~ 하단 30% 사이)에 올 때 감지하도록 설정
      rootMargin: "-30% 0% -30% 0%",
      threshold: 0.1, // 요소의 10%만 보여도 감지 시작
    },
  );

  // 각 타임라인 항목 관찰 시작
  timelineItems.value.forEach((item, index) => {
    if (item) {
      // 애니메이션 로직을 위해 data-id 속성 부여
      item.setAttribute("data-id", String(index));
      observer?.observe(item);
    }
  });
});

// 컴포넌트 언마운트 시 Observer 해제 (메모리 누수 방지)
onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/common.scss";
@use "@/assets/scss/pages/career.scss";
</style>
