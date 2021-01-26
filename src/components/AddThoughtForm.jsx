import React from 'react'
import * as Yup from 'yup'
import {Formik, Form, Field} from 'formik'
import {format} from 'date-fns'
import PrimaryButton from './PrimaryButton.jsx'
import SecondaryButton from './SecondaryButton.jsx'
import ErrorButton from './ErrorButton.jsx'

const AddThoughtForm = (props) => {
  const handleSubmit = async (values) => {
    const newDate = format(new Date(), 'M.dd.yyyy')

    const settings = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        date: newDate,
        quote: values.thought,
      }),
    }
    const response = await fetch('https://shower-thoughts-json.herokuapp.com/thoughts', settings)
    const newThought = await response.json()
    props.addNewThought(newThought)
  }

  const formSchema = Yup.object().shape({
    thought: Yup.string()
      .min(30, '* Thoughts should be at least 30 characters.')
      .max(250, "* Sorry, that's too long for a thought.")
      .required('* This is a required field.'),
  })

  return (
    <Formik
      initialValues={{
        thought: '',
      }}
      validationSchema={formSchema}
      onSubmit={(values) => {
        handleSubmit(values)
      }}
    >
      {({errors, touched}) => (
        <Form>
          <label htmlFor="thought">Add a shower thought: </label>
          {touched.thought && errors.thought && (
            <section className="error-message">{errors.thought}</section>
          )}
          <Field component="textarea" name="thought" autoComplete="off" />

          <section className="button-group">
            {errors.thought || errors.date ? (
              <ErrorButton type="submit">Submit</ErrorButton>
            ) : (
              <PrimaryButton type="submit">Submit</PrimaryButton>
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
