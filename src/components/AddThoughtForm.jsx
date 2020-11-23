import React from 'react'
import * as Yup from 'yup'
import {Formik, Form, Field} from 'formik'
import Button from './Button.jsx'

const formSchema = Yup.object().shape({
  emoji: Yup.string()
    .max(5, "* Sorry, that's too many emojis!")
    .required('* Please pick at least one emoji!'),
  thought: Yup.string()
    .min(30, '* Thoughts should be at least 30 characters.')
    .max(250, "* Sorry, that's too long for a thought.")
    .required('* This is a required field.'),
})

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

const AddThoughtForm = (props) => {
  return (
    <div>
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
        {/* this is a render method, which expects a react component */}
        {({errors, touched}) => (
          <Form>
            <h3>Add shower thought</h3>

            <label htmlFor="emoji">Pick an emoji</label>
            {touched.emoji && errors.emoji && <div id="error">{errors.emoji}</div>}
            <Field name="emoji" type="text" autoComplete="off" />

            <label htmlFor="thought">What is your shower thought?</label>
            {touched.thought && errors.thought && <div id="error">{errors.thought}</div>}
            <Field component="textarea" name="thought" autoComplete="off" />

            <section className="button-group">
              <Button type="submit" id={errors.thought || errors.emoji ? 'error' : ''}>
                Create
              </Button>

              <Button variant="inverted" onClick={props.toggleFormDisplay} type="button">
                Cancel
              </Button>
            </section>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default AddThoughtForm
