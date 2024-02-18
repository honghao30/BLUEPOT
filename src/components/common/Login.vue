<template>
    <div class="member-page__form">
        <p class="title">로그인이 필요한 서비스입니다.</p>
        <form @submit.prevent="submitLogin">
            <ul>
                <li>
                    <MyInput >
                        <template #input>
                            <InputEl                                        
                                v-model="userInfo.userId"
                                required                                                
                                placeholder="아이디를 입력하세요" 
                                :guideMsg="guideMsgId" 
                                :errorMsg="error.idErrorMsg"                                                                   
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
                                :guideMsg="guideMsgPw"                                      
                                placeholder="비밀번호를 입력하세요"  
                                :errorMsg="error.pwErrorMsg"                                                                          
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
                    size="medium"                        
                >  
                </MyBtn>   
                <MyBtn                            
                    buttonName="취소"                        
                    color="btn secondary"
                    size="medium"
                    @click="$router.go(-1)" 
                >  
                </MyBtn>                    
            </div>   
            <div class="help-msg">
                <router-link to="/Register">
                    회원가입
                </router-link>
                <router-link to="#" @click="isAlert(event)">
                    아이디 찾기
                </router-link>                           
                <router-link to="#" @click="isAlert(event)">
                    비밀번호 찾기
                </router-link>                          
            </div>          
        </form>
    </div>  
</template>

<script setup>

</script>

<style>

</style>