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
          <li 
            v-for="menu in gnbList" 
            :key="menu.index"
            :class="menu.cateName" 
          >
            <router-link to="">
               <span class="menu-name">{{ menu.name }}</span>
               <span class="menu-eng">{{ menu.engName }}</span>
            </router-link>
            <ul class="sub-list" v-if="menu.children">
                <li
                  v-for="sMenu in menu.children"
                  :key="sMenu.index"
                >
                  <router-link 
                    :to="sMenu.to"
                  >
                    {{ sMenu.name }}
                  </router-link>
                </li>                                                                                
            </ul>
          </li>                 
        </ul>
      </div>
      <div class="sub-top__image-area"></div>
    </div>
  </header>
</template>

<script setup>
import gnbList from "./gnb";
</script>
