import { APPROVE_CANDIDATE, DENY_CANDIDATE } from './candidates';
import * as actions from './candidates'

describe('candidates actions', () => {
  it('approveCandidate should create APPROVE_CANDIDATE action', () => {
    expect(actions.approveCandidate(0)).toEqual({
      type: APPROVE_CANDIDATE,
      id: 0
    })
  })

  it('denyCandidate should create DENY_CANDIDATE action', () => {
    expect(actions.denyCandidate(0)).toEqual({
      type: DENY_CANDIDATE,
      id: 0
    })
  })
})
