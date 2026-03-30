<template>
  <main class="portfolio portfolio--subpage">
    <article
      v-for="(career, careerIndex) in careers"
      :key="career.company"
      class="career-group"
    >
      <section class="company">
        <p class="intro__tag">Company {{ careerIndex + 1 }}</p>
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
                  'is-active': activeProjectKey === `${careerIndex}-${projectIndex}`,
                }"
              >
                <div class="timeline-bullet"></div>

                <div class="career-card">
                  <div class="career-card__header">
                    <span class="date">{{ project.period }}</span>
                    <div class="tech-tags">
                      <span
                        v-for="tech in project.techStack"
                        :key="tech"
                        class="tag--tech"
                        >{{ tech }}</span
                      >
                    </div>
                  </div>

                  <h2 class="role">{{ project.role.join(" / ") }}</h2>

                  <div class="company-info">
                    <span class="company-name">{{ project.title }}</span>
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
import { careers } from "~/assets/data/careers";
import { ref, onMounted, onBeforeUnmount } from "vue";

const activeProjectKey = ref("0-0"); // 초기값: 첫 회사, 첫 프로젝트
const timelineRefs = ref<HTMLElement[]>([]);
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
