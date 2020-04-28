import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import AnswerSheet from '@/components/AnswerSheet'
import AssessmentIndex from '@/components/AssessmentIndex'
import AssQuestions from '@/components/AssQuestions'
import Rxassessment from '@/components/Rxassessment'
import RxassessmentResult from '@/components/RxassessmentResult'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    
    {
      path: '/b',
      name: 'AssessmentIndex',
      component: AssessmentIndex
    },
    {
      path: '/c',
      name: 'AssQuestions',
      component: AssQuestions
    },
    {
      path: '/d',
      name: 'Rxassessment',
      component: Rxassessment
    },
    {
      path: '/e',
      name: 'RxassessmentResult',
      component: RxassessmentResult
    },

  ]
})
