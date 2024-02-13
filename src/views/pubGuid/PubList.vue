<template>
  <div>
    <ModalView
      v-if="isModalViewed" 
      v-model="isAuth" 
      @closeModal="isAuth = false"
      modalTitle="비밀번호 확인"
      modalSize="500"
    >
      <template #content>
        <div class="check-pwd">
          <input class="check__text" v-model="checkPwd"  @keyup.enter="clickPwd" placeholder="비번 입력 후 입장 가능합니다." />
          <Button
            types="btn-primary-line"
            size="medium"
            buttonName="확인"
            @click="clickPwd"
          />          
         </div>
      </template>       
    </ModalView> 
    <div class="content__wrap" v-if="isSuccess">
      <Title 
          :level="2" 
          pageTitle="퍼블리스트"
      />
      <ul class="ia-note-desc">
        <li>※ IA 기준으로 목록 업데이트 필요</li>
        <li>- 완료시 상태항목에 [완료]</li>
        <li>- 상태값에 [완료] 문구 등록시 완료페이지로 표시됨.</li>
        <li>- 규칙이나 공지가 필요한 사항 지속 추가 예정</li>
      </ul>    
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import guideKey from '@/utils/guideKey'  
  import { useRoute, useRouter } from 'vue-router'

  const isAuth = ref(true)
  const checkPwd = ref('')
  const isSuccess = ref(false)

  const route = useRoute()
  const router = useRouter()
  const isModalViewed = ref(true)

  const clickPwd = () => {
    if (checkPwd.value === guideKey) {
      isSuccess.value = true
      isModalViewed.value = false
    } else {
      alert('잘못된 비밀번호을 입력하셨습니다.')
    }
  }  
</script>