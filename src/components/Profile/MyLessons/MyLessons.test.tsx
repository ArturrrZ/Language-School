import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import MyLessons from './MyLessons'
import { getMyTrialRequests, cancelTrialRequest } from '../../../api/trialLessons'

vi.mock('../../../api/trialLessons', () => ({
  getMyTrialRequests: vi.fn(),
  cancelTrialRequest: vi.fn(),
}))

describe('MyLessons integration flow', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('loads upcoming lessons, cancels one, and updates UI', async () => {
    const mockedGetMyTrialRequests = vi.mocked(getMyTrialRequests)
    const mockedCancelTrialRequest = vi.mocked(cancelTrialRequest)

    const startAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
    const endAt = new Date(Date.now() + 25 * 60 * 60 * 1000).toISOString()

    mockedGetMyTrialRequests.mockResolvedValue([
      {
        id: 42,
        teacher_name: 'Anna Teacher',
        start_at: startAt,
        end_at: endAt,
        status: 'pending',
      },
    ] as any)

    mockedCancelTrialRequest.mockResolvedValue({ id: 42, status: 'cancelled' } as any)

    render(<MyLessons mode='upcoming' />)

    expect(await screen.findByText('Anna Teacher')).toBeInTheDocument()

    const user = userEvent.setup()
    await user.click(screen.getByRole('button', { name: 'Cancel' }))

    expect(await screen.findByText('Cancel trial request?')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Confirm' }))

    await waitFor(() => {
      expect(mockedCancelTrialRequest).toHaveBeenCalledWith(42)
    })

    expect(await screen.findByText('Trial request cancelled')).toBeInTheDocument()
    expect(screen.queryByText('Anna Teacher')).not.toBeInTheDocument()
  })

  it('shows retry action when loading fails and retries fetch', async () => {
    const mockedGetMyTrialRequests = vi.mocked(getMyTrialRequests)

    mockedGetMyTrialRequests
      .mockRejectedValueOnce(new Error('Network down'))
      .mockResolvedValueOnce([] as any)

    render(<MyLessons mode='upcoming' />)

    expect(await screen.findByText('Network down')).toBeInTheDocument()

    const user = userEvent.setup()
    await user.click(screen.getByRole('button', { name: 'Retry' }))

    await waitFor(() => {
      expect(mockedGetMyTrialRequests).toHaveBeenCalledTimes(2)
    })

    expect(await screen.findByText('No upcoming lessons.')).toBeInTheDocument()
  })
})
