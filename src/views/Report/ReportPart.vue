<template>
<div class="background">
  <Header></Header>
  <div class="container">
    <h1>举报</h1>
    <div class="current-row"></div>
<!--    举报问题部分-->
    <form action="" >
      <div class="byte-form-item__content">
        <div class="byte-form-item__content">
          <h2>举报问题</h2>
          <el-radio v-model="radio" label="1" style="padding-right: 20px">内容质量太差</el-radio>
          <el-radio v-model="radio" label="2" style="padding-right: 20px">低俗色情</el-radio>
          <el-radio v-model="radio" label="3" style="padding-right: 20px">涉及违法</el-radio>
          <el-radio v-model="radio" label="4" style="padding-right: 20px">恶意营销</el-radio>
          <el-radio v-model="radio" label="5" style="padding-right: 20px">内容抄袭</el-radio>
          <el-radio v-model="radio" label="6" style="padding-right: 20px">其他原因</el-radio>
          <el-radio v-model="radio" label="7" style="padding-right: 20px"  v-if="" >侵犯名誉/隐私/著作/肖像权等</el-radio>
        </div>
      </div>
    </form>
<!--  证明材料部分  -->
    <h2>证明材料</h2>
    <el-upload
        action="#"
        list-type="picture-card"
        :auto-upload="false">
      <i slot="default" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{file}">
        <img
            class="el-upload-list__item-thumbnail"
            :src="file.url" alt=""
        >
        <span class="el-upload-list__item-actions">
        <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
        >
          <i class="el-icon-zoom-in"></i>
        </span>
        <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleDownload(file)"
        >
          <i class="el-icon-download"></i>
        </span>
        <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
        >
          <i class="el-icon-delete"></i>
        </span>
      </span>
      </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>

<!--    举报描述部分-->
    <h2>举报描述</h2>
    <el-input
        type="textarea"
        :rows="4"
        placeholder="您可以在此处填写举报说明，最多不超过200个字"
        v-model="textarea">
    </el-input>
    <el-row>
      <el-button type="primary" class="submit-but" @click="open()">确认</el-button>
    </el-row>

  </div>
</div>
</template>

<script>
import Header from "../../components/Header";

export default {
  name: "ReportPart",

  data(){
    return {
      textarea: '',
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
      radio: '1',
    }
  },
  methods: {
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
    open(){
      this.$alert('您的举报我们已经收到，稀土掘金团队会尽快核实处理，并第一时间告知您结果', '举报成功', {
        confirmButtonText: '确定',
      });
    },
  },
  components: {
    Header
  },
}
</script>

<style scoped lang="less">
.background{
  background-color: #f4f5f5;
  .container{
    width: 700px;
    position: relative;
    margin:0;
    top: -20px;
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
    h2{
      font-weight: 600;
      font-size: 17px;
      line-height: 24px;
      margin-top: 45px;
      margin-bottom: 20px;
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
      }
    }
  }
  .submit-but{
    background: #007fff;
    border-radius: 3px;
    width: 166px;
    height: 44px;
    font-size: 15px;
    line-height: 18px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    border: none;
    padding: 0.5rem 1.3rem;
    outline: none;
    transition: background-color .3s,color .3s;
    position: relative;
    left: 35%;
    top: 20px;
  }
}
</style>
