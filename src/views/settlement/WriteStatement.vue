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
                              placeholder="검색어를 입력하세요"                                                                
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
                  placeholder="필드명 선택하세요" 
                />                    
                <MyInput >
                    <template #input>
                        <InputEl                                        
                            v-model="keyword"
                            required                                                
                            placeholder="금액 입력하세요"                                                                
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
                <tr 
                    v-for="data in 5"
                    :key="data"                
                  >
                    <td class="text-l">
                      <span class="checkbox">
                        <input type="checkbox" name="checkbox" id="radio1" />
                        <label for="radio1"><span class="irtext">설정</span></label>
                      </span>                        
                      남서울대학교
                      <ModalView
                        v-if="isModalViewed" @closeModal="isModalViewed = false"            
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
                                        placeholder="검색어를 입력하세요"                                                                
                                    />                
                                </template>         
                            </MyInput>  
                          </div>
                          <div class="modal-item-list">
                              <ul>
                                <li>
                                  <div class="switch" role="switch">
                                    <input type="checkbox" id="switch1" v-model="switchs">
                                    <label class="switch__core" for="switch1"></label>
                                  </div>
                                  항목1
                                </li>
                                <li>
                                  <div class="switch" role="switch">
                                    <input type="checkbox" id="switch2" v-model="switchs">
                                    <label class="switch__core" for="switch2"></label>
                                  </div>
                                  항목2
                                </li>
                                <li>
                                  <div class="switch" role="switch">
                                    <input type="checkbox" id="switch3" v-model="switchs">
                                    <label class="switch__core" for="switch3"></label>
                                  </div>
                                  항목3
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
                            >  
                            </MyBtn>
                            <MyBtn                            
                                buttonName="모두보이기"                  
                                color="btn default-text"                    
                                size="text-size"                   
                            >  
                            </MyBtn>                                                     
                          </div>
                        </template>       
                      </ModalView>                       
                    </td>                    
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
const switchs = ref('')

const isModalViewed = ref(false)

const modalShow = () => {  
  isModalViewed.value = false
}
</script>