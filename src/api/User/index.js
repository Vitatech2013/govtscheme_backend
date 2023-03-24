import { Router } from 'express'

import {
  userRegistration,
  userLogin,
  forgotPassword,
  chnagepassword,
  viewProfile,
  Profileupdate,
  viewschemes,
  applykalyanalaxmi,
  applystudy,
  applyoldage,
  applyhousing,
  viewkalyanalaxmi,
  viewkalyanalaxmi2,
  viewstudy,
  viewstudy2,
  viewoldage,
  viewoldage2,
  viewhousing,
  viewhousing2,
  sendFeedBack
} from './controller'

const router = new Router()

router.post('/registration', userRegistration)

router.get('/userlogin', userLogin)


router.get('/getpassword', forgotPassword)

router.put('/updatepassword/:id',chnagepassword)

router.get('/viewprofile', viewProfile)

router.put('/:id', Profileupdate)

router.get('/viewschemes', viewschemes)

router.post('/applykalyanalaxmi', applykalyanalaxmi)

router.post('/applystudy', applystudy)

router.post('/applyoldage', applyoldage)

router.post('/applyhousing', applyhousing)

router.get('/viewkalyanalaxmi', viewkalyanalaxmi)

router.get('/viewkalyanalaxmi/:id', viewkalyanalaxmi2)

router.get('/viewstudy', viewstudy)

router.get('/viewstudy/:id', viewstudy2)

router.get('/viewoldage', viewoldage)

router.get('/viewoldage/:id', viewoldage2)

router.get('/viewhousing', viewhousing)

router.get('/viewhousing/:id', viewhousing2)

router.post('/sendfeedback', sendFeedBack)

export default router
