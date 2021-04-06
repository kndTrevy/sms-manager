import React from "react";

const AboutPage = React.lazy(() => import('../Container/AboutPage'));
const Admin = React.lazy(() => import('../Container/Admin'));
const ContactPage = React.lazy(() => import('../Container/ContactPage'));
const Users = React.lazy(() => import('../Container/Users'));
const CourseContent = React.lazy(() => import('../Container/CourseContent'));
const Dashboard = React.lazy(() => import('../Container/Dashboard'));
const HomePage = React.lazy(() => import('../Container/HomePage'));
const Message = React.lazy(() => import('../Container/Message'));
const ComposeMessage = React.lazy(() => import('../Container/ComposeMessage'));
const CreateUser = React.lazy(() => import('../Container/CreateUser'));
const Subscribers = React.lazy(() => import('../Container/Subscribers'));
const ProfilePage = React.lazy(() => import('../Container/ProfilePage'));
const Company = React.lazy(() => import('../Container/Company'));
const BlogPage = React.lazy(() => import('../Container/BlogPage'));
const UpdateBlogPage = React.lazy(() => import('../Container/UpdateBlogPage'));
const BlogContent = React.lazy(()=> import('../Container/BlogContent'));



const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
    { path: '/aboutPage', name: 'About', component: AboutPage },
    { path: '/admin', exact: true, name: 'Admin', component: Admin },
    { path: '/profile/:_id', exact: true, name: "Profile Page", component: ProfilePage },
    { path: '/contactPage', name: 'ContactPage', component: ContactPage },
    { path: '/users', name: 'Users', component: Users },
    { path: '/course/:_id', name: 'Course Content', component: CourseContent },
    { path: '/homePage', name: 'HomePage', component: HomePage },
    { path: '/compose', name: 'Compose Message', component: ComposeMessage },
    { path: '/create/user', name: 'CreateUser', component: CreateUser },
    { path: '/subscribers', name: 'Subscribers', component: Subscribers },
    { path: '/message', name: 'Message', component: Message },
    { path: '/company', name: "Company", component: Company },
    { path: '/blog/:_id', exact: true, name: "Update Blog", component: UpdateBlogPage },
    { path: '/blog/content/:_id', exact: true, name: "Blog Content", component: BlogContent },
    { path: '/blog', exact: true, name: "Blog", component: BlogPage }
];

export default routes;