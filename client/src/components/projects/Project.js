import React, { useEffect } from 'react';
import StickyMessagesList from '../stickyMessages/StickyMessagesList';
import StickyMessageForm from '../stickyMessages/Form';
import IssuesContainer from '../issues/IssuesContainer';
import ReturnLink from '../shared/ReturnLink';
import Form from '../issues/Form';
import Loading from '../shared/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getOrganization } from '../../actions/organizations';
import { getProject } from '../../actions/projects';

const Project = (props) => {

  const dispatch = useDispatch();
  const org = useSelector((state) => state.organization);
  const project = useSelector(state => state.project)
  const auth = useSelector((state) => state.auth);
  const projectId = props.match.params.id;
  
  useEffect(() => {
    if (!org) {
      const orgId = props.match.url.split("/")[2]
      dispatch(getOrganization(orgId))
    }
    if (org) {
      dispatch(getProject(org._id, projectId));
    }
  }, [org])

  const handleDelete = () => {
    const confirm = window.confirm("Are you sure you want to delete this post?");
    if (confirm) {

    }
  }

  const renderAuthorButtons = () => {
   
  }
  if (!org || !project ) { return <Loading />}
  return (
    <div className="project-page"> 
      <ReturnLink destination={`/organizations/${org._id}`} anchorText={"< Back to Organization"} />
      <h1 className="text-center">{project.title}</h1>
      <div className="row">
          <h2 className="mt-4 col-8">Sticky Messages</h2>        
            <div className="col-4">
              <StickyMessageForm type="project"/>
            </div>
        </div>
      <StickyMessagesList type="project" />
      <div className="row">
        <h2 className="mt-4 col-8">Issues</h2>        
          <div className="col-4">
            <Form/>
          </div>
        </div>
      <IssuesContainer />
    </div>

  )
}

export default Project;