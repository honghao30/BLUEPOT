<template>
  <header>
    <div class="header-top__ci">
      <router-link to="#"
        class="icon-mypage">
        <span>마이페이지</span>
      </router-link>
      <h1>
        <router-link to="/">
          <img src="../../assets/images/common/ci.svg" alt="블루팟" />
        </router-link>
      </h1>
    </div>
    <div class="navigation__container">
      <div class="navigation__container--top">
        <ul class="gnb-list">
          <li class="store">
            <router-link to="">
               <span class="menu-name">매장관리</span>
               <span class="menu-eng">Store management</span>
            </router-link>
          </li>
          <li class="calculate">
            <router-link to="">
               <span class="menu-name">정산관리</span>
               <span class="menu-eng">Settlement management</span>
            </router-link>
            <ul class="sub-list">
                <li>
                  <router-link to="">
                    연결관리
                  </router-link>
                </li>
                <li>
                  <router-link to="">
                    정산자동화
                  </router-link>
                </li>
                <li>
                  <router-link to="">
                    정산서작성
                  </router-link>
                </li>
                <li>
                  <router-link to="">
                    정산서조회
                  </router-link>
                </li>
                <li>
                  <router-link to="">
                    입금/세금계산서/총괄표
                  </router-link>
                </li>                                                                
            </ul>
          </li>   
          <li class="member">
            <router-link to="">
               <span class="menu-name">회원관리</span>
               <span class="menu-eng">Member management</span>
            </router-link>
          </li>                  
        </ul>
      </div>
      <div class="sub-top__image-area"></div>
    </div>
  </header>
</template>

<script>  
</script>
