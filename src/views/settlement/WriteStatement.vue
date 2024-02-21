<template>
  <div class="content__wrap">
    <div class="location__area">
      <div class="page-title">
        <h2>정산서작성</h2>
        <span>Write a settlement statement</span>
      </div>
      <div class="breadcrumb">
        정산관리 <span>></span> 정산서작성
      </div>
    </div>
    <div class="cont">
      <div class="data-list">
          <div class="table-top__section">
            <div class="counter-data">
              대상년월 : 2023.12
            </div>
          </div>
          <div class="data-input__section--box">
            <div class="search__section">
                <form @submit.prevent="search">
                  <MyInput >
                      <template #input>
                          <InputEl                                        
                              v-model="keyword"
                              required                                                
                              placeholder="매장명"                                                                
                          />                
                      </template>         
                  </MyInput>                     
                  <MyBtn         
                      type="submit"                  
                      buttonName="검색"
                      color="btn darkSuccess"                    
                      size="small"                   
                  >  
                  </MyBtn>                    
                </form>
            </div>
            <div class="field-input__section">
              <form @submit.prevent="insertField">
                <strong>일괄입력</strong>
                <VSelect                  
                  v-model="vselected"
                  :options="options"
                  placeholder="필드명" 
                />                    
                <MyInput >
                    <template #input>
                        <InputEl                                        
                            v-model="keyword"
                            required                                                
                            placeholder="금액"                                                                
                        />                
                    </template>         
                </MyInput>                     
                <MyBtn         
                    type="submit"                  
                    buttonName="정산서 반영"
                    color="btn darkSuccess" 
                    iconName="icon-refresh-cw"
                    iconDirection="icon-left"                                       
                    size="small"                   
                >  
                </MyBtn>  
              </form>
            </div>
            <div class="button__wrap flex-end">
                <MyBtn                            
                    buttonName="저장"
                    color="btn darkSuccess"                    
                    size="small"                   
                >  
                </MyBtn>                          
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
          <div class="page-stitle">
            <h3>정산서</h3>
          </div>
          <!-- //table     -->
          <MyTable
            tableName="정산자동화"
            types="list"        
          >
            <template #colWidth>
                <col width="" />
                <col width="9%" />
                <col width="9%" />                
                <col width="9%" />
                <col width="9%" />
                <col width="9%" />
                <col width="9%" />
                <col width="9%" />
                <col width="9%" />
                <col width="9%" />
            </template>
            <template #thead>
                <tr>
                    <th scope="col" rowspan="2">매장명</th>
                    <th scope="col" colspan="2">상품매출액</th>                    
                    <th scope="col" colspan="6">상품매출액</th>
                    <th scope="col" rowspan="2">상품대</th>                    
                </tr>
                <tr>
                    <th scope="col">현금</th>
                    <th scope="col">신용(체크)카드</th>

                    <th scope="col">임대료</th>
                    <th scope="col">관리비</th>
                    <th scope="col">전기요금</th>
                    <th scope="col">도시가스</th>
                    <th scope="col">인터넷</th>
                    <th scope="col">기타경비</th>   
                </tr>                
            </template>    
            <template #tbody>
                <tr v-for="(data, index) in tableData" :key="index">
                    <td class="text-l">
                      <span class="checkbox">
                        <input type="checkbox" name="checkbox" :id="`check${data.No}`" @change="toggleModal(index)" />
                        <label :for="`check${data.No}`"><span class="irtext">설정</span></label>
                      </span>                        
                      {{ data.storeName }}
                      <ModalView
                        v-if="isModalViewed[index]"
                        @closeModal="closeModal(index)"                             
                        :dim="false"
                        modalSize="244"
                        :style="{ position: 'absolute', top: '36px', left: '0' }"
                      >
                        <template #content>
                          <div class="modal-search-item">
                            <MyInput >
                                <template #input>
                                    <InputEl                                        
                                        v-model="keyword"
                                        required                                                
                                        placeholder="열 검색"                                                                
                                    />                
                                </template>         
                            </MyInput>  
                          </div>
                          <div class="modal-item-list">
                              <ul>
                                <li v-for="(item, i) in thItems" :key="i">
                                  <div class="switch" role="switch">
                                    <input type="checkbox" :id="`switch${i}`" v-model="checked[i]" @change="ChangeCheckbox(i)">
                                    <label class="switch__core" :for="`switch${i}`"></label>
                                  </div>
                                  {{ item }}
                                </li>                                                                                              
                              </ul>
                          </div>                          
                        </template> 
                        <template #footer>
                          <div class="item-show-hide-button">
                            <MyBtn                            
                                buttonName="모두숨기기" 
                                color="btn default-text"                    
                                size="text-size"     
                                @click="hideAll"              
                            >  
                            </MyBtn>
                            <MyBtn                            
                                buttonName="모두보이기"                  
                                color="btn default-text"                    
                                size="text-size"   
                                @click="showAll(index, data)"                
                            >  
                            </MyBtn>                                                     
                          </div>
                        </template>       
                      </ModalView>                       
                    </td>                    
                    <td>{{ data.ProductSales.cash }}</td>
                    <td>{{ data.ProductSales.card }}</td>
                    <td>{{ data.ProductSales2.rent }}</td>
                    <td>{{ data.ProductSales2.maintenanceCost }}</td>
                    <td>{{ data.ProductSales2.electricityBill }}</td>
                    <td>{{ data.ProductSales2.cityGas }}</td>
                    <td>{{ data.ProductSales2.internet }}</td>
                    <td>{{ data.ProductSales2.order }}</td>
                    <td>{{ data.ProductRange }}</td> 
                </tr>
            </template>               
          </MyTable>          
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue'
import tableData3 from "./tempData/tableData3";
const tableData = reactive(tableData3)
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
const isModalViewed = ref(Array(tableData.length).fill(false));

const toggleModal = (index) => {
  isModalViewed.value[index] = !isModalViewed.value[index];
};
const closeModal = (index) => {
  isModalViewed.value[index] = false;
}

const thItems = ref(['임대료','관리비', '전기요금', '관리비','인터넷', '기타']);
const checked = ref(thItems.value.map(() => true));

const ChangeCheckbox = (index) => {
  console.log(`체크박스의 상태: ${index}, ${checked.value[index]}`);
}
const hideAll = () => {
  for(let i = 0; i < checked.value.length; i++) {
    checked.value[i] = false; 
  }
  console.log(checked.value);
};

const showAll = () => {  
  for(let i = 0; i < checked.value.length; i++) {
    checked.value[i] = true; 
  }
  console.log(checked.value);
};
</script>
