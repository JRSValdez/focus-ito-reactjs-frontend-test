import React from 'react'

export type InputOnChange = React.ChangeEvent<HTMLInputElement>
export type UnknownChangeEvent = React.ChangeEvent<unknown>
export type FormSubmit = React.FormEvent
export type OnClick = React.MouseEvent<HTMLElement>

export type AxiosResponse = {
  data: any
  error: any
  success: boolean
}

export interface MovieProps {
  title: string
  poster_path: string
  release_date: string
  vote_average: string
}
