<template>
  <div class="content__wrap">
    <div class="location__area">
      <div class="page-title">
        <h2>정산자동화</h2>
        <span>Settlement automation</span>
      </div>
      <div class="breadcrumb">
        정산관리 <span>></span> 정산자동화
      </div>
    </div>
    <div class="cont">
      <div class="data-list">
          <div class="table-top__section">
            <div class="counter-data">
              대상년월 : 2023.12
            </div>
            <div class="button__wrap flex-end">
                <MyBtn                            
                    buttonName="한전업로드"                  
                    iconName="icon-uploadicon"
                    iconDirection="icon-left"
                    color="btn tertiary"                    
                    size="medium"                   
                >  
                </MyBtn>
                <MyBtn                            
                    buttonName="정산서반영"                  
                    iconName="icon-refresh-cw"
                    iconDirection="icon-left"
                    color="btn success"                    
                    size="medium"                   
                >  
                </MyBtn>                          
                <MyBtn                            
                    buttonName="전체 다운로드"
                    type="text"
                    iconName="icon-file-text"
                    iconDirection="icon-left"
                    color="btn success"                    
                    size="medium"                   
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
                <col width="" />
                <col width="7%" />
                <col width="7%" />
                <col width="7%" />
                <col width="7%" />
                <col width="7%" />
                <col width="7%" />
                <col width="7%" />
                <col width="7%" />
                <col width="7%" />
                <col width="7%" />
                <col width="7%" />
                <col width="7%" />
            </template>
            <template #thead>
                <tr>
                    <th scope="col" rowspan="2">매방명</th>
                    <th scope="col" colspan="2">물류매출</th>
                    <th scope="col">웰포스</th>
                    <th scope="col" colspan="4">머니온</th>
                    <th scope="col" colspan="3">페이코</th>
                    <th scope="col" rowspan="2">시크릿오더</th>
                    <th scope="col" rowspan="2">한전</th>
                </tr>
                <tr>
                    <th scope="col">과세</th>
                    <th scope="col">면세</th>
                    <th scope="col">현금</th>
                    <th scope="col">카드</th>
                    <th scope="col">카드(백업)</th>
                    <th scope="col">현금</th>
                    <th scope="col">현금(백업)</th>
                    <th scope="col">총주문금액</th>
                    <th scope="col">결제금액</th>
                    <th scope="col">페이코쿠폰</th>
                </tr>                
            </template>    
            <template #tbody>
                <tr 
                    v-for="data in 5"
                    :key="data"                >
                    <td><span>남서울대학교</span></td>
                    <td>55,000,000</td>
                    <td>55,000,000</td>
                    <td>55,000,000</td>
                    <td>55,000,000</td>
                    <td>55,000,000</td>
                    <td>55,000,000</td>
                    <td>55,000,000</td>
                    <td>55,000,000</td>
                    <td>55,000,000</td>                    
                    <td>55,000,000</td>
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
const options = [
  {
    title: '장로신학대학',
    code: 'item1',
  },
  {
    title: '장로신학대학2',
    code: 'item2',
  }
]
const vselected = ref('장로신학대학')
const selected = ref('')
const changeSelected = (option) => {  
  selected.value = option.title
}
</script>