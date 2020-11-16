import React from 'react'
import * as Yup from 'yup'
import {Formik, Form, Field} from 'formik'

const formSchema = Yup.object().shape({
  emoji: Yup.string()
    .min(1, 'Please pick at least one emoji!')
    .max(5, "Sorry, that's too many emojis!")
    .required('Required'),
  thought: Yup.string()
    .min(30, 'Thoughts should be at least 30 characters.')
    .max(250, "Sorry, that's too long for a thought.")
    .required('Required'),
})

const handleSubmit = (props, values) => {
  fetch('http://localhost:3000/thoughts', {
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
        {({ errors, touched }) => (
        <Form>
          <h3>Add shower thought</h3>

          <label htmlFor="emoji">Pick an emoji</label>
          <Field name="emoji" type="text" autoComplete="off" />
          {touched.emoji && errors.emoji && <div>{errors.emoji}</div>}
          <br/>

          <label htmlFor="thought">What is your shower thought?</label>
          <Field name="thought" type="textarea" autoComplete="off" />
          {touched.thought && errors.thought && <div>{errors.thought}</div>}
          <br/>

          <button type="submit">Submit</button>
        </Form>
        )}
      </Formik>
    </div>
  )
}

export default AddThoughtForm
