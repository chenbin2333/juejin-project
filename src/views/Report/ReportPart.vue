<template>
  <div class="container">
    <h1>举报</h1>
    <div class="current-row"></div>
    <form action="" >
      <div class="byte-form-item__content">
        <div class="byte-form-item__content">
          <h2>举报问题</h2>
          <div class="byte-radio-group">
            <label class="byte-radio__wrapper">
                <span class="byte-radio__radio-inner">
                  <input type="radio" class="byte-radio__original">
                  <span></span>
                </span>
                <span>
                  内容质量太差
                </span>
            </label>

            <label>
              <span>
                <input type="radio">
                <span></span>
              </span>
              <span>
                低俗色情
              </span>
            </label>

            <label>
              <span>
                <input type="radio">
                <span></span>
              </span>
              <span>
                涉及违法
              </span></label>

            <label>
              <span>
                <input type="radio">
                <span></span>
              </span>
              <span>
                恶意营销
              </span>
            </label>

            <label>
              <span>
                <input type="radio">
                <span></span>
              </span>
              <span>
                内容抄袭
              </span>
            </label>

            <label>
              <span>
                <input type="radio">
                <span>
                </span></span>
              <span>
                其他原因
              </span>
            </label>

            <label>
              <span>
                <input type="radio">
                <span>
                </span></span>
              <span>
                侵犯名誉/隐私/著作/肖像权等
              </span>
            </label>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ReportPart"
}
</script>

<style scoped lang="less">
.container{
  width: 700px;
  margin: 40px auto 0 auto;
  padding: 30px 50px;
  background: #fff;
  border-radius: 3px;
  box-sizing: border-box;
  h1{
    font-weight: 600;
    font-size: 26px;
    line-height: 18px;
    color: #333;
    margin: 0.67em 0;
  }
  .current-row{
    height: 2px;
    width: 100%;
    background-color: #eaeaea;
    margin: 38px 0 29px;
  }
  form{
    display: block;
    margin-top: 0;
    .byte-form-item__content{
      zoom: 1;
      position: relative;
      font-size: 14px;
      line-height: 32px;
      .byte-form-item__content{
        zoom: 1;
        position: relative;
        font-size: 14px;
        line-height: 32px;
        h2{
          font-weight: 600;
          font-size: 17px;
          line-height: 24px;
          margin-bottom: 20px;
        }
        .byte-radio-group{
          display: inline-block;
          font-size: 14px;
          line-height: 32px;
          .byte-radio__wrapper{
            min-width: 22%;
            cursor: pointer;
            display: inline-block;
            position: relative;
            white-space: nowrap;
            line-height: 16px;
            margin-right: 16px;
            color: #282f38;
            font-size: 14px;
            .byte-radio__radio-inner{
              display: inline-block;
              vertical-align: top;
              width: 16px;
              height: 16px;
              position: relative;
              margin-right: 8px;
              font-size: 14px;
              line-height: 20px;
            }
          }
          }
        }
      }
    }
  }

</style>
