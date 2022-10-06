import React from 'react';

export type InputOnChange = React.ChangeEvent<HTMLInputElement>
export type FormSubmit = React.FormEvent

export type AxiosResponse = {
    data: any
    error: any
    success: boolean
  }