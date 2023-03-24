import schemesModel from '../Common/schemesModel';
import usersModel from '../Common/usersModel';
import kalyanaLaxmiModel from '../Common/kalyanaLaxmiModel';
import oldAgeModel from '../Common/oldAgeModel';
import studyScholarshipModel from '../Common/studyScholarshipModel';
import housingModel from '../Common/housingModel';
import FeedBackModel from '../Common/feedBackModel';
import {sendEmail} from '../Common/email';

export const userRegistration = (req, res) => {
  usersModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const userLogin = (req, res) => {
  usersModel.findOne({ "username": req.query.username, "password": req.query.password }, (err, result) => {
    res.send(result);
  })
}

export const forgotPassword = (req, res) => {
  usersModel.find({"Emailid":req.query.Emailid}, (err, result) => {
    if (err) {
    
      res.send(err);
    }
     else {
      result.map(results => {
      const subject = 'Credentials Recived';
      const body = `username: ${results.username}<br>password: ${results.password}<br>Please Login Using these Credentials<br>Thank You.`;
      sendEmail(req.query.Emailid, subject, body);
      
    })
    res.send(result);
  }
})
}

export const chnagepassword = (req, res) => {
  usersModel.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}


export const viewProfile = (req, res) => {
  usersModel.find({ "username": req.query.username }, (err, result) => {
    res.send(result.map(record => {
      return record;
    }));
  })
}

export const Profileupdate = (req, res) => {
  usersModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      usersModel.find((err, result) => {
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

export const applykalyanalaxmi = (req, res) => {
  kalyanaLaxmiModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const viewkalyanalaxmi = (req, res) => {
  kalyanaLaxmiModel.find({ "username": req.query.username }, (err, result) => {
    res.send(result.map(record => {
      return record;
    }));
  })
}

export const viewkalyanalaxmi2 = (req, res) => {
  kalyanaLaxmiModel.findById(req.params.id, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const applystudy = (req, res) => {
  studyScholarshipModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const viewstudy = (req, res) => {
  studyScholarshipModel.find({ "username": req.query.username }, (err, result) => {
    res.send(result.map(record => {
      return record;
    }));
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

export const applyoldage = (req, res) => {
  oldAgeModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const viewoldage = (req, res) => {
  oldAgeModel.find({ "username": req.query.username }, (err, result) => {
    res.send(result.map(record => {
      return record;
    }));
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

export const applyhousing = (req, res) => {
  housingModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const viewhousing = (req, res) => {
  housingModel.find({ "username": req.query.username }, (err, result) => {
    res.send(result.map(record => {
      return record;
    }));
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

export const sendFeedBack = (req, res) => {
  FeedBackModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}