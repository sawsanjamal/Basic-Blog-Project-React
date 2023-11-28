import { Form, Link } from "react-router-dom";

import { FormGroup } from "../components/FormGroup";
export function PostForm({ users }) {
  return (
    <>
      <Form method="post" className="form">
        <div className="form-row">
          <FormGroup>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" id="title" />
            <div className="error-message">Required</div>
          </FormGroup>
          <FormGroup>
            <label htmlFor="userId">Author</label>
            <select name="userId" id="userId">
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </FormGroup>
        </div>

        <div className="form-row">
          <FormGroup>
            <div className="form-group">
              <label htmlFor="body">Body</label>
              <textarea name="body" id="body"></textarea>
            </div>
          </FormGroup>
        </div>

        <div className="form-row form-btn-row">
          <Link className="btn btn-outline" to="/posts">
            Cancel
          </Link>
          <button className="btn">Save</button>
        </div>
      </Form>
    </>
  );
}
