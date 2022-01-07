import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import './Forms.scss';

const UploadPublisherForm = () => {
  return (
    <div className="publisher-form">
      <h3 className="publisher-form-title">Upload Publisher</h3>
      <Formik
        initialValues={{
          name: '',
          metaName: '',
          imageUrl: ''
        }}
        onSubmit={async (values, { setSubmitting, setStatus }) => {
          await axios({
            method: 'post',
            url: 'http://localhost:8080/api/publishers',
            data: values
          }).then(
            res => {
              if (res.status === 200) {
                setStatus({ sent: true, msg: "Publisher added!" })
              }
            }
          ).catch(err => {
            setStatus({
              sent: false,
              msg: `Error! ${err}. Please try again`
            })
          })
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, status }) => (
          <Form>
            <Field type="name" name="name" placeholder="Publisher name" />
            <ErrorMessage name="name" component="div" />
            <Field type="metaName" name="metaName" placeholder="Publisher meta name" />
            <ErrorMessage name="metaName" component="div" />
            <Field type="imageUrl" name="imageUrl" placeholder="Image URL" />
            <ErrorMessage name="imageUrl" component="div" />
            <button className="form-button" type="submit" disabled={isSubmitting}>
              Submit
            </button>
            {status && status.msg && (
              <p className={`alert ${status.sent ? "alert-success" : "alert-error"}`}>
                {status.msg}
              </p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  )
}

const UpdatePublisherForm = () => {
  return (
  <div className="publisher-form">
      <h3 className="publisher-form-title">Update existing Publisher</h3>
      <Formik
        initialValues={{
          name: '',
          metaName: '',
          imageUrl: ''
        }}
        onSubmit={async (values, { setSubmitting, setStatus }) => {
          // ADD PUBLISHER ID TO URL
          await axios({
            method: 'put',
            url: 'http://localhost:8080/api/publishers',
            data: values
          }).then(
            res => {
              if (res.status === 200) {
                setStatus({ sent: true, msg: "Publisher added!" })
              }
            }
          ).catch(err => {
            setStatus({
              sent: false,
              msg: `Error! ${err}. Please try again`
            })
          })
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, status }) => (
          <Form>
            <Field type="name" name="name" placeholder="Publisher name" />
            <ErrorMessage name="name" component="div" />
            <Field type="metaName" name="metaName" placeholder="Publisher meta name" />
            <ErrorMessage name="metaName" component="div" />
            <Field type="imageUrl" name="imageUrl" placeholder="Image URL" />
            <ErrorMessage name="imageUrl" component="div" />
            <button className="form-button" type="submit" disabled={isSubmitting}>
              Submit
            </button>
            {status && status.msg && (
              <p className={`alert ${status.sent ? "alert-success" : "alert-error"}`}>
                {status.msg}
              </p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  )
}


export { UploadPublisherForm, UpdatePublisherForm };