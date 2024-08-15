import { InboxAction } from "../enums/reducers"

export const initialState = {
  inbox: []
}

export default function reducer(state: typeof initialState, action: any) {
  switch (action.type) {
    case InboxAction.Update:
      return {
        inbox: state.inbox?.concat(
          action.payload
            ?.trim()
            ?.split("\n")
            .filter((item: string) => item?.trim()?.length > 0)
        )
      }

    default:
      throw Error("Unknown action provided to reducer.")
  }
}
