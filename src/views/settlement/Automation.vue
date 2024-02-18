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
          <div class="button__wrap flex-end">
              <MyBtn                            
                  buttonName="전체 다운로드"
                  type="submit"
                  iconName="icon-file-text"
                  iconDirection="icon-left"
                  color="btn success"                    
                  size="medium"                   
              >  
              </MyBtn>
          </div>       
          <!-- //table     -->
          <MyTable
            tableName="정산자동화"
            types="list"        
          >
            <template #colWidth>
                <col width="6%" />
                <col width="7%" />
                <col width="11%" />
                <col width="11%" />
                <col width="11%" />
                <col width="11%" />
                <col width="11%" />
                <col width="11%" />
                <col width="11%" />
            </template>
            <template #thead>
                <tr>
                    <th scope="col">NO</th>
                    <th scope="col">브랜드</th>
                    <th scope="col">상호</th>
                    <th scope="col">물류</th>
                    <th scope="col">웨이브포스</th>
                    <th scope="col">머니온</th>
                    <th scope="col">샘플러스</th>
                    <th scope="col">페이코</th>
                    <th scope="col">시크릿오더</th>
                    <th scope="col">한전온</th>
                </tr>
            </template>    
            <template #tbody>
                <tr 
                    v-for="data in 1"
                    :key="data"
                >
                    <td><span>186</span></td>
                    <td><span>블루포트</span></td>
                    <td><span>장로신학대학교</span></td>
                    <td>
                      <VSelect
                        title="물류 선택"
                        v-model="vselected"
                        :options="options"
                        placeholder="물류 선택 선택하세요" 
                      />
                    </td>
                    <td>
                      <VSelect
                        title="물류 선택"
                        v-model="vselected"
                        :options="options"
                        :condition="false"
                        placeholder="물류 선택 선택하세요" 
                      />
                    </td>
                    <td>
                      <VSelect
                        title="물류 선택"
                        v-model="vselected"
                        :options="options"
                        placeholder="물류 선택 선택하세요" 
                      />                      
                    </td>
                    <td>
                      <VSelect
                        title="물류 선택"
                        v-model="vselected"
                        :options="options"
                        :condition="false"
                        placeholder="물류 선택 선택하세요" 
                      />                      
                    </td>
                    <td>
                      <VSelect
                        title="물류 선택"
                        v-model="vselected"
                        :condition="false"
                        :options="options"
                        placeholder="물류 선택 선택하세요" 
                      />                      
                    </td>
                    <td>
                      <VSelect
                        title="물류 선택"
                        v-model="vselected"
                        :condition="false"
                        :options="options"
                        placeholder="물류 선택 선택하세요" 
                      />                      
                    </td>                                        
                    <td>
                      <VSelect
                        title="물류 선택"
                        v-model="vselected"
                        :options="options"
                        placeholder="물류 선택 선택하세요" 
                      />                      
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