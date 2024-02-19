<template>
  <div class="content__wrap">
    <div class="location__area">
      <div class="page-title">
        <h2>정산서조회</h2>
        <span>Search for Settlement Statement</span>
      </div>
      <div class="breadcrumb">
        정산관리 <span>></span> 정산서조회
      </div>
    </div>
    <div class="cont">
      <div class="data-list">
        <div class="search__list-top">
              <form @submit.prevent="search">
                <VSelect
                    title="물류 선택"
                    v-model="vselected"
                    :options="options"
                    placeholder="물류 선택 선택하세요" 
                  />
                  <VSelect
                    title="물류 선택"
                    v-model="vselected"
                    :options="options"
                    placeholder="물류 선택 선택하세요" 
                  />
                  <VSelect
                    title="물류 선택"
                    v-model="vselected"
                    :options="options"
                    placeholder="물류 선택 선택하세요" 
                  />                                                                       
                <MyBtn         
                    type="submit"                  
                    buttonName="검색"
                    color="btn darkSuccess"                    
                    size="small"                   
                >  
                </MyBtn>                    
              </form>
          </div> 
          <!-- //table     -->
          <MyTable
            tableName="정산자동화"
            types="list"        
          >
            <template #colWidth>
                <col width="9%" />
                <col width="9%" />
                <col width="9%" />                
                <col width="" />
                <col width="9%" />
                <col width="9%" />
                <col width="9%" />
                <col width="9%" />
            </template>
            <template #thead>
                <tr>
                    <th scope="col">NO</th>
                    <th scope="col">년</th>
                    <th scope="col">월</th>
                    <th scope="col">제목</th>
                    <th scope="col">매장명</th>
                    <th scope="col">점주명</th>
                    <th scope="col">정산금(원)</th>
                    <th scope="col">등록일</th>   
                </tr>                
            </template>    
            <template #tbody>
                <tr 
                    v-for="data in 5"
                    :key="data"                
                  >
                    <td>186</td>                    
                    <td>2023</td>
                    <td>12</td>
                    <td>BLUE POT(블루포트)2023년 12월 정산서</td>
                    <td>나주 영산포</td>
                    <td>정해인</td>
                    <td>55,000,000</td>
                    <td>55,000,000</td>
                </tr>
            </template>               
          </MyTable>          
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps, defineEmits, onBeforeMount, onUnmounted } from 'vue'
const keyword = ref('')
const options = [
  {
    title: '필드명',
    code: 'item1',
  },
  {
    title: '필드명',
    code: 'item2',
  }
]
const vselected = ref('필드명')
const selected = ref('')
const changeSelected = (option) => {  
  selected.value = option.title
}
const search = () => {
  console.log('검색')
}
const insertField = () => {
  console.log('등록')
}
</script>