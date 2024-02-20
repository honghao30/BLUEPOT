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
                    v-model="vselected"
                    :options="options1"
                    placeholder="년도 선택하세요" 
                  />
                  <VSelect                    
                    v-model="vselected"
                    :options="options2"
                    placeholder="월 선택하세요" 
                  />
                  <VSelect                    
                    v-model="vselected"
                    :options="options3"
                    placeholder="상호명 선택하세요" 
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
                    v-for="data in tableData"
                    :key="data.index"                
                  >
                    <td>{{ data.No }}</td>                    
                    <td>{{ data.year }}</td>
                    <td>{{ data.month }}</td>
                    <td class="text-l">{{ data.subject }}</td>
                    <td>{{ data.storeName }}</td>
                    <td>{{ data.ownerName }}</td>
                    <td>{{ data.settlementFee }}</td>
                    <td>{{ data.data }}</td>
                </tr>
            </template>               
          </MyTable>          
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import tableData4 from "./tempData/tableData4";
const tableData = reactive(tableData4)

const keyword = ref('')
const options1 = [
  {
    title: '2012',
    code: 'item1',
  },
  {
    title: '2013',
    code: 'item2',
  }
]
const options2 = [
  {
    title: '1월',
    code: 'item1',
  },
  {
    title: '2월',
    code: 'item2',
  }
]
const options3 = [
  {
    title: '정해인 주식회사',
    code: 'item1',
  },
  {
    title: '정해인 주식회사',
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