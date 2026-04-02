<template>
  <main class="portfolio portfolio--subpage">
    <article
      v-for="(career, careerIndex) in careers"
      :key="career.company"
      class="career-group"
    >
      <section class="company">
        <p class="intro__tag">{{ career.type }}</p>
        <div class="company__intro">
          <h1 class="company__name">{{ career.company }}</h1>
          <div class="company__role">
            <ul class="company__role-list">
              <li v-for="role in career.role" :key="role">{{ role }}</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="timeline">
        <div class="company__summary">
          <h2 class="section__title">주요 프로젝트 및 기여도</h2>
          <div class="timeline-wrapper">
            <div class="timeline-line"></div>

            <div class="timeline-list">
              <div
                v-for="(project, projectIndex) in career.projects"
                :key="`${career.company}-${project.title}-${projectIndex}`"
                :ref="(el) => setTimelineItem(el, careerIndex, projectIndex)"
                class="timeline-item"
                :class="{
                  'is-active':
                    activeProjectKey === `${careerIndex}-${projectIndex}`,
                }"
              >
                <div class="timeline-bullet"></div>

                <div class="career-card">
                  <div class="career-card__header">
                    <span class="date">{{ project.period }}</span>
                    <h2 class="project-name">{{ project.title }}</h2>
                  </div>

                  <div class="career-card__body">
                    <div class="tech-tags">
                      <span
                        v-for="tech in getFormattedTechStack(project.techStack)"
                        :key="`${project.title}-${tech.type}-${tech.name}`"
                        :class="['tag--tech', `tag--${tech.type}`]"
                      >
                        {{ tech.name }}
                      </span>
                    </div>

                    <p class="summary">{{ project.summary }}</p>

                    <ul class="bullet-list">
                      <li
                        v-for="(bullet, bIndex) in project.summaryList"
                        :key="`${project.title}-${bIndex}`"
                      >
                        {{ bullet }}
                      </li>
                    </ul>
                  </div>

                  <div class="career-card__footer">
                    <button
                      type="button"
                      class="btn--more"
                      :aria-expanded="isDetailOpen(careerIndex, projectIndex)"
                      @click="toggleDetailOpen(careerIndex, projectIndex)"
                    >
                      {{
                        isDetailOpen(careerIndex, projectIndex)
                          ? "상세 업무 접기 ▲"
                          : "상세 업무 더보기 ▼"
                      }}
                    </button>
                  </div>

                  <transition name="slide-fade">
                    <div
                      v-show="isDetailOpen(careerIndex, projectIndex)"
                      class="career-detail-panel"
                    >
                      <div
                        v-for="(detail, detailIndex) in project.details ?? []"
                        :key="`${project.title}-detail-${detailIndex}`"
                        class="detail-section"
                      >
                        <h3 class="detail-section__title">
                          {{ detail.title }}
                        </h3>
                        <p class="detail-section__desc">
                          {{ detail.contribution }}
                        </p>
                        <ul class="bullet-list bullet-list__circle">
                          <li
                            v-for="(content, contentIndex) in detail.contents"
                            :key="`${project.title}-detail-${detailIndex}-content-${contentIndex}`"
                          >
                            {{ content }}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>

    <section class="trouble-shooting">
      <div class="trouble-shooting__list"></div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { careers } from "@/data/careers";
import type { TechStackGroup } from "@/types/career";
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

// 프로젝트별로 기술 스택을 평탄화(Flatten)하여 카테고리 정보와 함께 반환
const getFormattedTechStack = (techStack: TechStackGroup | string[]) => {
  if (Array.isArray(techStack)) {
    return techStack.map((name) => ({ name, type: "frontend" }));
  }

  return [
    ...(techStack.frontend || []).map((name) => ({ name, type: "frontend" })),
    ...(techStack.backend || []).map((name) => ({ name, type: "backend" })),
    ...(techStack.visualization || []).map((name) => ({
      name,
      type: "visualization",
    })),
    ...(techStack.qa || []).map((name) => ({ name, type: "qa" })),
    ...(techStack.automation || []).map((name) => ({
      name,
      type: "automation",
    })),
  ];
};

const activeProjectKey = ref("0-0"); // 초기값: 첫 회사, 첫 프로젝트
const timelineRefs = ref<HTMLElement[]>([]);

const detailOpenByKey = ref<Record<string, boolean>>({});

const detailKey = (careerIdx: number, projectIdx: number) =>
  `${careerIdx}-${projectIdx}`;

const isDetailOpen = (careerIdx: number, projectIdx: number) =>
  !!detailOpenByKey.value[detailKey(careerIdx, projectIdx)];

const toggleDetailOpen = (careerIdx: number, projectIdx: number) => {
  const key = detailKey(careerIdx, projectIdx);
  detailOpenByKey.value = {
    ...detailOpenByKey.value,
    [key]: !detailOpenByKey.value[key],
  };
};
const setTimelineItem = (
  el: Element | { $el?: Element } | null,
  careerIdx: number,
  pIdx: number,
) => {
  const target = el instanceof Element ? el : (el?.$el ?? null);

  if (!target) return;
  if (!(target instanceof HTMLElement)) return;

  target.dataset.key = `${careerIdx}-${pIdx}`;
  timelineRefs.value.push(target);
};

let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeProjectKey.value =
            (entry.target as HTMLElement).dataset.key || "0-0";
        }
      });
    },
    {
      rootMargin: "-30% 0% -30% 0%",
      threshold: 0.2,
    },
  );

  timelineRefs.value.forEach((el) => observer?.observe(el));
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/common.scss";
@use "@/assets/scss/pages/career.scss";
</style>
