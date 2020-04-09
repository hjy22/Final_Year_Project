var sqlMap = {
    getValue: 'SELECT * FROM a WHERE id = ?',
    setValue: 'UPDATE a SET name = ? WHERE id = ?',
    addInfo: 'INSERT INTO ttt(name,id) VALUES (?,?)',
    getStepperStatus: 'SELECT * FROM stepperStatus WHERE name = ?',
    setStepperStatus: 'UPDATE stepperStatus SET stepper = ? WHERE name = ?',
    addGroup:'INSERT INTO schedule(name,AssessingGroup) VALUES (?,?)',
    getGroupInfo:'SELECT * FROM schedule',
    uploadDDL:'UPDATE courseInfo SET ddl = ? WHERE code = ?',
    getDDL:'SELECT * FROM courseInfo WHERE code = ?',
    saveFeedbackCheck:'UPDATE feedbackRating SET selected = ? WHERE name = ?',
    saveFeedbackText:'UPDATE feedbackText SET selected = ? WHERE name = ?',
    getMarking:'SELECT * FROM schedule WHERE name = ?',
    getFeedbackCheck:"SELECT * FROM feedbackRating WHERE selected = 'true'",
    getFeedbackText:"SELECT * FROM feedbackText WHERE selected = 'true'",
    saveMarking:'INSERT INTO feedbackInfo(id,name,content) VALUES (?,?,?)',
    setPreTime:'UPDATE schedule SET PreTime = ? WHERE name = ?',
    setMarkingTime:'UPDATE schedule SET MarkingTime = ? WHERE AssessingGroup = ?',
    setLocation:'UPDATE schedule SET PreLocation = ? WHERE name = ?',
    setMarkingLocation:'UPDATE schedule SET MarkingLocation = ? WHERE AssessingGroup = ?',
  }
  
  module.exports = sqlMap;