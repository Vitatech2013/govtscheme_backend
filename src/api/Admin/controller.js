import schemesModel from '../Common/schemesModel';
import usersModel from '../Common/usersModel';
import kalyanaLaxmiModel from '../Common/kalyanaLaxmiModel';
import oldAgeModel from '../Common/oldAgeModel';
import studyScholarshipModel from '../Common/studyScholarshipModel';
import housingModel from '../Common/housingModel';
import adminLoginModel from './adminLoginModel';
import FeedBackModel from '../Common/feedBackModel';
import {sendEmail} from '../Common/email';
export const adminLogin = (req, res) => {
  adminLoginModel.findOne({ "username": req.query.username, "password": req.query.password }, (err, result) => {
    res.send(result);
  })
}

export const forgotPassword = (req, res) => {
  adminLoginModel.find({"emailid":req.query.emailid}, (err, result) => {
    if (err) {
    
      res.send(err);
    }
     else {
      result.map(results => {
      const subject = 'Credentials Recived';
      const body = `UserName: ${results.username}<br>Password: ${results.password}<br>Please Login Using these Credentials<br>Thank You.`;
      sendEmail(req.query.emailid, subject, body);
    
    })
    res.send(result);
  }
})
}


export const chnagepassword = (req, res) => {
  adminLoginModel.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}


export const viewUsers = (req, res) => {
  usersModel.find((err, users) => {
    if (!err) {
      res.send(users);
    } else {
      res.send(err);
    }
  })
}

export const addschemes = (req, res) => {
  schemesModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      schemesModel.find(req.body, (err, result) => {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      })
    }
  })
}

export const viewschemes = (req, res) => {
  schemesModel.find(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const viewkalyanalaxmi = (req, res) => {
  kalyanaLaxmiModel.find((err, scheme) => {
    if (!err) {
      res.send(scheme);
    } else {
      res.send(err);
    }
  })
}

export const viewkalyanalaxmi2 = (req, res) => {
  console.log(req.params.id);
  kalyanaLaxmiModel.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const updatestatusKalyanalaxmi = (req, res) =>{
  kalyanaLaxmiModel.findByIdAndUpdate(req.params.id, req.body,{new:true}, (err, result) => {
    if (err) {
        res.send(err);
    }else {
      res.send(err);
    }
  })
    }

export const viewstudy = (req, res) => {
  studyScholarshipModel.find((err, study) => {
    if (!err) {
      res.send(study);
    } else {
      res.send(err);
    }
  })
}

export const viewstudy2 = (req, res) => {
  studyScholarshipModel.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const updatestatusStudy = (req, res) =>{
  studyScholarshipModel.findByIdAndUpdate(req.params.id, req.body,{new:true}, (err, result) => {
    if (err) {
        res.send(err);
    }else {
      res.send(err);
    }
  })
    }

export const viewoldage = (req, res) => {
  oldAgeModel.find((err, list) => {
    if (!err) {
      res.send(list);
    } else {
      res.send(err);
    }
  })
}

export const viewoldage2 = (req, res) => {
  oldAgeModel.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const updatestatusOldage = (req, res) =>{
  oldAgeModel.findByIdAndUpdate(req.params.id, req.body,{new:true}, (err, result) => {
    if (err) {
        res.send(err);
    }else {
      res.send(err);
    }
  })
}


export const viewhousing = (req, res) => {
  housingModel.find((err, house) => {
    if (!err) {
      res.send(house);
    } else {
      res.send(err);
    }
  })
}

export const viewhousing2 = (req, res) => {
  housingModel.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}
export const updatestatusHousing = (req, res) =>{
  housingModel.findByIdAndUpdate(req.params.id, req.body,{new:true}, (err, result) => {
    if (err) {
        res.send(err);
    }else {
      res.send(err);
    }
  })
}

export const viewFeedBack = (req, res) => {
  FeedBackModel.find((err, users) => {
    if (!err) {
      res.send(users);
    } else {
      res.send(err);
    }
  })
}