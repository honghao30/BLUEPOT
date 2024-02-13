<template>
    <div class="content-wrap">
      <Title 
        :level="3" 
        pageTitle="영진위 영화 주말박스오피스"
        :noTicText="WeekData"
      />
      <div class="movie-rangking__wrap">
          <table class="table table-list">
            <caption><span class="ir-text">순위,영화명,개봉일,누적관객수,매출액으로 구성된 주간 박스 오피스</span></caption>
            <colgroup>
              <col width="100" />
              <col width="600" />
              <col width="150" />
              <col width="150" />
              <col width="150" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">순위</th>
                <th scope="col">영화명</th>
                <th scope="col">개봉일</th>
                <th scope="col">누적관객수</th>
                <th scope="col">매출액</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="movie in WeekRaingKing" :key="movie"
              >
                <td>{{ movie.rank }}</td>
                <td>{{ movie.movieNm }}</td>
                <td>{{ movie.openDt }}</td>
                <td>{{ movie.audiAcc }}</td>
                <td>{{ movie.salesAcc }}</td>
              </tr>                                                                 
            </tbody>
          </table>                                                     
      </div>      
      <Title 
        :level="3" 
        pageTitle="영진위 영화 일별박스오피스"
        :noTicText="dayData"
      />
      <div class="movie-rangking__wrap">
          <table class="table table-list">
            <caption><span class="ir-text">순위,영화명,개봉일,누적관객수,매출액으로 구성된 주간 박스 오피스</span></caption>
            <colgroup>
              <col width="100" />
              <col width="600" />
              <col width="150" />
              <col width="150" />
              <col width="150" />
            </colgroup>
            <thead>
              <tr>
                <th scope="col">순위</th>
                <th scope="col">영화명</th>
                <th scope="col">개봉일</th>
                <th scope="col">누적관객수</th>
                <th scope="col">매출액</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="movie in DailyRaingKing" :key="movie"
              >
                <td>{{ movie.rank }}</td>
                <td>{{ movie.movieNm }}</td>
                <td>{{ movie.openDt }}</td>
                <td>{{ movie.audiAcc }}</td>
                <td>{{ movie.salesAcc }}</td>
              </tr>                                                                 
            </tbody>
          </table>                                                     
      </div>         
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { dailyData, WeeklyData, ydate7 } from '@/assets/js/common.js';


const RankBaseUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice';
const Mykey = 'ff4677c1cc97ed619e2bb12bb03f9be5'

const getRanking = () => {
  const DailyRaingKing = ref([])
  const dayData = ref('')
  const WeekRaingKing = ref([])
  const WeekData = ref('')

  const ranKing = async () => {
    axios
    .all([        
        axios.get(`${RankBaseUrl}/searchWeeklyBoxOfficeList.json?key=${Mykey}&targetDt=${WeeklyData}`,),
        axios.get(`${RankBaseUrl}/searchDailyBoxOfficeList.json?key=${Mykey}&targetDt=${dailyData}`,)        
    ])
    .then(
        axios.spread((res1,res2) => {
            console.log('1',res1.data);
            console.log('2',res2.data);
            console.log(WeeklyData)
            res1.data.boxOfficeResult.weeklyBoxOfficeList.forEach(result => {
                WeekRaingKing.value.push(result);                
                console.log('데이터1', WeekRaingKing)
            });
            WeekData.value = res1.data.boxOfficeResult.showRange;            
            console.log('데이터2', DailyRaingKing)                          
            res2.data.boxOfficeResult.dailyBoxOfficeList.forEach(result2 => {
                DailyRaingKing.value.push(result2);                
                console.log('데이터2', WeekRaingKing)
            });   
            dayData.value = res2.data.boxOfficeResult.showRange         
        })
    )
    .catch(err => {
        console.log(err.message);
    });
  }
  ranKing ()
  return { DailyRaingKing, WeekRaingKing, dayData, WeekData }
}

const { DailyRaingKing, WeekRaingKing, dayData, WeekData } = getRanking();

</script>

<style>

</style>