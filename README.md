# Custom React Hooks

This repository contains a collection of reusable custom React hooks written in TypeScript to simplify and enhance common React functionalities.

## Table of Contents

- [Hooks](#hooks)
  - [useDebounce](#usedebounce)
  - [useFetch](#usefetch)
  - [usePrevious](#useprevious)

## Hooks

### 1. `useDebounce`

The `useDebounce` hook delays updating a value until after a specified delay time.

#### Parameters:

- **`val: T`** - The value to debounce.
- **`delay: number` (optional)** - The delay in milliseconds before updating the state. Default is `500ms`.

#### Returns:

- **`value: T`** - The debounced value.

---

### 2. `useFetch`

The `useFetch` hook is a custom hook for fetching data from a given URL with optional parameters. It provides loading and error states along with the fetched data.

#### Parameters:

- **`url: string`** - The URL to fetch data from.
- **`params: ParamsType`** - Additional parameters for the API request (e.g., query parameters).

#### Returns:

- **`data: QData | undefined`** - The fetched data.
- **`loading: boolean`** - Whether the request is still in progress.
- **`error: { message: string } | undefined`** - Error information, if any.

---

### 3. `usePrevious`

The `usePrevious` hook tracks the previous value of a given state or prop.

#### Parameters:

- **`val: T`** - The value to track.

#### Returns:

- **`previousValue: T | undefined`** - The previous value of the input.
