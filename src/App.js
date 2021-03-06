import CourseManager from "./components/course-manager/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/home"
import Quizzes from "./components/quizzes/quizzes";
import Quiz from "./components/quizzes/quiz";

function App() {
  return (
      <BrowserRouter>
          <div className="container-fluid">
          <Route path="/" exact={true}  component={Home}/>
          <Route path="/courses" component={CourseManager}/>
          <Route path="/courses/:courseId/quizzes" exact={true}>
            <Quizzes/>
        </Route>
        <Route path="/courses/:courseId/quizzes/:quizId" exact={true}>
            <Quiz/>
        </Route>
          <Route path={[
              "/courses/:layout/edit/:courseId",
              "/courses/:layout/edit/:courseId/modules/:moduleId",
              "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
              "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"
          ]}
                 exact={true}
                 render={(props) => <CourseEditor {...props}/>}/>
          </div>
      </BrowserRouter>
  );
}

export default App;
