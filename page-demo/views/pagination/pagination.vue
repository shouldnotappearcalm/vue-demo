// demo地址 https://juejin.im/entry/58f85550b123db00623587bf
<template>
    <div class="page-wrap">
        <ul class="li-page" v-show="prePage" v-tap="{methods: goPrePage}">上一页</ul>
        <ul>
            <li v-for="i in showPageBtn" :key="i" :class="{active: i==currentPage,pointer:i, hover:i&&i!=currentPage}"
            v-tap="{methods:goPage, i:i}">
                <a v-if="i" class="notPointer">{{i}}</a>
                <a v-else>···</a>
            </li>
        </ul>
        <ul class="li-page" v-show="nextPage" v-tap="{methods: goNextPage}">下一页</ul>
    </div>
</template>
<script>
let that;
export default {
  data() {
    that = this;
    return {
      num: 30,
      limit: 5
    };
  },
  computed: {
    totalPage() {
      return Math.ceil(that.num / that.limit);
    },
    offset() {
      return that.$store.state.offset;
    },
    currentPage() {
      return Math.ceil(that.offset / that.limit) + 1;
    },
    prePage() {
      return that.offset != 0 && that.num;
    },
    nextPage() {
      return that.offset + that.limit < that.num && that.num;
    },
    showPageBtn() {
      let pageNum = that.totalPage,
        index = that.currentPage,
        arr = [];
      if (pageNum <= 5) {
        for (let i = 1; i <= pageNum; i++) {
          arr.push(i);
        }
        return arr;
      }
      if (index <= 2) return [1, 2, 3, 0, pageNum];
      if (index >= pageNum - 1)
        return [1, 0, pageNum - 2, pageNum - 1, pageNum];
      if (index === 3) return [1, 2, 3, 4, 0, pageNum];
      if (index === pageNum - 2)
        return [1, 0, pageNum - 3, pageNum - 2, pageNum - 1, pageNum];
      return [1, 0, index - 1, index, index + 1, 0, pageNum];
    },
    goPage(params) {
      if (params.i === 0 || params.i === that.currentPage) return;
      that.$store.commit("GO_PAGE", (params.i - 1) * that.limit);
      that.$emit("getNew");
    },
    goPrePage() {
      that.$store.commit("PRE_PAGE", that.limit);
      that.$emit("getNew");
    },
    goNextPage() {
      that.$store.commit("NEXT_PAGE", that.limit);
      that.$emit("getNew");
    }
  }
};
</script>
