import express from 'express'
const app = express()
const port = 3000
const HTTP_STATUS = {
  OK_200: 200,
  CREATED_201: 201,
  NO_CONTENT_204: 204,

  BAD_REQUEST_400: 400,
  NOT_FOUND_404: 404
}
const jsonBodyMidleware = express.json()
app.use(jsonBodyMidleware)

const db = {
  courses: [
    {id: 1, title: 'front-end'},
    {id: 2, title: 'bakc-end'}, 
    {id: 3, title: 'automation-qa'},
    {id: 4, title: 'devops'}
  ]
};
app.get('/courses', (req, res) => {
  let foudCurses = db.courses
  if (req.query.title) {
    foudCurses = foudCurses
      .filter(c => c.title.indexOf(req.query.title as string) > -1)
  }
  res.json(foudCurses) 
})
app.get('/courses/:id', (req, res) => {
  const foundCourses = db.courses.find(c => c.id === +req.params.id)
  if (!foundCourses) {
    res.sendStatus(HTTP_STATUS.NO_CONTENT_204);
    return;
  }

  res.json(foundCourses)
})
app.post('/courses', (req, res) =>{
  if (!req.body.title) {
    res.sendStatus(HTTP_STATUS.BAD_REQUEST_400)
    return;
  }
  const createdCourses ={
    id: +(new Date()),
    title: req.body.title
  }
  db.courses.push(createdCourses)
  console.log(createdCourses)
  res.status(HTTP_STATUS.CREATED_201)
  res.json(createdCourses)
})
app.delete('/courses/:id', (req, res) => {
  db.courses = db.courses.filter(c => c.id !== +req.params.id)
  res.sendStatus(HTTP_STATUS.NO_CONTENT_204)
})
app.put('/courses/:id', (req, res) => {
  if (!req.body.title) {
    res.sendStatus(HTTP_STATUS.BAD_REQUEST_400);
    return;
  }
  const foundCourses = db.courses.find(c => c.id === +req.params.id)
  if (!foundCourses) {
    res.sendStatus(HTTP_STATUS.NOT_FOUND_404);
    return;
  }
  
  foundCourses.title = req.body.title;
  res.sendStatus(HTTP_STATUS.NO_CONTENT_204)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})