import {
  USERNAME,
  PASSWORD,
  ONLYID
} from './mutation_type'
export default {
  [USERNAME] (state, username) {
    state.username = username
  },
  [PASSWORD] (state, {
    password
  }) {
    state.password = password
  },
  [ONLYID] (state, onlyid) {
    state.onlyid = onlyid
  }
}
