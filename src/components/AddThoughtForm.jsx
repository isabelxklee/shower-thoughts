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
        emoji: values.emoji,
        quote: values.thought,
      }),
    })
      .then((response) => response.json())
      .then((newThought) => {
        props.addNewThought(newThought)
      })
  }

  const formSchema = Yup.object().shape({
    emoji: Yup.string()
      .max(5, "* Sorry, that's too many emojis!")
      .required('* Please pick at least one emoji!'),
    thought: Yup.string()
      .min(30, '* Thoughts should be at least 30 characters.')
      .max(250, "* Sorry, that's too long for a thought.")
      .required('* This is a required field.'),
  })

  return (
      <Formik
        initialValues={{
          emoji: '',
          thought: '',
        }}
        validationSchema={formSchema}
        onSubmit={(values) => {
          handleSubmit(props, values)
        }}
      >
        {({errors, touched}) => (
          <Form>
            <h3>Add shower thought</h3>

            <label htmlFor="emoji">Pick an emoji</label>
            {touched.emoji && errors.emoji && (
              <section className="error-message">{errors.emoji}</section>
            )}
            <Field name="emoji" type="text" autoComplete="off" />

            <label htmlFor="thought">What is your shower thought?</label>
            {touched.thought && errors.thought && (
              <section className="error-message">{errors.thought}</section>
            )}
            <Field component="textarea" name="thought" autoComplete="off" />

            <section className="button-group">
              {errors.thought || errors.emoji ? (
                <ErrorButton type="submit">Create</ErrorButton>
              ) : (
                <PrimaryButton type="submit">Create</PrimaryButton>
              )}

              <SecondaryButton variant="inverted" onClick={props.toggleFormDisplay} type="button">
                Cancel
              </SecondaryButton>
            </section>
          </Form>
        )}
      </Formik>
  )
}

export default AddThoughtForm
