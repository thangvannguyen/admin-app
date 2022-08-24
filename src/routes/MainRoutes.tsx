import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';


// system Management routing
const Management = Loadable(lazy(() => import('views/pages/management')));
const UserGroup = Loadable(lazy(() => import('views/pages/management/user-group')));
const UserManagement = Loadable(lazy(() => import('views/pages/management/user-management')));


const QuestionBank = Loadable(lazy(()=>import('views/pages/question-bank')));
const SurveyList = Loadable(lazy(() => import('views/pages/survey-list')));
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
          element: <UserGroup />,
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
