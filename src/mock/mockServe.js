//先引入mockjs模块
import Mock from 'mockjs'

//把JSON数据格式引入进来
import testData from './test.json'
import homeNav from './homenav.json'
import homeCotentList from './homecotentlist.json'

//mock数据:第一个参数请求地址   第二个参数：请求数据
Mock.mock(`/mock/getnav`, { code: 200, data: testData })

Mock.mock(`/mock/getHomeNav`, { code: 200, data: homeNav })

Mock.mock('/mock/getHomeCotentList', { code: 200, data: homeCotentList })