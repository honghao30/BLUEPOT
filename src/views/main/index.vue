<template>
  <div class="login-page__wrap">
    <div class="login__wrap">
      <div class="login-form__area">
          <h1>
            <img src="../../assets/images/login/login-title.svg" alt="WELCOME 블루팟에 오신 것을 환영합니다. 아이디와 비밀번호를 입력하세요" />
          </h1>
          <form @submit.prevent="submitLogin">
            <ul>
                <li>
                    <MyInput >
                        <template #input>
                            <InputEl                                        
                                v-model="userInfo.userId"
                                required                                                
                                placeholder="아이디를 입력하세요"                                                                
                            />                
                        </template>         
                    </MyInput>                          
                </li>
                <li>
                    <MyInput >
                        <template #input>
                            <InputEl                                        
                                v-model="userInfo.password"
                                required     
                                types="password"   
                                placeholder="비밀번호를 입력하세요"                                     
                            />                
                        </template>         
                    </MyInput>                          
                </li>                    
              </ul>     
              <div class="button__wrap">
                <MyBtn                            
                    buttonName="로그인"
                    type="submit"
                    color="btn primary"                    
                    size="medium wd-full" 
                    :disabled="!userInfo.userId || !userInfo.password"
                >  
                </MyBtn>
            </div>                          
          </form>
          <div class="login-help">
            <router-link to="#" class="icon-id">
                아이디 찾기
            </router-link>
            <router-link to="#" class="icon-pw">
                비밀번호 찾기
            </router-link>    
          </div>
      </div>
      <!-- //로그인 -->
      <div class="login-page__images">
        <img src="../../assets/images/login/login-image.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
 import { reactive, ref, onMounted } from 'vue'
 import { router } from '@/router'

 const userInfo = reactive(
  {
    userId: '',
    password: ''
  }
)

const submitLogin = () => {  
  alert('로그인 되었습니다.') // 개발시 삭제
  router.push({ name: 'ConnectionManagement' })

}

</script>

<style lang="scss">
html, body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  .wrap {
    width: 100%;
    height: 100%;
  }
}
</style>
