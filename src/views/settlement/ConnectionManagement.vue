<template>
  <div class="content__wrap">
    <div class="location__area">
      <div class="page-title">
        <h2>연결관리(미연결매장)</h2>
        <span>Connection Management</span>
      </div>
      <div class="breadcrumb">
        정산관리 <span>></span> 연결관리(미연결매장)
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
          <!-- //table -->
          <MyTable
            tableName="연결관리(미연결매장)"
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
                    v-for="data in tableData"
                    :key="data.index"
                >
                    <td><span>{{ data.No }}</span></td>
                    <td><span>{{ data.Brand }}</span></td>
                    <td><span>{{ data.businessName }}</span></td>
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
                        title="웨이브포스 선택"
                        v-model="vselected"
                        :options="options2"
                        :condition="!options2"
                        placeholder="웨이브포스 선택 선택하세요" 
                      />
                    </td>
                    <td>
                      <VSelect
                        title="머니온 선택"
                        v-model="vselected"
                        :options="options3"
                        placeholder="머니온 선택 선택하세요" 
                      />                      
                    </td>
                    <td>
                      <VSelect
                        title="샘플러스 선택"
                        v-model="vselected"
                        :options="options4"
                        :condition="!options4"
                        placeholder="샘플러스 선택 선택하세요" 
                      />                      
                    </td>
                    <td>
                      <VSelect
                        title="페이코 선택"
                        v-model="vselected"
                        :condition="!options5"
                        :options="options5"
                        placeholder="페이코 선택 선택하세요" 
                      />                      
                    </td>
                    <td>
                      <VSelect
                        title="시크릿오더 선택"
                        v-model="vselected"
                        :condition="!options6"
                        :options="options6"
                        placeholder="시크릿오더 선택 선택하세요" 
                      />                      
                    </td>                                        
                    <td>
                      <VSelect
                        title="한전온 선택"
                        v-model="vselected"
                        :options="options7"
                        placeholder="한전온 선택 선택하세요" 
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
import { ref, reactive } from 'vue'
import tableData1 from "./tempData/tableData1";
const tableData = reactive(tableData1)
const options = tableData1[0].distribution.map(item => ({
  title: item.title,
  code: item.code,
  isSelected: item.isSelected
}))
const options2 = tableData1[0].waveForce.map(item => ({
  title: item.title,
  code: item.code,
  isSelected: item.isSelected
}))
const options3 = tableData1[0].moneyOn.map(item => ({
  title: item.title,
  code: item.code,
  isSelected: item.isSelected
}))
const options4 = tableData1[0].sampler.map(item => ({
  title: item.title,
  code: item.code,
  isSelected: item.isSelected
}))
const options5 = tableData1[0].Payco.map(item => ({
  title: item.title,
  code: item.code,
  isSelected: item.isSelected
}))
const options6 = tableData1[0].SecretOrder.map(item => ({
  title: item.title,
  code: item.code,
  isSelected: item.isSelected
}))
const options7 = tableData1[0].KepcoOn.map(item => ({
  title: item.title,
  code: item.code,
  isSelected: item.isSelected
}))

const vselected = ref('')
const selected = ref('')
const changeSelected = (option) => {  
  selected.value = option.title
}
</script>