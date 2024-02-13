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
        pageTitle="규칙 & 설계 가이드"
    />
    <Title 
        :level="3" 
        pageTitle="규칙"
    />    
    <div class="wsg-guide__wrap--gray-box">
      <ul class="ia-note-desc">
        <li>- 본 가이드는 개발팀 및 Vue의 폴더 구조에 따르며 scss의 경로 및 마크업에 해당하는 부분에 대해서 가이드 합니다.</li>
        <li>- element-ui를 사용한 ui는 본 가이드가 적용되지 않습니다.</li>
      </ul>
    </div>
    <Title 
        :level="3" 
        pageTitle="폴더 구조"
    />   
    <ul class="ia-note-desc">
      <li>2023 프로젝트 고도화_개발가이드 v1.0_230412 문서의 구조를 따릅니다.</li>
      <li>퍼블리싱 관련 파일 위치 안내 입니다.</li>
    </ul>
    <Title 
        :level="3" 
        pageTitle="네이밍 규칙"
    />
    <ul class="ia-note-desc">
      <li>컴포넌트 기반의 웹 개발론에 최적화된 BEM 방식을 사용합니다.</li>
      <li>이름은 아래 표기법 정의에 따라 각 영문 대/소문자, 숫자, 하이픈(-)을 사용하여 작성합니다.</li>
      <li>네이밍의 조합은 형태-의미-순서-상태 순으로 사용합니다. </li>
      <li>언더스코어는 파일, 폴더, 이미지 등에만 사용합니다(background_asset_01.png)</li>
    </ul>
    <Title 
        :level="3" 
        pageTitle="SCSS 파일 명"
    />
    <table class="wsg-table-body">
        <caption>SCSS 폴더 명</caption>
        <colgroup>
          <col style="width:20%">
          <col style="width:20%">
          <col style="width:30%">
          <col>
        </colgroup>
        <thead>
          <tr>
            <th>분류 폴더</th>
            <th>구분 폴더</th>
            <th>파일이름</th>
            <th>설명</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>assets/scss</td>
            <td>common</td>
            <td>공통</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>components</td>
            <td>components 별 scss</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>views</td>
            <td>각 메뉴별 scss</td>
            <td></td>
          </tr>
        </tbody>
      </table>
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

<style lang="scss">
    .content__wrap {
      width: 98%;
      margin: 0 auto;
      padding: 50px 0;
    }
    .wsg-guide-body {margin-top: 30px;}
    .wsg-table-body {
        width: calc(100% + 2px); 
        table-layout: fixed; 
        border-top: 1px solid #96acbf;
        margin-bottom:20px;
        th {
            background-color: #f4f8fb;
            border-right: 1px solid #d9e3ea;
        }
        th,
        td
        {
            height: 50px; 
            vertical-align: middle; 
            text-align: left; 
            line-height: 13px; 
            font-size: 13px;         
            line-height: 1.5;
            border-bottom: 1px solid #d9e3ea;
            padding-left:20px;
            &:first-child,
            &:last-child {border-left: 0;}
        }
        th[rowspan], 
        td[rowspan] {
            border-right: 1px solid #d9e3ea;
        }
    }
    .wsg-guide__wrap--gray-box {
      background: #ccc;
      padding: 10px;
    }
    ul.ia-note-desc {
        > li {
            position: relative; 
            padding: 1px 0 5px 10px; 
            font-size: 14px;
            &:before {
                content: ''; 
                position: absolute; 
                left: 0; 
                top: 10px; 
                display: block; 
                width: 2px; 
                height: 2px; 
                background: #555; 
                border-radius: 50%;
            }
        }
        &:last-child {margin-bottom: 0;}
        li + li {margin-top: 5px;}
    }
</style>
