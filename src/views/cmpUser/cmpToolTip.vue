<template>
  <div class="content-wrap">
    <Title 
      :level="2" 
      pageTitle="툴팁"
    />
    <div class="discription-text">
      툴팁에 대한 가이드 입니다.
    </div>
    <div style="text-align:center;padding: 50px 0;position: relative;">
        <ToolTip
          direction="bottomPos"
          elAlign="leftType"
          width="280"
          mode="dark"
        >
          <template #tooltip-message>
            <div class="message__innerbox"
            >
              툴입 컴포넌트입니다. 이 안에 다양한 디자인을 넣을수 있습니다.
            </div>
          </template>
        </ToolTip>
    </div>
  </div>
</template>

<script setup>

</script>