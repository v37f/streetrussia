import { configureStore } from '@reduxjs/toolkit'
import regions from './slices/regionsSlice'
import infrastructure from './slices/infrastructureSlice'
import events from './slices/eventsSlice'
import map from './slices/mapSlice'
import filter from './slices/filterSlice'
import projects from './slices/projectsSlice'

export const store = configureStore({
  reducer: {
    regions,
    infrastructure,
    events,
    map,
    filter,
    projects,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
