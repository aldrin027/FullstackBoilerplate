import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import {Homepage} from './Homepage'

describe('Homepage', () => {
  it('renders inside document', () => {
    render(<Homepage />)

    const heading = screen.getByText('BUHAY PA BA MGA ACCLA???!!')

    expect(heading).toBeInTheDocument()

  })
})