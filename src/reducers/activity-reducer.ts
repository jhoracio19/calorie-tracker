import type { Activity } from "../types"

export type ActivityActions = 
    { type: 'safe-activity', payload: {newActivity : Activity} }

type ActivityState = {
    activities: Activity[]
}

export const initialState : ActivityState = {
    activities: []

}

export const activityReducer = (
        state  : ActivityState = initialState,
        actions: ActivityActions
    )   => {
        if(actions.type === 'safe-activity'){
            // Este código actualiza la lógica para manejar el state  
            

            return {
                ...state,
                activities: [...state.activities, actions.payload.newActivity]
            }
        }

        return state
}