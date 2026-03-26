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
        <p class="company__period">{{ primaryCareer.period }}</p>
      </div>

      <div class="company__summary"></div>
    </section>

    <section class="history-section">
      <div class="history-title-wrap">
        <span class="history-dot"></span>
        <h2 class="history-title">기간별</h2>
      </div>

      <div class="history-list">
        <article
          v-for="career in careers"
          :key="career.company"
          class="history-card"
        >
          <p class="history-company">{{ career.company }}</p>
          <p class="history-role">{{ career.role }}</p>
          <p class="history-date">{{ career.period }}</p>
        </article>
      </div>
    </section>

    <section class="detail-section">
      <p class="detail-title">&lt; 역할/기여 &gt;</p>
      <ul class="detail-list">
        <li
          v-for="career in careers"
          :key="`${career.company}-${career.period}`"
        >
          {{ career.company }} / {{ career.role }}
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup lang="ts">
import { careers } from "~/assets/data/careers";
import type { Career } from "~/types/career";

const primaryCareer: Career = careers[0] ?? {
  type: "",
  company: "COMPANY",
  role: "",
  period: "YY.MM.DD",
  link: "",
};
</script>

<style lang="scss" scoped>
@use "@/assets/scss/pages/common.scss";
@use "@/assets/scss/pages/career.scss";
</style>
