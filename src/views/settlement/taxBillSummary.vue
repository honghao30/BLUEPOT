<template>
  <div class="content__wrap">
    <div class="location__area">
      <div class="page-title">
        <h2>입금/세금계산서/총괄표</h2>
        <span>Deposit/Tax bill/Summary</span>
      </div>
      <div class="breadcrumb">
        정산관리 <span>></span> 입금/세금계산서/총괄표
      </div>
    </div>
    <div class="cont">
      <div class="data-list">
          <div class="data-input__section--box two-column">
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
                  <MyBtn         
                      type="submit"                  
                      buttonName="검색"
                      color="btn darkSuccess"                    
                      size="small"                   
                  >  
                  </MyBtn>                    
                </form>
            </div> 
            <div class="button__wrap flex-end">                       
                <MyBtn                            
                    buttonName="전체 다운로드"
                    type="text"
                    iconName="icon-file-text"
                    iconDirection="icon-left"
                    color="btn success"                    
                    size="small"                   
                >  
                </MyBtn>
            </div>               
          </div>
          <!-- //table     -->
          <MyTable
            tableName="정산자동화"
            types="list"        
          >
            <template #colWidth>
                <col width="8%" />
                <col width="10%" />
                <col width="10%" />                
                <col width="10%" />
                <col width="15%" />
                <col width="10%" />
                <col width="15%" />
                <col width="" />
            </template>
            <template #thead>
                <tr>
                    <th scope="col" rowspan="2">NO</th>
                    <th scope="col" rowspan="2">년</th>
                    <th scope="col" rowspan="2">월</th>                    
                    <th scope="col" colspan="2">입금정보</th>
                    <th scope="col" colspan="2">세금계산서</th>
                    <th scope="col" rowspan="2">총괄표</th>                    
                </tr>
                <tr>
                    <th scope="col">매장수</th>
                    <th scope="col">합계</th>
                    <th scope="col">매장수</th>
                    <th scope="col">합계</th>
                </tr>                
            </template>    
            <template #tbody>
                <tr 
                  v-for="data in 5"
                  :key="data"                
                >
                    <td>5</td>                    
                    <td>2022</td>
                    <td>01</td>
                    <td>190</td>
                    <td>55,000,000</td>
                    <td>190</td>
                    <td>55,000,000</td>
                    <td>

                    </td>
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