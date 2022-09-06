import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';


// system Management routing
const Management = Loadable(lazy(() => import('views/pages/systemManagement')));
const UserGroups = Loadable(lazy(() => import('views/pages/systemManagement/userGroups')));
const UserManagement = Loadable(lazy(() => import('views/pages/systemManagement/userManagement')));


const QuestionBank = Loadable(lazy(()=>import('views/pages/questionBank')));
const SurveyList = Loadable(lazy(() => import('views/pages/surveyList')));
const Report = Loadable(lazy(()=>import('views/pages/report')));
const Support = Loadable(lazy(()=>import('views/pages/support')));


//const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'system-management',
      element: <Management />,
      children: [
        {
          path: 'user-group',
          element: <UserGroups />,
        },
        {
          path: 'user-management',
          element: <UserManagement />,
        },
      ],
    },
    {
      path: 'question-bank',
      element: <QuestionBank/>,
    },
    {
      path: 'survey-list',
      element: <SurveyList />,
    },
    {
      path: 'report',
      element: <Report />,
    },
    {
      path: 'support',
      element: <Support />,
    },
  ],
};

export default MainRoutes;
