// Imports
import React, { useState } from "react"
import * as yup from "yup"

import Main from "@/web/components/Main"
import Sidebar from "@/web/components/ui/Sidebar"
import Button from "@/web/components/ui/buttons/Button"
import CancelButton from "@/web/components/ui/buttons/CancelButton"
import Subtitle from "@/web/components/ui/headers/Subtitle"
import Form from "@/web/components/ui/forms/Form"
import InputField from "@/web/components/ui/forms/InputField"
import FormField from "@/web/components/ui/forms/FormField"
import Textarea from "@/web/components/ui/forms/Textarea"

// Form attributes
const initialValues = {
  title: ""
}

const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required").label("Title")
})

// CreditCardForm function
const CreditCardForm = () => {
  const [creditCardNumber, setCreditCardNumber] = useState("")
  const [cvv, setCVV] = useState("") // Add CVV state

  // Function to format the credit card number with spaces
  const formatCreditCardNumber = (input) => {
    const strippedInput = input.replace(/\s/g, "") // Remove existing spaces

    if (strippedInput.length <= 4) {
      return strippedInput // No need for spaces if less than or equal to 4 characters
    }

    return strippedInput
      .match(/.{1,4}/g) // Split into chunks of 4 characters
      .join(" ")
  }

  const handleCreditCardNumberChange = (event) => {
    const input = event.target.value
    const formattedNumber = formatCreditCardNumber(input)
    setCreditCardNumber(formattedNumber)
  }

  // Function to format CVV input
  const handleCVVChange = (event) => {
    const input = event.target.value
    const formattedCVV = input.slice(0, 4) // Limit to a maximum of 4 characters
    setCVV(formattedCVV)
  }

  return (
    <>
      <Main>
        <Sidebar />
        <Form
          initialValues={initialValues}
          validationSchema={validationSchema}>
          <FormField
            name="title"
            type="text"
            placeholder="Title"
            label="Title"
          />
          <br />
          <Subtitle titleLabel="Credit Card details" />
          <br />
          <InputField
            type="text"
            className="p-2 border-solid border-slate-300 border-2 rounded-md bg-transparent mt-2 w-full"
            placeholder="1234 5678 9123 4567"
            inputLabel="Credit Card Number"
            inputName="creditCardNumber"
            value={creditCardNumber}
            onChange={handleCreditCardNumberChange}
            maxLength="19" // Including spaces, maximum length will be 19
          />
          <br />
          <br />
          <InputField
            type="text"
            className="p-2 border-solid border-slate-300 border-2 rounded-md bg-transparent mt-2 w-full"
            inputLabel="Credit Card Holder Name"
            placeholder="John Doe"
            inputName="creditCardHolder"
          />
          <br />
          <br />
          <div className="flex space-x-4">
            <InputField
              type="text"
              className="p-2 border-solid border-slate-300 border-2 rounded-md bg-transparent w-1/2"
              placeholder="MM"
              inputLabel="Expiration Month"
              inputName="expirationMonth"
              maxLength="2"
            />
            <InputField
              type="text"
              className="p-2 border-solid border-slate-300 border-2 rounded-md bg-transparent w-1/2"
              placeholder="YYYY"
              inputLabel="Expiration Year"
              inputName="expirationYear"
              maxLength="4"
            />
          </div>
          <br />
          <InputField
            type="text"
            className="p-2 border-solid border-slate-300 border-2 rounded-md bg-transparent w-full"
            placeholder="XXX"
            inputLabel="CVV"
            inputName="cvv"
            value={cvv}
            onChange={handleCVVChange}
            maxLength="4"
          />
          <br />
          <br />
          <InputField
            type="text"
            className="p-2 border-solid border-slate-300 border-2 rounded-md bg-transparent w-full"
            placeholder="1234"
            inputLabel="Card PIN"
            inputName="pin"
            maxLength="4"
          />
          <br />
          <br />
          <Subtitle titleLabel="Other" />
          <br />
          <Textarea placeholder="Notes" />
          <br />
          <br />
          <Button btnLabel="Save" />
          <CancelButton />
        </Form>
      </Main>
    </>
  )
}

export default CreditCardForm
