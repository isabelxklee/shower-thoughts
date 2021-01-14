import React from 'react'
import * as Yup from 'yup'
import {Formik, Form, Field} from 'formik'
import PrimaryButton from './PrimaryButton.jsx'
import SecondaryButton from './SecondaryButton.jsx'
import ErrorButton from './ErrorButton.jsx'

const AddThoughtForm = (props) => {
  const handleSubmit = (props, values) => {
    fetch('https://shower-thoughts-json.herokuapp.com/thoughts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        date: values.date,
        quote: values.thought,
      }),
    })
      .then((response) => response.json())
      .then((newThought) => {
        props.addNewThought(newThought)
      })
  }

  const formSchema = Yup.object().shape({
    date: Yup.date().required('* Please enter a valid date.'),
    thought: Yup.string()
      .min(30, '* Thoughts should be at least 30 characters.')
      .max(250, "* Sorry, that's too long for a thought.")
      .required('* This is a required field.'),
  })

  return (
    <Formik
      initialValues={{
        date: '',
        thought: '',
      }}
      validationSchema={formSchema}
      onSubmit={(values) => {
        handleSubmit(props, values)
      }}
    >
      {({errors, touched}) => (
        <Form>
          <h2>Add a thought</h2>

          <label htmlFor="date">Date</label>
          {touched.date && errors.date && (
            <section className="error-message">{errors.date}</section>
          )}
          <Field name="date" type="text" autoComplete="off" />

          <label htmlFor="thought">Your shower thought</label>
          {touched.thought && errors.thought && (
            <section className="error-message">{errors.thought}</section>
          )}
          <Field component="textarea" name="thought" autoComplete="off" />

          <section className="button-group">
            {errors.thought || errors.date ? (
              <ErrorButton type="submit">Create</ErrorButton>
            ) : (
              <PrimaryButton type="submit">Create</PrimaryButton>
            )}

            <SecondaryButton onClick={props.toggleFormDisplay} type="button">
              Cancel
            </SecondaryButton>
          </section>
        </Form>
      )}
    </Formik>
  )
}

export default AddThoughtForm
