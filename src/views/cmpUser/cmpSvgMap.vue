<template>
  <div class="content-wrap">
    <Title 
      :level="2" 
      pageTitle="svg 맵"
    />
    <div class="discription-text">
      지도 컴포넌트에 대한 가이드 입니다. <br>
      지도의 칼라등을 지정할 수 있습니다.
    </div>
    <Title 
      :level="3" 
      pageTitle="기본 예시"
    />
    <div class="map--wrap">
      <div class="map-wrap">
        <mapCmp        
          :MapChartData="MapChartData"
          :ColorType="ColorType"      
        />
      </div>
      <div class="map-wrap">
        <mapCmp        
          :MapChartData="MapChartData"
          :ColorType="ColorType2"      
        />
      </div>      
    </div>
    <Title 
      :level="3" 
      pageTitle="지역별 날씨"
    />
    <div style="padding: 50px 0;">
      <router-link to="/cmpKoreaWeather">지역별 날씨 API연동 페이지</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import mapCmp from "@/components/svgmap/mapCmp.vue"

const MapChartData = ref([
  {
    'area': '서울',
    'data': '100%',
    'id': 'KR-11'
  },
  {
    'area': '부산',
    'data': '30%',
    'id': 'KR-26'
  },
  {
    'area': '인천',
    'data': '10%',
    'id': 'KR-28'
  },
  {
    'area': '대구',
    'data': '10%',
    'id': 'KR-27'
  },
  {
    'area': '광주',
    'data': '50%',
    'id': 'KR-29'
  },
  {
    'area': '대전',
    'data': '10%',
    'id': 'KR-30'
  },
  {
    'area': '울산',
    'data': '35%',
    'id': 'KR-31'
  },
  {
    'area': '경기',
    'data': '25%',
    'id': 'KR-41'
  },
  {
    'area': '강원',
    'data': '35%',
    'id': 'KR-42'
  },
  {
    'area': '충청북도',
    'data': '23%',
    'id': 'KR-43'
  },
  {
    'area': '충청남도',
    'data': '23%',
    'id': 'KR-44'
  },
  {
    'area': '전라북도',
    'data': '46%',
    'id': 'KR-45'
  },
  {
    'area': '전라남도',
    'data': '36%',
    'id': 'KR-46'
  },
  {
    'area': '경상북도',
    'data': '26%',
    'id': 'KR-47'
  },
  {
    'area': '경상남도',
    'data': '29%',
    'id': 'KR-48'
  },
  {
    'area': '제주',
    'data': '29%',
    'id': 'KR-49'
  },
  {
    'area': '세종',
    'data': '39%',
    'id': 'KR-50'
  }
])
const ColorType = ref('blue')
const ColorType2 = ref('red')

</script>

<style>
.map--wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 120px;
  padding: 0 0 30px;
}
.map-wrap {
  width: 280px;
}
</style>