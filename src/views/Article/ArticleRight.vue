<template>
  <!--      右边侧边栏-->
  <div class="sidebar">
    <!--        作者简介-->
    <div class="sidebar-block author-block">

    </div>
    <!--        下载APP-->
    <div class="sidebar-block app-download-sidebar-block"></div>
    <!--        相关文章-->
    <div class="sidebar-block related-entry-sidebar-block"></div>
    <!--        目录-->
    <div class="sticky-block-box" :class="{'sticky':sticky}">
      <div class="sidebar-block catalog-block">
        <nav class="article-catalog">
          <div class="catalog-title">目录</div>
          <div class="catalog-body">
            <ul class="catalog-list" style="margin-top:0;">
              <!--一级目录-->
              <li v-for="value_1 in catalogList" class="item d1">
                <div class="a-container"><a :title="value_1.title" class="catalog-aTag">
                  {{ value_1.title }}
                </a></div>
                <ul v-if="value_1.children.length>0" class="sub-list">
                  <!--二级目录-->
                  <li v-for="value_2 in value_1.children" class="item d2">
                    <div class="a-container"><a :title="value_2.title" class="catalog-aTag">
                      {{ value_2.title }}
                    </a></div>
                    <ul v-if="value_2.children.length>0" class="sub-list">
                      <!--三级目录-->
                      <li v-for="value_3 in value_2.children" class="item d3">
                        <div class="a-container"><a :title="value_3.title" class="catalog-aTag">
                          {{ value_3.title }}
                        </a></div>
                        <ul v-if="value_3.children.length>0" class="sub-list">
                          <!--4级目录-->
                          <li v-for="value_4 in value_3.children" class="item d4" style="display: none;">
                            <div class="a-container"><a :title="value_4.title" class="catalog-aTag">
                              {{ value_4.title }}
                            </a></div> <!----></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleLeft",
  data() {
    return {
      catalogList: []
    }
  },
  watch: {
    roll(newValue, oldValue) {
      console.log('newValue', newValue, oldValue)
      let titleList = document.querySelectorAll('.article-content h1,h2,h3,h4,h5,h6');
      console.log(titleList)
      titleList.forEach(function (item, index) {
        let a = item.getBoundingClientRect().top
        if (a > -50 && a <= 150) {
          let liList = document.querySelectorAll('.item');
          liList.forEach(function (item_1, index_1) {
            item_1.classList.remove('active')
            if (index_1 === index) {
              console.log("a:" + a)
              console.log("1111")
              item_1.classList.add('active')
            }
          })
        }
      })
    }
  },
  computed: {
    sticky() {
      return this.$store.state.sticky
    },
    roll() {
      return this.$store.state.roll

    }
  },
  methods: {
    getCatalogTitles() {
      let catalogData = []

      function Item(item) {
        this.dataId = item.dataset.id
        this.title = item.textContent || '<未识别标题>'
        this.tag = item.tagName
        this.children = []
      }

      function f(cj, a) {
        if (cj === 1) {
          return a.children[a.children.length - 1];
        }
        return f(cj - 1, a.children[a.children.length - 1]);
      }

      let tagTemp = 'H7'

      let titleList = document.querySelectorAll('.article-content h1,h2,h3,h4,h5,h6');
      titleList.forEach(function (item) {
        if (item.tagName <= tagTemp) {
          let catalogItem = new Item(item);
          catalogData.push(catalogItem);
          tagTemp = item.tagName
        } else {
          let catalogItem = new Item(item);
          let root = catalogData[catalogData.length - 1];
          let cj = catalogItem.tag[1] - tagTemp[1]
          console.log(cj)
          if (cj === 1) {
            root.children.push(catalogItem);
          } else {
            f(cj - 1, root).children.push(catalogItem)
          }
        }
      })
      // console.log(titleList)
      // console.log(catalogData)
      this.catalogList = catalogData;
      this.$nextTick(function () {
        let aContainerList = document.querySelectorAll('.a-container');
        console.log(aContainerList)
        aContainerList.forEach(function (valueElement, index) {
          valueElement.addEventListener('click', function () {
            let liList = document.querySelectorAll('.item');
            for (let liListElement of liList) {
              liListElement.classList.remove('active')
            }
            console.log(this)
            this.parentNode.classList.add("active");
            let section = document.querySelector(`[data-id=heading-${index}]`);
            console.log(section)
            if (section) {
              section.scrollIntoView()
            }
          })
        })
      })
    }
  },
  mounted() {
    this.getCatalogTitles()


  }
}
</script>

<style lang="less" scoped>
.sidebar {
  position: absolute;
  top: 0;
  right: 0;
  width: 25rem;
  height: 2000px;

  .author-block {
    border-radius: 4px;
    padding: 1.667rem;
    height: 150px;
    background-color: red;
  }

  .app-download-sidebar-block {
    box-shadow: none;
    border-radius: 4px;
    height: 90px;
    background-color: #1e80ff;
  }

  .related-entry-sidebar-block {
    height: 430px;
    background-color: yellow;
  }

  .sticky-block-box {
    height: 450px;

    .catalog-block {
      transition: all .2s linear;
    }

    .article-catalog {
      background: #fff;
      border-radius: 4px;
      padding: 0;
      height: 100%;

      .catalog-title {
        font-weight: 500;
        padding: 1.333rem 0;
        margin: 0 1.667rem;
        font-size: 16px;
        line-height: 2rem;
        color: #1d2129;
        border-bottom: 1px solid #e4e6eb;
      }

      .catalog-body {
        position: relative;
        margin: 8px 4px 0 0;
        overflow: auto;
        max-height: 612px;
      }

      .catalog-body::-webkit-scrollbar {
        width: 6px;
        background-color: white;
      }

      .catalog-body::-webkit-scrollbar-thumb {
        background: #e8e7e7;
        border-radius: 4px;
      }
    }
  }

  .sticky {
    position: fixed;
    top: 1.767rem;
    width: inherit;
    transition: top .2s;
  }

  .sidebar-block {
    margin-bottom: 20px;
    position: relative;
    border-radius: 2px;
  }
}

.catalog-list {
  position: relative;
  line-height: 22px;
  padding: 0 0 12px;

  .d1 > .a-container {
    padding-left: 11px;
  }

  .d2 > .a-container {
    padding-left: 26px;
  }

  .d3 > .a-container {
    padding-left: 41px;
  }

  .active > .a-container {
    color: #007fff;
  }

  .active > .a-container:before {
    content: "";
    position: absolute;
    top: 4px;
    left: 0;
    margin-top: 7px;
    width: 4px;
    height: 16px;
    background: #1e80ff;
    border-radius: 0 4px 4px 0;
  }

  .item {
    margin: 0;
    padding: 0;
    font-size: 1.167rem;
    font-weight: 400;
    line-height: 22px;
    color: #333;
    list-style: none;

    .a-container {
      display: block;
      position: relative;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .catalog-aTag {
    color: inherit;
    display: inline-block;
    padding: 8px;
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: #909090;
    border-radius: 2px;
  }

  a:hover {
    background-color: #f4f5f5;;
  }
}
</style>