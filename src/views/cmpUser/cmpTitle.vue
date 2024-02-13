<template>
  <div class="content-wrap">
    <Title 
      :level="2" 
      pageTitle="타이틀"
    />
    <div class="discription-text">
      타이틀 컴포넌트에 대해서 정의 합니다. <br>
      타이틀 컴포넌트는 h2~h6 태그를 정의하며 더보기 버튼, 숫자, 상태값 링크등을 props로 전달할 수 있습니다.
    </div>
    <Title 
      pageTitle="Props 설명"
      :level="3" 
    />
    <div class="discription-text">
      pageTitle="Props 설명"<br>
      :level="3" <br>
      :num="3" <br>
      :algin="left"<br>
       noTicText="필수 입력 값입니다."<br>
       link="/main"<br><br>
       pageTitle: 페이지 제목<br>
       :level: h 태그 레벨<br>
       :num: 데이타값 출력<br>
       :algin: 정렬, left, center, right 기본값 left<br>
       noTicText: 디스크립션 <br>
       progress: 플래스 타입 <br>
       link: 더 보기 링크 값
    </div>
    <Title 
      pageTitle="전체 프롬스"
      :level="3" 
      :num="3" 
      alignType="center"
      progress="진행중"
       noTicText="모든 프롬스를 전달 한 경우 입니다."
       link="/main"
    />
    <div class="discription-text">
      모든 옵션이 들어 간 상태의 가운데 정렬
    </div>
  </div>  
</template>

<script setup>

</script>

<style lang="scss">
.discription-text {
  margin: 10px 0 30px;
  font-size: 15px;
}
</style>