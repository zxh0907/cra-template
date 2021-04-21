import { Models } from '@rematch/core'
import count from './count'
// import { sharks } from './sharks'

export interface RootModel extends Models<RootModel> {
  count: typeof count
}

const models: RootModel = { count }
export default models
