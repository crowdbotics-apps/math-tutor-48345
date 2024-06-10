import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_donation_list = createAsyncThunk(
  "donations/api_v1_donation_list",
  async payload => {
    const response = await apiService.api_v1_donation_list(payload)
    return response.data
  }
)
export const api_v1_donation_create = createAsyncThunk(
  "donations/api_v1_donation_create",
  async payload => {
    const response = await apiService.api_v1_donation_create(payload)
    return response.data
  }
)
export const api_v1_donation_retrieve = createAsyncThunk(
  "donations/api_v1_donation_retrieve",
  async payload => {
    const response = await apiService.api_v1_donation_retrieve(payload)
    return response.data
  }
)
export const api_v1_donation_update = createAsyncThunk(
  "donations/api_v1_donation_update",
  async payload => {
    const response = await apiService.api_v1_donation_update(payload)
    return response.data
  }
)
export const api_v1_donation_partial_update = createAsyncThunk(
  "donations/api_v1_donation_partial_update",
  async payload => {
    const response = await apiService.api_v1_donation_partial_update(payload)
    return response.data
  }
)
export const api_v1_donation_destroy = createAsyncThunk(
  "donations/api_v1_donation_destroy",
  async payload => {
    const response = await apiService.api_v1_donation_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const donationsSlice = createSlice({
  name: "donations",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_donation_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_donation_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_donation_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_donation_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_donation_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_donation_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_donation_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_donation_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_donation_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_donation_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_donation_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_donation_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_donation_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_donation_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_donation_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_donation_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_donation_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_donation_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_donation_list,
  api_v1_donation_create,
  api_v1_donation_retrieve,
  api_v1_donation_update,
  api_v1_donation_partial_update,
  api_v1_donation_destroy,
  slice: donationsSlice
}
