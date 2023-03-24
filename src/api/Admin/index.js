import { Router } from 'express'

import {
  adminLogin,
  forgotPassword,
  chnagepassword,
  viewUsers,
  addschemes,
  viewschemes,
  viewkalyanalaxmi,
  viewkalyanalaxmi2,
  updatestatusKalyanalaxmi,
  viewstudy,
  viewstudy2,
  updatestatusStudy,
  viewoldage,
  viewoldage2,
  updatestatusOldage,
  viewhousing,
  viewhousing2,
  updatestatusHousing,
  viewFeedBack
} from './controller'

const router = new Router()

router.get('/adminlogin', adminLogin)


router.get('/getpassword', forgotPassword)

router.put('/updatepassword/:id',chnagepassword)

router.get('/viewusers', viewUsers)

router.post('/addschemes', addschemes)

router.get('/viewschemes', viewschemes)

router.get('/viewkalyanalaxmi', viewkalyanalaxmi)

router.get('/viewkalyanalaxmi/:id', viewkalyanalaxmi2)

router.put('/kalyanalaxmistatus/:id', updatestatusKalyanalaxmi)

router.get('/viewstudy', viewstudy)

router.get('/viewstudy/:id', viewstudy2)

router.put('/studystatus/:id', updatestatusStudy)

router.get('/viewoldage', viewoldage)

router.get('/viewoldage/:id', viewoldage2)

router.put('/oldagestatus/:id', updatestatusOldage)

router.get('/viewhousing', viewhousing)

router.get('/viewhousing/:id', viewhousing2)

router.put('/housingstatus/:id', updatestatusHousing)

router.get('/viewfeedback', viewFeedBack)

export default router
