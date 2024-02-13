<template>
  <div class="content-wrap">
    <Title 
      :level="2" 
      pageTitle="아코디언 메뉴"
    />
    <div class="discription-text">
      아코디언 메뉴에 대한 가이드입니다.
    </div>
    <div style="padding: 50px 0;">
      <Accordion>
        <AccordionItem>
          <template #accordion-title>
            <span class="accordion-cate">
              Q
            </span>
            <p class="accordion-title__title"><span>FAQ 항목입니다.</span><i class="ico-attach"></i></p>
          </template>
          <template #accordion-content>
            <span class="accordion-cate">
              A
            </span>
            <div class="attach-area">
               <span class="attach-title">첨부파일</span>
               <ul class="attach-list">
                  <li>
                    <a href="#" download><span class="file-name">첨부파일명</span>
                      <i class="ico-download"></i>
                    </a>
                  </li>
               </ul>
            </div>
            <div class="faq-content">컨텐츠</div>
          </template>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Accordion from '@/components/accodiun/accordion.vue'
import AccordionItem from '@/components/accodiun/accordion-item.vue'


</script>

<style>

</style>