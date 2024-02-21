<template>
  <div>
    <div class="content__wrap">
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
        <li>- 본 가이드는 폴더 구조및scss의 경로 및 마크업에 해당하는 부분에 대해서 가이드 합니다.</li>
      </ul>
    </div>
    <Title 
        :level="3" 
        pageTitle="폴더 구조"
    />   
    <ul class="ia-note-desc">      
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
            <td>layout scss</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    <Title 
      :level="3" 
      pageTitle="칼라코드"
    />
    <table class="wsg-table-body">
        <caption>칼라</caption>
        <colgroup>
          <col style="width:30%">
          <col style="*">          
          <col>
        </colgroup>
        <tbody>
          <tr>
            <th>$defaultColor:</th>
            <td> #000000</td>
          </tr>
          <tr>
            <th>$grayColor:</th>
            <td>#939393</td>
          </tr>
          <tr>
            <th>$blackColor:</th>
            <td> #242021</td>
          </tr>
          <tr>
            <th>$primary:</th>
            <td>#7FA7CA</td>
          </tr>
          <tr>
            <th>$secondary:</th>
            <td>#E1F0FF</td>
          </tr>
          <tr>
            <th>$successColor: </th>
            <td>#41D0C8</td>
          </tr>
          <tr>
            <th>$darkSuccessColor: </th>
            <td>#23B4D4</td>
          </tr>
          <tr>
            <th>$infoColor: </th>
            <td>#5F5F5F</td>
          </tr>
          <tr>
            <th>$dangerColor: </th>
            <td>#000</td>
          </tr>
          <tr>
            <th>$tableBorderColor: </th>
            <td>#D9D9D9</td>
          </tr>
          <tr>
            <th>$tertiaryColor:</th>
            <td>#D1D423</td>
          </tr>
        </tbody>
      </table>   
      <Title 
      :level="3" 
      pageTitle="컴포넌트 가이드"
      noTicText="모든 컴포넌트는 plugin등록을 해서 별도의 import없이 사용 가능"
    />
    <table class="wsg-table-body">
        <caption>컴포넌트</caption>
        <colgroup>
          <col style="width:30%">
          <col style="*">          
          <col>
        </colgroup>
        <tbody>
          <tr>
            <th>버튼</th>
            <td>
                - 버튼 컴포넌트 MyBtn <br>
                &lt;MyBtn                            
                    buttonName="버튼명 전달"  <br>                
                    iconName="icon-uploadicon 아이콘 사용시 아이콘명"<br>
                    iconDirection="icon-left 아이콘 위치"<br>
                    color="btn tertiary 칼라 디자인"         <br>           
                    size="medium 크기"<br>
                &gt;  
                &lt;/MyBtn&gt;              

            </td>
          </tr>
          <tr>
            <th>Input</th>
            <td>
                - Input 컴포넌트 MyInput <br>
                &lt;MyInput&gt; <br>    
                      &lt;template #input&gt;
                           &lt;InputEl        <br>                                     
                              v-model="keyword" <br>    
                              required             <br>                                        
                              placeholder="매장명"      <br>                                                               
                          /&gt;         <br>           
                      &lt;/template&gt;    <br>          
                  &lt;/MyInput&gt;             

            </td>
          </tr>
          <tr>
            <th>Select</th>
            <td>
                - Select 컴포넌트 VSelect <br>
                &lt;VSelect <br>    
                    title="시크릿오더 선택" <br>    
                    v-model="vselected" <br>    
                    :condition="!options6" <br>    
                    :options="options6" <br>    
                    placeholder="시크릿오더 선택 선택하세요"  <br>    
                /&gt;               

            </td>
          </tr>               
        </tbody>
      </table>
      <p>그외 컴포넌트는 props구조를 통해 확인 바람.</p>           
  </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import guideKey from '@/utils/guideKey'  
  import { useRoute, useRouter } from 'vue-router'
  
  const route = useRoute()
  const router = useRouter()

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
            height: 40px; 
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
